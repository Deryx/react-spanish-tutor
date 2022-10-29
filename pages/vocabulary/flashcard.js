import { useState, useEffect, useRef, useImperativeHandle } from 'react';
import { PrismaClient } from '@prisma/client';
import Siteheader from '/src/components/siteHeader.tsx';
import Footer from '/src/components/footer.tsx';
import Dropdown from '/src/components/dropDown.tsx';
import Card from '/src/components/card.tsx';

const prisma = new PrismaClient;

function Flashcard({ dictionary, categories }) {
    const cardRef = useRef( null );
    // const card = cardRef.current && cardRef.current;

    const headerFront = 'Front';
    const headerBack = 'Back';
    const info = '';
    const categorySelections = [];
    const quizDictionary = [];

    const flipCard = () => {
        cardRef.current.classList.toggle( 'flipCard' );
    }

    const handleClick = () => {
        cardRef.current.addEventListener('click', flipCard);

        return () => {
            cardRef.current.removeEventListener('click', flipCard);
        }
    }

    // useEffect( () => {
    //     if (card) {
    //         card.addEventListener( 'click', flipCard );

    //         const flipCard = () => {
    //             card.classList.toggle( 'flipCard' );
    //         }

    //         return () => {
    //             card.removeEventListener( 'click', flipCard );
    //         };
    //     }
    // }, [ card ]);

    for(const category of categories) {
        categorySelections.push( 
            {
                id: category.id,
                category: category.category
            }
         );
    }
    categorySelections.sort((a, b) => a.category > b.category ? 1 : -1);
    categorySelections.unshift({ id: '', category: 'all' });

    for(const entry in dictionary) {
        quizDictionary.push( 
            { 
                word: dictionary.word,
                translation: dictionary.translation,
                category: dictionary.category
            }
         );
    }

    const incrementQuestion = () => {
        if( question <= question ) {
            setQuestion( question + 1 );
        }
    }

    return (
        <>
            <section className='pageContainer'>
                <h1>Vocabulary Flashcard</h1>
                <form id="vocabularyFlashcard" className="col-xs-12 col-sm-8 col-lg-4">
                    <fieldset className="col-lg-12">
                        <dl>
                            <dt><label htmlFor="categorySelect">category: </label></dt>
                            <dd>
                                <select id="categorySelect" name="categorySelect">
                                    { categorySelections.map( ( categorySelection, i ) => 
                                        <option key={ i } value={ categorySelection.id }>{ categorySelection.category }</option>
                                    )}
                                </select>
                            </dd>
                        </dl>
                        <Card ref={ cardRef } frontHeader={ headerFront } backHeader={ headerBack } frontInfo={ info } backInfo={ info } />
                    </fieldset>
                    <div className='buttons col-lg-12'>
                        <input type="button" id="flipBtn" onClick={ handleClick } value="flip card" />
                        <input type="button" id="nextBtn" onClick={ incrementQuestion } value="next" />
                    </div>
                </form>
            </section>
            <Footer />
        </>
    )
}

function generateRandomNumbers( arrLength, maxNumber ) {
    const numArray = [];
    let index = 0;

    while( index < arrLength ) {
        let newNumber = Math.floor(( Math.random() * maxNumber ));
        if( numArray.indexOf( newNumber ) === -1 ) {
            numArray.push( newNumber );
            index++;
        }
    }

    return numArray;
}

export async function getServerSideProps() {
    const allVocabulary = await prisma.words.findMany();
    const allCategories = await prisma.categories.findMany();

    return {
        props: {
            dictionary: allVocabulary,
            categories: allCategories
        }
    }
}

export default Flashcard;
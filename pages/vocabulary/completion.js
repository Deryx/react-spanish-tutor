import { useState, useEffect } from 'react';
import { PrismaClient } from '@prisma/client';
import Accents from '/src/components/accents.tsx';
import randomNumberGenerator from '../../helper/useRandomNumberGenerator.tsx';

const prisma = new PrismaClient();

function Completion({ dictionary, categories }) {
    const [questionSet, setQuestionSet] = useState( [] );
    const [question, setQuestion] = useState( 0 );

    const numQuestions = 5;
    const numOptions = 5;
    const categorySelections = [];
    const completionDictionary = dictionary;
    const dictionaryLength = dictionary.length;

    const incrementQuestion = () => {
        if( question <= question ) {
            setQuestion( question + 1 );
        }
    }

    const createCategorySelect = () => {
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
    }

    useEffect( () => {    
        const words = randomNumberGenerator( numQuestions, dictionaryLength );
        for(let i = 0; i < numQuestions; i++) {
            let current = words[i];
            let set = {};
            let optionNumbers;
            let randomSpot = randomNumberGenerator( 1, 5 );

            set.question = completionDictionary[current].translation;
            set.answer = completionDictionary[current].word;

            setQuestionSet( current => [...current, set] );
        }
    }, []);

    createCategorySelect();

    return (
        <>
            <section className='pageContainer'>
                <h1>Vocabulary Completion</h1>
                <form id="completion" className="col-xs-12 col-sm-8 col-lg-4">
                    <fieldset className="col-lg-12">
                        <dl id='categorySelect'>
                            <dt><label htmlFor="category">category: </label></dt>
                            <dd>
                                <select id="category" name="category">
                                    { categorySelections.map( ( categorySelection, i ) => 
                                        <option key={ i } value={ categorySelection.id }>{ categorySelection.category }</option>
                                    )}
                                </select>
                            </dd>
                        </dl>
                        <dl id="questions">

                        </dl>
                    </fieldset>
                    <Accents></Accents>
                    <div className='buttons col-lg-12'>
                        <input type="button" id="submitBtn" onClick={ incrementQuestion } value="next" />
                    </div>
                </form>
            </section>
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

export default Completion;
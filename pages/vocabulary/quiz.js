import { useState, useEffect } from 'react';
import { PrismaClient } from '@prisma/client';
import Siteheader from '/src/components/siteHeader.tsx';
import Footer from '/src/components/footer.tsx';
import Radiogroup from '/src/components/radioGroup.tsx';

const prisma = new PrismaClient();

function Quiz({ dictionary, categories }) {
    const [questions, setQuestions] = useState( [] );
    const [question, setQuestion] = useState( 0 );

    const categorySelections = [];
    const quizDictionary = [];
    const dictionaryLength = dictionary.length;
    const numQuestions = 5;
    const numOptions = 5;
    let options = [];

    useEffect( () => {    
        setQuestions( generateRandomNumbers( numQuestions, dictionaryLength ) );
    
        let randomSpot;
        for(let i = 0; i < numQuestions; i++) {
            options.push( generateRandomNumbers( numOptions - 1, dictionaryLength ) );
            randomSpot = generateRandomNumbers( 1, 4 );
            options[i].splice(randomSpot[0], 0, questions[i]);
        }
    }, []);

    for(const category of categories) {
        categorySelections.push( 
            {
                id: category.id,
                category: category.category
            }
         );
    }
    categorySelections.unshift({ id: '', category: 'all' });

    for(const entry of dictionary) {
        quizDictionary.push( 
            { 
                word: entry.word,
                translation: entry.translation,
                category: entry.category
            }
         );
    }

    function incrementQuestion() {
        setQuestion( question + 1 );
        console.log(question);
    }

    return (
        <>
            <Siteheader />
            <section className='pageContainer'>
                <h1>Vocabulary Quiz</h1>
                <form id="quiz" className="col-xs-12 col-sm-8 col-lg-4">
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
                        <section>
                            <h2>{ questions[question] }</h2>
                        </section> 
                    </fieldset>
                    <div className='buttons col-lg-12'>
                        <button id="submitBtn" onClick={ incrementQuestion }>next</button>
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

export default Quiz;
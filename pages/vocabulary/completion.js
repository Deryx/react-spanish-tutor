import { useState, useEffect } from 'react';
import { PrismaClient } from '@prisma/client';
import Modal from '/src/components/modal.tsx';
import Accents from '/src/components/accents.tsx';
import randomNumberGenerator from '../../helper/useRandomNumberGenerator.tsx';

const prisma = new PrismaClient();

function Completion({ dictionary, categories }) {
    const [numQuestions, setNumQuestions] = useState();
    const [category, setCategory] = useState();
    const [questionSet, setQuestionSet] = useState( [] );
    const [userAnswer, setUserAnswer] = useState( [] );
    const [userAnswers, setUserAnswers] = useState( [] );
    const [question, setQuestion] = useState( 0 );
    const [showModal, setShowModal] = useState( false );
    let answer;

    const BLANK = ' ';
    const numOptions = 5;
    const categorySelections = [];
    let completionDictionary = [];

    const getLetter = (event) => {
        return event.target.value;
    }

    const incrementQuestion = () => {
        if( question < numQuestions ) {
            setQuestion( ++question );
        } 

        question === numQuestions && setShowModal( showModal => showModal = !showModal );
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

    const handleAnswerChange = ( e ) => {
        
    }

    const handleNumQuestionsChange = () => {
        setNumQuestions( parseInt( event.target.value ));
    }

    const handleCategoryChange = () => {
        setCategory( parseInt( event.target.value ));
    }

    useEffect( () => {    
        answer = document.querySelectorAll( 'ul li > input');
        completionDictionary = [...dictionary.filter( word => word.category === category )];
        const dictionaryLength = completionDictionary.length;
        const words = randomNumberGenerator( numQuestions, dictionaryLength );
        for(let i = 0; i < numQuestions; i++) {
            let current = words[i];
            let currentWord = completionDictionary[current].word.split('');
            let currentLength = currentWord.length;
            let numberBlanks = Math.ceil( currentLength / 2 );
            let blanksArray = randomNumberGenerator( numberBlanks, currentLength );
            for(const index of blanksArray) {
                currentWord[index] = BLANK;
            }
            let set = {};
            let optionNumbers;

            set.question = currentWord.join('');
            set.translation = completionDictionary[current].translation;
            set.answer = completionDictionary[current].word;

            setQuestionSet( current => [...current, set] );
        }
    }, [category]);

    createCategorySelect();

    return (
        <>
            <section className='pageContainer'>
                { showModal === true ? <Modal /> : null }
                <h1>Vocabulary Completion</h1>
                <form id="completion" className="col-xs-12 col-sm-8 col-lg-4">
                    <fieldset className="col-lg-12">
                        <dl id='numQuestionsSelect'>
                            <dt><label htmlFor='numQuestions'>number questions: </label></dt>
                            <dd>
                                <select id="numQuestions" name="numQuestions" onChange={ handleNumQuestionsChange }>
                                    <option key=""></option>
                                    <option key="numQuestions5" value="5">5</option>
                                    <option key="numQuestions10" value="10">10</option>
                                    <option key="numQuestions15" value="15">15</option>
                                    <option key="numQuestions20" value="20">20</option>
                                </select>
                            </dd>
                        </dl>
                        { numQuestions && 
                            <dl id='categorySelect'>
                                <dt><label htmlFor="category">category: </label></dt>
                                <dd>
                                    <select id="category" name="category" onChange={ handleCategoryChange }>
                                        { categorySelections.map( ( categorySelection ) => 
                                            <option key={ categorySelection.category } value={ categorySelection.id }>{ categorySelection.category }</option>
                                        )}
                                    </select>
                                </dd>
                            </dl> 
                        }
                        { questionSet.length > 0 && 
                            <dl id="questions">
                                <dt>
                                    <h2>[ { questionSet[question] && questionSet[question].translation } ]</h2>
                                </dt>
                                <dd>
                                    <ul>
                                        { questionSet[question] && questionSet[question].question.split('').map( (letter, index) => 
                                            <li key={ index }><input key={ `answer${index}` } value={ letter } disabled={ letter !== BLANK } /></li>
                                        ) }
                                    </ul>
                                </dd>
                            </dl>
                        }
                    </fieldset>
                    { questionSet[question] && <Accents /> }
                    <div className='buttons col-lg-12'>
                        { questionSet[question] && <input type="button" id="submitBtn" onClick={ incrementQuestion } value="submit" onChange={ getLetter } /> }
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
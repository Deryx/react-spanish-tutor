import { useState, useEffect, useRef, FC } from 'react';
import { PrismaClient } from '@prisma/client';
import Modal from '../../src/components/modal';
import SimpleReport from '../../src/components/vocabulary/simple-report';
import Accents from '../../src/components/accents';
import randomNumberGenerator from '../../helper/useRandomNumberGenerator';

const prisma = new PrismaClient();

interface CompletionProps {
    dictionary: any[];
    categories: any[];
}

const Completion: FC<CompletionProps> = ({ dictionary, categories }) => {
    const numQuestionsRef = useRef(null);
    const categoriesRef = useRef(null);
    const answerRef = useRef(null);
    const [numQuestions, setNumQuestions] = useState(0);
    const [category, setCategory] = useState();
    const [questionSet, setQuestionSet] = useState([]);
    const [userAnswers, setUserAnswers] = useState([]);
    const [question, setQuestion] = useState(0);
    const [showModal, setShowModal] = useState( false );
    const reportTitle = "Vocabulary Completion Report";
    let currentBox;
    let currentLetter;

    const BLANK = ' ';
    const numOptions = 5;
    const categorySelections = [];
    let completionDictionary = [];

    const incrementQuestion = () => {
        if(question < numQuestions) {
            setQuestion(question + 1);
        } 

        question === (numQuestions - 1) && setShowModal(showModal => showModal = !showModal);
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
        categorySelections.unshift({ id: '0', category: 'all' });
        categorySelections.unshift({ id: '', category: 'SELECT A CATEGORY' });
    }

    const handleNumQuestionsChange = () => {
        setNumQuestions( parseInt( event.target.value ));
        numQuestionsRef.current.style.display = "none";
    }

    const handleCategoryChange = (event) => {
        setCategory( parseInt( event.target.value ));
        categoriesRef.current.style.display = "none";
    }

    const clearAnswer = () => {
        const currentAnswer = answerRef.current.querySelectorAll('input');
        for(const letter of currentAnswer) {
            letter.value = '';
        }
    }

    const handleChange = (e) => {
        currentLetter = e.target.value;
        currentBox.value = currentLetter;
    }

    const handleSubmitClick = () => {
        const currentAnswer = answerRef.current.querySelectorAll('input');
        const answer = [];
        for(const letter of currentAnswer) {
            answer.push( letter.value );
        }
        setUserAnswers( prev => [ ...prev, answer.join( '' ) ]);
        incrementQuestion();
        clearAnswer();
    }

    const handleOnFocusEvent = (e) => {
        if(answerRef.current.contains(e.target)){
            currentBox = e.target;
            currentBox.focus();
            currentBox.selectionEnd = currentBox.selectionStart + 1;
        }
    }

    const handleAccentClick = (e) => {
        e.preventDefault();
        const currentPosition = currentBox.selectionStart;
        let answer = currentBox.value;
        currentBox.value = answer.slice(0, currentPosition) + e.target.value + answer.slice(currentPosition);
    }

    useEffect( () => {    
        completionDictionary = category != '0' ? [...dictionary.filter( word => word.category === category )] : dictionary;
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

            set.question = completionDictionary[current].translation;;
            set.incompleteWord = currentWord.join('');
            set.answer = completionDictionary[current].word;

            setQuestionSet( current => [...current, set] );
        }
    }, [category]);

    createCategorySelect();

    return (
        <>
            <section className='pageContainer'>
                { showModal === true ? 
                    <>
                        <Modal>
                            <SimpleReport reportTitle={ reportTitle } questionSet={ questionSet } userAnswers={ userAnswers } />
                        </Modal>
                    </>
                    : null 
                }
                <h1>Vocabulary Completion</h1>
                <form id="completion" className="col-xs-12 col-sm-8 col-lg-4">
                    <fieldset className="col-lg-12">
                        <dl ref={ numQuestionsRef } id='numQuestionsSelect'>
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
                        { numQuestions ?  
                            <dl ref={ categoriesRef } id='categorySelect'>
                                <dt><label htmlFor="category">category: </label></dt>
                                <dd>
                                    <select id="category" name="category" onChange={ handleCategoryChange }>
                                        { categorySelections.map( ( categorySelection ) => 
                                            <option key={ categorySelection.category } value={ categorySelection.id }>{ categorySelection.category }</option>
                                        )}
                                    </select>
                                </dd>
                            </dl> 
                        : null }
                        { questionSet[question] ? 
                            <dl id="questions">
                                <dt>
                                    <h2>[ { questionSet[question].question } ]</h2>
                                </dt>
                                <dd>
                                    <ul ref={ answerRef }>
                                        { questionSet[question] && questionSet[question].incompleteWord.split('').map( (letter, index) => 
                                            <li key={ index }><input type="text" id={ `answer${index}` } key={ `answer${index}` } value={ letter !== BLANK ? letter : null } onFocus={ handleOnFocusEvent } onChange={ handleChange } maxLength="1" size="1" disabled={ letter !== BLANK } /></li>
                                        ) }
                                    </ul>
                                </dd>
                            </dl>
                        : null }
                    </fieldset>
                    <div className='buttons col-lg-12'>
                        { questionSet[question] ? <input type="button" id="submitBtn" onClick={ handleSubmitClick } value="submit" /> : null }
                    </div>
                </form>
                { questionSet[question] ? <Accents handleAccentClick={ handleAccentClick } /> : null }
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
import { useState, useEffect, useRef } from 'react';
import { PrismaClient } from '@prisma/client';
import Modal from '/src/components/modal.tsx';
import SimpleReport from '/src/components/vocabulary/simple-report.tsx';
import Accents from '/src/components/accents.tsx';
import randomNumberGenerator from '../../helper/useRandomNumberGenerator.tsx';

const prisma = new PrismaClient();

function Fillin({ dictionary, categories }) {
    const numQuestionsRef = useRef();
    const categoriesRef = useRef();
    const answerRef = useRef();
    const [numQuestions, setNumQuestions] = useState();
    const [category, setCategory] = useState();
    const [questionSet, setQuestionSet] = useState( [] );
    const [question, setQuestion] = useState( 0 );
    const [userAnswers, setUserAnswers] = useState( [] );
    const [showModal, setShowModal] = useState( false );
    const reportTitle = "Vocabulary Fill-In Report";

    const numOptions = 5;
    const categorySelections = [];
    let fillinDictionary = [];

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

    const handleNumQuestionsChange = () => {
        setNumQuestions( parseInt( event.target.value ));
        numQuestionsRef.current.style.display = "none";
    }

    const handleCategoryChange = () => {
        setCategory( parseInt( event.target.value ));
        categoriesRef.current.style.display = "none";
    }

    const clearAnswer = () => {
        const currentAnswer = answerRef.current.querySelector('input');
        currentAnswer.value = null;
    }

    const handleSubmitClick = () => {
        const currentAnswer = answerRef.current.querySelector('input');
        const answer = currentAnswer.value;
        setUserAnswers( prev => [...prev, answer] );
        incrementQuestion();
        clearAnswer();
    }

    const handleAccentClick = (e) => {
        e.preventDefault();
        const currentPosition = answerRef.current.selectionStart;
        let answer = answerRef.current.value;
        answerRef.current.value = answer.slice(0, currentPosition) + e.target.value + answer.slice(currentPosition);
        answerRef.current.focus();
        answerRef.current.selectionStart = currentPosition + 1;
        answerRef.current.selectionEnd = currentPosition + 1;
    }

    useEffect(() => {
        fillinDictionary = [...dictionary.filter( word => word.category === category )];
        const dictionaryLength = fillinDictionary.length;
        const words = randomNumberGenerator( numQuestions, dictionaryLength );
        for(let i = 0; i < numQuestions; i++) {
            let current = words[i];
            let set = {};
            let optionNumbers;
            let randomSpot = randomNumberGenerator( 1, 5 );

            set.question = fillinDictionary[current].translation;
            set.answer = fillinDictionary[current].word;

            setQuestionSet( current => [...current, set] );
        }
    }, [category]);

    createCategorySelect();

    return (
        <>
            <section className='pageContainer'>
                { showModal === true ? 
                    <>
                        <Modal />
                        <SimpleReport reportTitle={ reportTitle } questionSet={ questionSet } userAnswers={ userAnswers } />
                    </>
                    : null 
                }
                <h1>Vocabulary Fill-in</h1>
                <form id="fillin" className="col-xs-12 col-sm-8 col-lg-4">
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
                                    <h2>
                                        [ { questionSet[question] ? questionSet[question].question : null } ]
                                    </h2>
                                </dt>
                                <dd>
                                    <input ref={ answerRef } type="text" id={ `answer${question}` } key={ `answer${question}` } onChange={ (event) => event.target.value }  />
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

export default Fillin;
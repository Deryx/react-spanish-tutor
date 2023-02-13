import { useState, useEffect, useRef, FC } from 'react';
import { PrismaClient } from '@prisma/client';
import Modal from '../../src/components/modal';
import SimpleReport from '../../src/components/vocabulary/simple-report';
import Accents from '../../src/components/accents';
import randomNumberGenerator from '../../helper/useRandomNumberGenerator';

const prisma = new PrismaClient();

interface FillinProps {
    dictionary: any[];
    categories: any[];
}

const Fillin: FC<FillinProps> = ({ dictionary, categories }) => {
    const numQuestionsRef = useRef(null);
    const categoriesRef = useRef(null);
    const answerRef = useRef(null);
    const [numQuestions, setNumQuestions] = useState(0);
    const [category, setCategory] = useState(null);
    const [questionSet, setQuestionSet] = useState([]);
    const [question, setQuestion] = useState( 0 );
    const [userAnswers, setUserAnswers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const reportTitle = "Vocabulary Fill-In Report";

    const numOptions = 5;
    const categorySelections = [];
    let fillinDictionary = [];

    const incrementQuestion = () => {
        if(question < numQuestions) {
            setQuestion(question + 1);
        } 
        
        question === (numQuestions - 1) && setShowModal( showModal => showModal = !showModal );
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

    const handleNumQuestionsChange = (e) => {
        setNumQuestions( parseInt(e.target.value) );
        numQuestionsRef.current.style.display = "none";
    }

    const handleCategoryChange = (e) => {
        setCategory( e.target.value );
        categoriesRef.current.style.display = "none";
    }

    const clearAnswer = () => {
        answerRef.current.value = null;
    }

    const handleSubmitClick = () => {
        const answer = answerRef.current.value;
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
        fillinDictionary = category != '0' ? [...dictionary.filter( word => word.category === category )] : dictionary;
        const dictionaryLength = fillinDictionary.length;
        const words = randomNumberGenerator( numQuestions, dictionaryLength );
        for(let i = 0; i < numQuestions; i++) {
            let current = words[i];
            let set = {
                question: '',
                answer: ''
            };
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
                        <Modal>
                            <SimpleReport reportTitle={ reportTitle } questionSet={ questionSet } userAnswers={ userAnswers } />
                        </Modal>
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
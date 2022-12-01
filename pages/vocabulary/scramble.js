import { useState, useEffect, useRef } from 'react';
import { PrismaClient } from '@prisma/client';
import Modal from '/src/components/modal.tsx';
import SimpleReport from '/src/components/vocabulary/simple-report.tsx';
import randomNumberGenerator from '../../helper/useRandomNumberGenerator.tsx';

const prisma = new PrismaClient();

function Scramble({ dictionary, categories }) {
    const numQuestionsRef = useRef();
    const categoriesRef = useRef();
    const answerRef = useRef();
    const [numQuestions, setNumQuestions] = useState();
    const [category, setCategory] = useState();
    const [questionSet, setQuestionSet] = useState( [] );
    const [question, setQuestion] = useState( 0 );
    const [userAnswers, setUserAnswers] = useState( [] );
    const [showModal, setShowModal] = useState( false );
    const reportTitle = "Vocabulary Scramble Report";

    const categorySelections = [];
    let scrambleDictionary = [];

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

    const handleSubmitClick = () => {
        const currentAnswer = answerRef.current.querySelectorAll( 'div' );
        const answer = [];
        for( const div of currentAnswer ) {
            answer.push( div.innerText );
        }
        setUserAnswers( prev => [...prev, answer.join('')] );
        incrementQuestion();
    }

    useEffect(() => {
        scrambleDictionary = [...dictionary.filter( word => word.category === category )];
        const dictionaryLength = scrambleDictionary.length;
        const words = randomNumberGenerator( numQuestions, dictionaryLength );
        for(let i = 0; i < numQuestions; i++) {
            let current = words[i];
            let currentWord = scrambleDictionary[current].word;
            let currentTranslation = scrambleDictionary[current].translation;
            let set = {};

            let currentArray = currentWord.split( '' );
            let scrambledArray = randomNumberGenerator( currentWord.length, currentWord.length );
            let scrambledWord = scrambledArray.map( element => currentArray[element] );
            set.question = currentTranslation;
            set.scrambledWord = scrambledWord
            set.answer = currentWord;

            setQuestionSet( current => [...current, set] );
        }
    }, [category]);

    createCategorySelect();
    console.log( userAnswers );

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
                <h1>Vocabulary Scramble</h1>
                <form id="scramble" className="col-xs-12 col-sm-8 col-lg-4">
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
                                <dd ref={ answerRef }>
                                    { questionSet[question].scrambledWord.map( ( letter, index ) =>
                                        <div key={ index }>{ letter }</div>
                                    ) }
                                </dd>
                            </dl>
                        : null }
                    </fieldset>
                    <div className='buttons col-lg-12'>
                        { questionSet[question] ? <input type="button" id="submitBtn" onClick={ handleSubmitClick } value="submit" /> : null }
                    </div>
                </form>
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

export default Scramble;
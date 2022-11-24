import { useState, useEffect, useRef } from 'react';
import { PrismaClient } from '@prisma/client';
import Modal from '/src/components/modal.tsx';
import randomNumberGenerator from '../../helper/useRandomNumberGenerator.tsx';

const prisma = new PrismaClient();

function Quiz({ dictionary, categories }) {
    const numQuestionsRef = useRef();
    const categoriesRef = useRef();
    const answerRef = useRef();

    const [numQuestions, setNumQuestions] = useState();
    const [category, setCategory] = useState();
    const [questionSet, setQuestionSet] = useState( [] );
    const [question, setQuestion] = useState( 0 );
    const [userAnswers, setUserAnswers] = useState( [] );
    const [showModal, setShowModal] = useState( false );

    const numOptions = 5;
    const categorySelections = [];
    let quizDictionary = [];

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
        const currentAnswers = answerRef.current.querySelectorAll('input[type="radio"]');
        for( const answer of currentAnswers ) {
            answer.checked = false;
        }
    }

    const handleSubmitClick = () => {
        const currentAnswers = answerRef.current.querySelectorAll('input[type="radio"]');
        for( const answer of currentAnswers ) {
            if( answer.checked ) {
                setUserAnswers( prev => [...prev, answer.value] );
                break;
            }
        }
        incrementQuestion();
        clearAnswer();
    }

    useEffect(() => {
        quizDictionary = [...dictionary.filter( word => word.category === category )];
        const dictionaryLength = quizDictionary.length;
        const words = randomNumberGenerator( numQuestions, dictionaryLength );
        for(let i = 0; i < numQuestions; i++) {
            let current = words[i];
            let set = {};
            let optionNumbers;
            let randomSpot = randomNumberGenerator( 1, 5 );

            set.question = quizDictionary[current].word;
            set.answer = quizDictionary[current].translation;

            set.options = [];
            optionNumbers = randomNumberGenerator( numOptions - 1, dictionaryLength );
            for(const option of optionNumbers) {
                set.options.push( quizDictionary[option].translation );
            }
            set.options.splice( randomSpot, 0, set.answer );

            setQuestionSet( current => [...current, set] );
        }
    }, [category]);

    createCategorySelect();
    console.log(userAnswers);

    return (
        <>
            <section className='pageContainer'>
                { showModal === true ? <Modal /> : null }
                <h1>Vocabulary Quiz</h1>
                <form id="quiz" className="col-xs-12 col-sm-8 col-lg-4">
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
                                    <label htmlFor={ `q${ question }` }>
                                        { questionSet[question].question }
                                    </label>
                                </dt>
                                <dd ref={ answerRef }>
                                    { questionSet[question] ? questionSet[question].options.map( option => 
                                        <div>
                                            <input type="radio" id={ `q${ question }` } name={ `q${ question }` } value={ option } onChange={ e => e.target.value } />
                                            <label htmlFor={ `q${ question }` }> 
                                                { option }
                                            </label>
                                        </div>
                                    ) : null }
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

export default Quiz;
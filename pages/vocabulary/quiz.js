import { useState, useEffect } from 'react';
import { PrismaClient } from '@prisma/client';
import Modal from '/src/components/modal.tsx';
import randomNumberGenerator from '../../helper/useRandomNumberGenerator.tsx';

const prisma = new PrismaClient();

function Quiz({ dictionary, categories }) {
    const [numQuestions, setNumQuestions] = useState();
    const [category, setCategory] = useState();
    const [questionSet, setQuestionSet] = useState( [] );
    const [question, setQuestion] = useState( 0 );
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
    }

    const handleCategoryChange = () => {
        setCategory( parseInt( event.target.value ));
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
    }, []);

    createCategorySelect();

    return (
        <>
            <section className='pageContainer'>
                { showModal === true ? <Modal /> : null }
                <h1>Vocabulary Quiz</h1>
                <form id="quiz" className="col-xs-12 col-sm-8 col-lg-4">
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
                            <dt>
                                <label htmlFor={ `q${ question }` }>
                                    { questionSet[question] && questionSet[question].question }
                                </label>
                            </dt>
                            <dd>
                                { questionSet[question] && questionSet[question].options.map( option => 
                                    <div>
                                        <input type="radio" id={ `q${ question }` } name={ `q${ question }` } value={ option } />
                                        <label htmlFor={ `q${ question }` }> 
                                            { option }
                                        </label>
                                    </div>
                                )}
                            </dd>
                        </dl>
                    </fieldset>
                    <div className='buttons col-lg-12'>
                        { questionSet[question] && <input type="button" id="submitBtn" onClick={ incrementQuestion } value="submit" /> }
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
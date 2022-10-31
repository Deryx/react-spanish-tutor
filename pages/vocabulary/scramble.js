import { useState, useEffect } from 'react';
import { PrismaClient } from '@prisma/client';
import Modal from '/src/components/modal.tsx';
import randomNumberGenerator from '../../helper/useRandomNumberGenerator.tsx';

const prisma = new PrismaClient();

function Scramble({ dictionary, categories }) {
    const [questionSet, setQuestionSet] = useState( [] );
    const [question, setQuestion] = useState( 0 );
    const [showModal, setShowModal] = useState( false );

    const numQuestions = 5;
    const categorySelections = [];
    const scrambleDictionary = dictionary;
    const dictionaryLength = dictionary.length;

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

    useEffect(() => {
        const words = randomNumberGenerator( numQuestions, dictionaryLength );
        for(let i = 0; i < numQuestions; i++) {
            let current = words[i];
            let currentWord = scrambleDictionary[current].word;
            let currentTranslation = scrambleDictionary[current].translation;
            let set = {};

            let currentArray = currentWord.split( '' );
            let scrambledArray = randomNumberGenerator( currentWord.length, currentWord.length );
            let scrambledWord = scrambledArray.map( element => currentArray[element] );
            set.question = scrambledWord;
            set.translation = currentTranslation;
            set.answer = currentWord;

            setQuestionSet( current => [...current, set] );
        }
    }, []);

    createCategorySelect();

    return (
        <>
            <section className='pageContainer'>
                { showModal === true ? <Modal /> : null }
                <h1>Vocabulary Scramble</h1>
                <form id="scramble" className="col-xs-12 col-sm-8 col-lg-4">
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
                                <h2>[ { questionSet[question] && questionSet[question].translation } ]</h2>
                            </dt>
                            <dd>
                                { questionSet[question] && questionSet[question].question.map( letter =>
                                    <div>{ letter }</div>
                                ) }
                            </dd>
                        </dl>
                    </fieldset>
                    <div className='buttons col-lg-12'>
                        { questionSet[question] && <input type="button" id="submitBtn" onClick={ incrementQuestion } value="submit" /> }
                    </div>
                </form>
            </section>
            <Footer />
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
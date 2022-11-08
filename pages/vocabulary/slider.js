import { useState, useEffect } from 'react';
import { PrismaClient } from '@prisma/client';
import Modal from '/src/components/modal.tsx';
import randomNumberGenerator from '../../helper/useRandomNumberGenerator.tsx';

const prisma = new PrismaClient();

function Slider({ dictionary, categories }) {
    const [numQuestions, setNumQuestions] = useState();
    const [category, setCategory] = useState();
    const [brickSets, setBrickSets] = useState( [] );
    const [slideSets, setSlideSets] = useState( [] );
    const [question, setQuestion] = useState( 0 );
    const [showModal, setShowModal] = useState( false );

    const numOptions = 5;
    const categorySelections = [];
    let sliderDictionary = [];

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
        sliderDictionary = [...dictionary.filter( word => word.category === category )];
        const dictionaryLength = sliderDictionary.length;
        for( let i = 0; i < numQuestions; i++ ) {
            let randomWords = randomNumberGenerator( numOptions, dictionaryLength );
            let bricks = {};
            let stationaryBricks = [];
            let slideBricks = [];
            for(const word of randomWords) {
                stationaryBricks.push( sliderDictionary[word].translation);
            }
            const randomSlideOrder = randomNumberGenerator( numOptions, numOptions );
            for(const randomSlide of randomSlideOrder) {
                let current = randomWords[randomSlide];
                slideBricks.push( sliderDictionary[current].word);
            }
            setBrickSets( prev => [...prev, stationaryBricks]);
            setSlideSets(prev => [...prev, slideBricks]);
        }
    }, [category]);

    createCategorySelect();

    return (
        <>
            <section className='pageContainer'>
                { showModal === true ? <Modal /> : null }
                <h1>Vocabulary Slider</h1>
                <form id="slider" className="col-xs-12 col-sm-8 col-lg-4">
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
                        { ( slideSets.length > 0 && brickSets.length > 0 ) && 
                            <div id="questions">
                                <div className='bricks'>
                                    {
                                        brickSets && brickSets[question].map( ( brickSet, index ) => 
                                            <div key={ index }>{ brickSet }</div>
                                        )
                                    }
                                </div>
                                <div className='slides'>
                                    {
                                        slideSets && slideSets[question].map( ( slideSet, index ) => 
                                            <div key={ index }>{ slideSet }</div>
                                        )
                                    }
                                </div>
                            </div>
                        }
                    </fieldset>
                    <div className='buttons col-lg-12'>
                        { ( slideSets[question] && brickSets[question] ) && <input type="button" id="submitBtn" onClick={ incrementQuestion } value="submit" /> }
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

export default Slider;
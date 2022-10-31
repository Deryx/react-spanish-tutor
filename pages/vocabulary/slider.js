import { useState, useEffect } from 'react';
import { PrismaClient } from '@prisma/client';
import Modal from '/src/components/modal.tsx';
import randomNumberGenerator from '../../helper/useRandomNumberGenerator.tsx';

const prisma = new PrismaClient();

function Slider({ dictionary, categories }) {
    const [brickSets, setBrickSets] = useState( [] );
    const [slideSets, setSlideSets] = useState( [] );
    const [question, setQuestion] = useState( 0 );
    const [showModal, setShowModal] = useState( false );

    const numQuestions = 5;
    const numOptions = 5;
    const categorySelections = [];
    const sliderDictionary = dictionary;
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
        const slideSets = [];
        for(let i = 0; i < numOptions; i++) {
            slideSets.push( randomNumberGenerator( numQuestions, dictionaryLength ) );
        }
        for( const slideSet of slideSets ) {
            let scrambledSlides = randomNumberGenerator( slideSet.length, slideSet.length );
            let currentBrickSet = [];
            let currentSlideSet = [];
            for( const slide of slideSet) {
                currentBrickSet = [...currentBrickSet, sliderDictionary[slide].word];
            }
            setBrickSets( prev => [...prev, currentBrickSet]);
            for( const scrambledSlide of scrambledSlides ) {
                let currentSlide = slideSet[scrambledSlide];
                currentSlideSet = [...currentSlideSet, sliderDictionary[currentSlide].translation];
            }
            setSlideSets( prev => [...prev, currentSlideSet]);
        }
    }, []);

    createCategorySelect();

    const currentBrickSet = brickSets && brickSets[question];
    const currentSlideSet = slideSets && slideSets[question];

    return (
        <>
            <section className='pageContainer'>
                { showModal === true ? <Modal /> : null }
                <h1>Vocabulary Slider</h1>
                <form id="slider" className="col-xs-12 col-sm-8 col-lg-4">
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
                        <div id="questions">
                            <div className='bricks'>
                                {
                                    currentBrickSet && currentBrickSet.map( ( brickSet, index ) => 
                                        <div key={ index }>{ brickSet }</div>
                                    )
                                }
                            </div>
                            <div className='slides'>
                                {
                                    currentSlideSet && currentSlideSet.map( ( slideSet, index ) => 
                                        <div key={ index }>{ slideSet }</div>
                                    )
                                }
                            </div>
                        </div>
                    </fieldset>
                    <div className='buttons col-lg-12'>
                        { currentSlideSet && <input type="button" id="submitBtn" onClick={ incrementQuestion } value="submit" /> }
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

export default Slider;
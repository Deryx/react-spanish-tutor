import { useState, useEffect } from 'react';
import { PrismaClient } from '@prisma/client';
import Siteheader from '/src/components/siteHeader.tsx';
import Footer from '/src/components/footer.tsx';
import randomNumberGenerator from '../../helper/useRandomNumberGenerator.tsx';

const prisma = new PrismaClient();

function Slider({ dictionary, categories }) {
    const [brickSets, setBrickSets] = useState( [] );
    const [slideSets, setSlideSets] = useState( [] );
    const [question, setQuestion] = useState( 0 );

    const numQuestions = 5;
    const numOptions = 5;
    const categorySelections = [];
    const sliderDictionary = dictionary;
    const dictionaryLength = dictionary.length;

    const incrementQuestion = () => {
        if( question <= question ) {
            setQuestion( question + 1 );
        }
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
                currentBrickSet = [...currentBrickSet, <div>{ sliderDictionary[slide].word }</div>];
            }
            setBrickSets( prev => [...prev, currentBrickSet]);
            for( const scrambledSlide of scrambledSlides ) {
                let currentSlide = slideSet[scrambledSlide];
                currentSlideSet = [...currentSlideSet, <div>{ sliderDictionary[currentSlide].translation }</div>];
            }
            setSlideSets( prev => [...prev, currentSlideSet]);
        }
    }, []);

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

    return (
        <>
            <section className='pageContainer'>
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
                                { brickSets[question] }
                            </div>
                            <div className='slides'>
                                { slideSets[question] }
                            </div>
                        </div>
                    </fieldset>
                    <div className='buttons col-lg-12'>
                        <input type="button" id="submitBtn" onClick={ incrementQuestion } value="next" />
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
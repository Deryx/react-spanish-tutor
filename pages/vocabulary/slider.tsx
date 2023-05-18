import { useState, useEffect, useRef, FC } from 'react';
import { PrismaClient } from '@prisma/client';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Layout from '../../src/components/layout';
import Modal from '../../src/components/modal';
import SliderReport from '../../src/components/vocabulary/slider-report';
import randomNumberGenerator from '../../helper/useRandomNumberGenerator';

const prisma = new PrismaClient();

interface SliderProps {
    dictionary: any[];
    categories: any[];
}

const Slider: FC<SliderProps> = ({ dictionary, categories }) => {
    const numQuestionsRef = useRef(null);
    const categoriesRef = useRef(null);
    const slidesRef = useRef(null);
    const [numQuestions, setNumQuestions] = useState(0);
    const [category, setCategory] = useState(0);
    let [slideSets, setSlideSets] = useState( [] );
    const [question, setQuestion] = useState(0);
    const [showModal, setShowModal] = useState( false );
    const reportTitle = "Vocabulary Slider Report";

    const numOptions = 5;
    const categorySelections = [];
    let sliderDictionary = [];

    const incrementQuestion = () => {
        if( question < numQuestions ) {
            setQuestion( question + 1 );
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
        setCategory( parseInt(e.target.value) );
        categoriesRef.current.style.display = "none";
    }

    const handleOnDragEnd = (result) => {
        if(!result.destination) return;
        let items = Array.from(slideSets[question].slideBricks);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        slideSets[question].slideBricks = items;
    }

    const handleSubmitClick = () => {
        const slides = document.querySelectorAll('.slides');
        const answers = [];
        for(const slide of slides) {
            answers.push( slide.innerText );
        }
        slideSets[question].slideBricks = answers;
        incrementQuestion();
    }
    
    useEffect(() => {
        sliderDictionary = [...dictionary.filter( word => word.category === category )];
        const dictionaryLength = sliderDictionary.length;
        for( let i = 0; i < numQuestions; i++ ) {
            let randomWords = randomNumberGenerator( numOptions, dictionaryLength );
            let bricks = {};
            const stationaryBricks = [];
            const correctAnswers = [];
            const slideBricks = [];
            const set = {
                stationaryBricks: [],
                correctAnswers: [],
                slideBricks: []
            };
            for(const word of randomWords) {
                stationaryBricks.push( sliderDictionary[word].translation);
                correctAnswers.push(sliderDictionary[word].word);
            }
            set.stationaryBricks = stationaryBricks;
            set.correctAnswers = correctAnswers;
            const randomSlideOrder = randomNumberGenerator( numOptions, numOptions );
            for(const randomSlide of randomSlideOrder) {
                let current = randomWords[randomSlide];
                slideBricks.push( sliderDictionary[current].word);
            }
            set.slideBricks = slideBricks;
            setSlideSets( slideSets = [...slideSets, set] );
        }
    }, [category]);

    createCategorySelect();

    return (
        <Layout>
            <section className='pageContainer'>
                { showModal === true ? 
                    <>
                        <Modal>
                            <SliderReport reportTitle={ reportTitle } questionSet={ slideSets } />
                        </Modal>
                    </>
                    : null 
                }
                <h1>Vocabulary Slider</h1>
                <form id="slider" className="col-xs-12 col-sm-8 col-lg-4">
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
                        { slideSets[question] ? 
                            <section id="questions">
                                <h4>Category:</h4>
                                <h5>[ {categories[category - 1].category} ]</h5>
                                <div className='sliders'>
                                    <div className='bricks'>
                                        {
                                            slideSets[question].stationaryBricks.map( ( stationaryBricks, index ) => 
                                                <div key={ index }>{ stationaryBricks }</div>
                                            )
                                        }
                                    </div>
                                    <DragDropContext onDragEnd={handleOnDragEnd}>
                                        <Droppable droppableId='words'>
                                            {(provided) => (
                                                <div className='slides' {...provided.droppableProps} ref={provided.innerRef}>
                                                    {slideSets[question].slideBricks.map( ( slideBricks, index ) => 
                                                        <Draggable key={`slide${index}`} draggableId={`slide${index}`} index={index}>
                                                                {(provided) => ( 
                                                                    <div id={`slide${index}`} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                                        { slideBricks }
                                                                    </div>
                                                                )}
                                                        </Draggable>
                                                    )}
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>
                                    </DragDropContext>
                                </div>
                            </section>
                        : null }
                    </fieldset>
                    <div className='buttons col-lg-12'>
                        { slideSets[question] ? <input type="button" id="submitBtn" onClick={ handleSubmitClick } value="submit" /> : null }
                    </div>
                </form>
            </section>
        </Layout>
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
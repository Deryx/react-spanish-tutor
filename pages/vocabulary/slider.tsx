import { useState, useEffect, useRef, FC } from 'react';
import { PrismaClient } from '@prisma/client';
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
    const [category, setCategory] = useState();
    const [slideSets, setSlideSets] = useState( [] );
    const [question, setQuestion] = useState(0);
    const [showModal, setShowModal] = useState( false );
    const reportTitle = "Vocabulary Slider Report";

    const numOptions = 5;
    const categorySelections = [];
    let sliderDictionary = [];
    let draggingElement;
    let placeholder;
    let isDraggingStarted = false;
    let x = 0;
    let y = 0;

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
        setNumQuestions( e.target.value );
        numQuestionsRef.current.style.display = "none";
    }

    const handleCategoryChange = (e) => {
        setCategory( e.target.value );
        categoriesRef.current.style.display = "none";
    }

    const mouseDownHandler = (e) => {
        draggingElement = e.target;

        const rect = draggingElement.getBoundingClientRect();
        x = e.pageX - rect.left;
        y = e.pageY - rect.top;

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    }

    const mouseMoveHandler = (e) => {
        const draggingRect = draggingElement.getBoundingClientRect();

        if (!isDraggingStarted) {
            // Update the flag
            isDraggingStarted = true;

            // Let the placeholder take the height of dragging element
            // So the next element won't move up
            placeholder = document.createElement('div');
            placeholder.classList.add('placeholder');
            draggingElement.parentNode.insertBefore(
                placeholder,
                draggingElement.nextSibling
            );

            // Set the placeholder's height
            placeholder.style.height = `${draggingRect.height}px`;
        } 
        draggingElement.style.position = 'absolute';
        draggingElement.style.top = `${e.pageY - y}px`;
        draggingElement.style.left =`${e.pageX - x}px`;

        const prevElement = draggingElement.previousElementSibling;
        const nextElement = placeholder.nextElementSibling;

        if (prevElement && isAbove(draggingElement, prevElement)) {
            // The current order    -> The new order
            // prevElement              -> placeholder
            // draggingEle          -> draggingEle
            // placeholder          -> prevEle
            swap(placeholder, draggingElement);
            swap(placeholder, prevElement);
            return;
        }

        if (nextElement && isAbove(nextElement, draggingElement)) {
            // The current order    -> The new order
            // draggingElement      -> nextElement
            // placeholder          -> placeholder
            // nextElement          -> draggingEle
            swap(nextElement, placeholder);
            swap(nextElement, draggingElement);
        }
    }

    const mouseUpHandler = () => {
        // Remove the placeholder
        placeholder && placeholder.parentNode.removeChild(placeholder);
        // Reset the flag
        isDraggingStarted = false;

        // Remove the position styles
        draggingElement.style.removeProperty('top');
        draggingElement.style.removeProperty('left');
        draggingElement.style.removeProperty('position');
    
        x = null;
        y = null;
        draggingElement = null;
    
        // Remove the handlers of `mousemove` and `mouseup`
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };

    const isAbove = (nodeA, nodeB) => {
        // Get the bounding rectangle of nodes
        const rectA = nodeA.getBoundingClientRect();
        const rectB = nodeB.getBoundingClientRect();
    
        return rectA.top + rectA.height / 2 < rectB.top + rectB.height / 2;
    };

    const swap = (nodeA, nodeB) => {
        const parentA = nodeA.parentNode;
        const siblingA = nodeA.nextSibling === nodeB ? nodeA : nodeA.nextSibling;
    
        // Move `nodeA` to before the `nodeB`
        nodeB.parentNode.insertBefore(nodeA, nodeB);
    
        // Move `nodeB` to before the sibling of `nodeA`
        parentA.insertBefore(nodeB, siblingA);
    };    

    const handleSubmitClick = () => {
        const slides = slidesRef.current.querySelectorAll('div');
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
            setSlideSets( prev => [...prev, set] );
        }
    }, [category]);

    createCategorySelect();

    return (
        <>
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
                            <div id="questions">
                                <div className='bricks'>
                                    {
                                        slideSets[question].stationaryBricks.map( ( stationaryBricks, index ) => 
                                            <div key={ index }>{ stationaryBricks }</div>
                                        )
                                    }
                                </div>
                                <div ref={ slidesRef } className='slides'>
                                    {
                                        slideSets[question].slideBricks.map( ( slideBricks, index ) => 
                                            <div 
                                                id={`slide${index}`} 
                                                key={ index } 
                                                onMouseDown={mouseDownHandler} 
                                                className='draggable'>
                                                    { slideBricks }
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        : null }
                    </fieldset>
                    <div className='buttons col-lg-12'>
                        { slideSets[question] ? <input type="button" id="submitBtn" onClick={ handleSubmitClick } value="submit" /> : null }
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
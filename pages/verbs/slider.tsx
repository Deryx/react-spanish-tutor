import { useState, useEffect, useRef, FC } from 'react';
import { PrismaClient } from '@prisma/client';
import Modal from '../../src/components/modal';
import randomNumberGenerator from '../../helper/useRandomNumberGenerator';

const prisma = new PrismaClient();

interface SliderProps {
    verbs: any[];
    tenses: any[];
    conjugations: any[];
}

const Slider: FC<SliderProps> = ({ verbs, tenses, conjugations }) => {
    const numQuestionsRef = useRef(null);
    const tensesRef = useRef(null);
    const [numQuestions, setNumQuestions] = useState(null);
    const [question, setQuestion] = useState(0);
    const [questionSet, setQuestionSet] = useState([]);
    const [tense, setTense] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const tenseSelections = [];
    const numOptions = 5;
    const bricks = ['yo', 'tu', 'él/ella/ud', 'nosotros', 'vosotros', 'ellos/ellas/uds'];
    let draggingElement;
    let placeholder;
    let isDraggingStarted = false;
    let x = 0;
    let y = 0;

    const incrementQuestion = () => {
        if( numQuestions && (question < numQuestions )) {
            setQuestion( question + 1 );
        } 
        
        question === numQuestions && setShowModal( showModal => showModal = !showModal );
    }

    const handleNumQuestionsChange = () => {
        setNumQuestions(event.target.value);
        numQuestionsRef.current.style.display = "none";
    }

    const createTenseSelect = () => {
        for(const tense of tenses) {
            tenseSelections.push( 
                {
                    id: tense.id,
                    tense: tense.tense
                }
             );
        } 
        tenseSelections.unshift({ id: '', tense: 'SELECT A TENSE' });
    }
    const handleTenseChange = () => {
        setTense( parseInt( event.target.value ));
        tensesRef.current.style.display = "none";
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
            // prevElement          -> placeholder
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
    
    useEffect( () => {
        const randomIndices = randomNumberGenerator( numQuestions, verbs.length );

        let verbIds = [];
        let slideSet = [];
        let scrambledSet = [];
        for( const index of randomIndices ) {
            verbIds = randomIndices && [...verbIds, verbs.filter( verb => verb.id === index )[0].id];
        }
        for( let i = 0; i < numQuestions; i++) {
            let set = {
                infinitive: '',
                translation: '',
                answers: [],
                slideSet: []
            };
            let currentVerb = verbs[verbIds[i]].id;
            set.infinitive = verbs.find( verb => verb.id === currentVerb).infinitive;
            set.translation = verbs.find( verb => verb.id === currentVerb).translation;
            let currentConjugations = conjugations
                .filter( ( conjugation ) => conjugation.tense === tense && conjugation.verb === currentVerb )
                .map( ({ yo, tu, el, nosotros, vosotros, ellos }) => ({ yo, tu, el, nosotros, vosotros, ellos}) );
            let currentSlides = currentConjugations && Object.values(currentConjugations[0]);
            set.answers = currentSlides;
            const randomSlideOrder = randomNumberGenerator( currentSlides.length, currentSlides.length );
            let scrambledSlides = randomSlideOrder.map( slide => currentSlides[slide] );
            set.slideSet = scrambledSlides;
            setQuestionSet( prev => [...prev, set] );
        }
      }, [tense]);

    createTenseSelect();

    return (
        <>
            <section className='pageContainer'>
                { showModal === true ? <Modal /> : null }
                <h1>Verb Slider</h1>
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
                            <dl ref={ tensesRef } id='tenseSelect'>
                                <dt><label htmlFor="tense">tense: </label></dt>
                                <dd>
                                    <select id="tense" name="tense" onChange={ handleTenseChange }>
                                        { tenseSelections.map( ( tenseSelection ) => 
                                            <option key={ tenseSelection.tense } value={ tenseSelection.id }>{ tenseSelection.tense }</option>
                                        )}
                                    </select>
                                </dd>
                            </dl> 
                        : null }
                        { questionSet[question] ? 
                            <section id="headings">
                                <h2>{ questionSet && questionSet[question].infinitive  }</h2>
                                <h3>[ { questionSet && questionSet[question].translation } ]</h3>
                                <h5>{ tenses[tense - 1].tense } tense</h5>
                            </section>
                        : null }
                        { questionSet[question] ? 
                            <div id="questions">
                                <div className='bricks'>
                                    { 
                                        bricks.map( ( brick, index ) => 
                                            <div key={ index }>{ brick }</div>    
                                        )
                                    }
                                </div>
                                <div className='slides'>
                                    {
                                        questionSet[question].slideSet.map( ( slide, index ) => 
                                            <div 
                                                id={`slide${index}`} 
                                                key={ index } 
                                                onMouseDown={mouseDownHandler} 
                                                className="draggable">
                                                    { slide }
                                                </div>
                                        )
                                    }
                                </div>
                            </div>
                        : null }
                    </fieldset>
                    <div className='buttons col-lg-12'>
                        { questionSet[question] ? <input type="button" id="submitBtn" onClick={ incrementQuestion } value="submit" /> : null }
                    </div>
                </form>
            </section>
        </>
    )
}

export async function getServerSideProps() {
    const allVerbs = await prisma.verbs.findMany();
    const allTenses = await prisma.tenses.findMany();
    const allConjugations = await prisma.conjugations.findMany();
    return {
        props: {
            verbs: allVerbs,
            tenses: allTenses,
            conjugations: allConjugations
        }
    }
}

export default Slider;
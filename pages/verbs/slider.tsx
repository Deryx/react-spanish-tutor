import { useState, useEffect, useRef, FC } from 'react';
import { PrismaClient } from '@prisma/client';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Layout from '../../src/components/layout';
import Modal from '../../src/components/modal';
import SliderReport from '../../src/components/verbs/slider-report';
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
    const slidesRef = useRef(null);
    const [numQuestions, setNumQuestions] = useState(null);
    const [question, setQuestion] = useState(0);
    const [questionSet, setQuestionSet] = useState([]);
    const [tense, setTense] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const tenseSelections = [];
    const numOptions = 5;
    const reportTitle = "Verb Slider Report";
    const bricks = ['yo', 'tu', 'él/ella/ud', 'nosotros', 'vosotros', 'ellos/ellas/uds'];

    const incrementQuestion = () => {
        if( numQuestions && (question < numQuestions )) {
            setQuestion( question + 1 );
        } 
        
        question === (numQuestions - 1) && setShowModal( showModal => showModal = !showModal );
    }

    const handleNumQuestionsChange = (e) => {
        setNumQuestions( parseInt(e.target.value) );
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
    const handleTenseChange = (e) => {
        setTense( parseInt(e.target.value) );
        tensesRef.current.style.display = "none";
    }

    const handleOnDragEnd = (result) => {
        if(!result.destination) return;
        console.log(questionSet[question]);
        let items = Array.from(questionSet[question].slideSet);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        questionSet[question].slideSet = items;
    }

    const handleSubmitClick = () => {
        const slides = slidesRef.current.querySelectorAll('div');
        const answers = [];
        for(const slide of slides) {
            answers.push( slide.innerText );
        }
        questionSet[question].slideSet = answers;
        incrementQuestion();
    }
    
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
        <Layout>
            <section className='pageContainer'>
                { showModal ? 
                    <Modal>
                        <SliderReport reportTitle={ reportTitle } questionSet={ questionSet } />
                    </Modal> : 
                    null 
                }
                <h1>Verb Slider</h1>
                <form id="slider" className="col-xs-10 col-sm-8 col-lg-4">
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
                                <div className='sliders'>
                                    <div className='bricks'>
                                        { 
                                            bricks.map( ( brick, index ) => 
                                                <div key={ index }>{ brick }</div>    
                                            )
                                        }
                                    </div>
                                    <DragDropContext onDragEnd={handleOnDragEnd}>
                                        <Droppable droppableId='conjugates'>
                                            {(provided) => (
                                                <div className='slides' {...provided.droppableProps} ref={provided.innerRef}>
                                                    {questionSet[question].slideSet.map( (slide, index) =>
                                                        <Draggable key={`slide${index}`} draggableId={`slide${index}`} index={index}>
                                                            {(provided) => ( 
                                                                <div id={`slide${index}`} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                                    { slide }
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
                            </div>
                        : null }
                    </fieldset>
                    <div className='buttons col-lg-12'>
                        { questionSet[question] ? <input type="button" id="submitBtn" onClick={ handleSubmitClick } value="submit" /> : null }
                    </div>
                </form>
            </section>
        </Layout>
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
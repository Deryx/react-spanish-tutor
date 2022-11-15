import { useState, useEffect, useRef } from 'react';
import { PrismaClient } from '@prisma/client';
import Modal from '/src/components/modal.tsx';
import randomNumberGenerator from '../../helper/useRandomNumberGenerator.tsx';

const prisma = new PrismaClient();

function Slider( { verbs, tenses, conjugations } ) {
    const numQuestionsRef = useRef();
    const tensesRef = useRef();
    const [numQuestions, setNumQuestions] = useState();
    const [question, setQuestion] = useState( 0 );
    const [infinitives, setInfinitives] = useState( [] );
    const [tense, setTense] = useState();
    const [slideSets, setSlideSets] = useState( [] );
    const [showModal, setShowModal] = useState( false );
    const tenseSelections = [];
    const numOptions = 5;
    const bricks = ['yo', 'tu', 'él/ella/ud', 'nosotros', 'vosotros', 'ellos/ellas/uds'];

    const incrementQuestion = () => {
        if( question < numQuestions ) {
            setQuestion( ++question );
        } 
        
        question === numQuestions && setShowModal( showModal => showModal = !showModal );
    }

    const handleNumQuestionsChange = () => {
        setNumQuestions( parseInt( event.target.value ));
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
    }

    const handleTenseChange = () => {
        setTense( parseInt( event.target.value ));
        tensesRef.current.style.display = "none";
    }

    useEffect( () => {
        const randomIndices = randomNumberGenerator( numQuestions, verbs.length );
    
        let verbIds = [];
        let slideSet = [];
        let scrambledSet = [];
        for( const index of randomIndices ) {
            verbIds = [...verbIds, verbs.filter( verb => verb.id === index )[0].id];
        }
        for( const id of verbIds ) {
            setInfinitives( prev => [...prev, verbs.filter( verb => verb.id === id)[0].infinitive]);
        }
        let sets = [];
        for( let i = 0; i < numQuestions; i++) {
            let currentVerb = verbIds[i];
            let currentConjugations = conjugations
                .filter( ( conjugation ) => conjugation.tense === tense && conjugation.verb === currentVerb )
                .map( ({ yo, tu, el, nosotros, vosotros, ellos }) => ({ yo, tu, el, nosotros, vosotros, ellos}) );
            let currentSlides = currentConjugations && Object.values(currentConjugations[0]);
            const randomSlideOrder = randomNumberGenerator( currentSlides.length, currentSlides.length );
            let scrambledSlides = randomSlideOrder.map( slide => currentSlides[slide] );
            setSlideSets( prev => [...prev, scrambledSlides] );
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
                        { numQuestions && 
                            <dl ref={ tensesRef } id='tenseSelect'>
                                <dt><label htmlFor="tense">tense: </label></dt>
                                <dd>
                                    <select id="tense" name="tense" onChange={ handleTenseChange }>
                                        <option key=""></option>
                                        { tenseSelections.map( ( tenseSelection ) => 
                                            <option key={ tenseSelection.tense } value={ tenseSelection.id }>{ tenseSelection.tense }</option>
                                        )}
                                    </select>
                                </dd>
                            </dl> 
                        }
                        { slideSets[question] && 
                            <section id="headings">
                                <h2>[ { infinitives && infinitives[question]  } ]</h2>
                                <h4>{ tenses[tense - 1].tense } tense</h4>
                            </section>
                        }
                        { slideSets[question] && 
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
                                        slideSets[question] && slideSets[question].map( ( slideSet, index ) => 
                                            <div key={ index }>{ slideSet }</div>
                                        )
                                    }
                                </div>
                            </div>
                        }
                    </fieldset>
                    <div className='buttons col-lg-12'>
                        { slideSets[question] && <input type="button" id="submitBtn" onClick={ incrementQuestion } value="submit" /> }
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
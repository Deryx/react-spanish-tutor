import { useState, useEffect, useRef } from 'react';
import { PrismaClient } from '@prisma/client';
import Modal from '/src/components/modal.tsx';
import Textinput from '/src/components/textInput.tsx';
import Accents from '/src/components/accents.tsx';
import randomNumberGenerator from '../../helper/useRandomNumberGenerator.tsx';

const prisma = new PrismaClient();

function Conjugator( { verbs, tenses, conjugations } ) {
    const numQuestionsRef = useRef();
    const tensesRef = useRef();
    const yoRef = useRef();
    const tuRef = useRef();
    const elRef = useRef();
    const nosotrosRef = useRef();
    const vosotrosRef = useRef();
    const ellosRef = useRef();
    const [numQuestions, setNumQuestions] = useState();
    const [questionSet, setQuestionSet] = useState( [] );
    const [userAnswers, setUserAnswers] = useState( [] );
    const [question, setQuestion] = useState( 0 );
    const [infinitives, setInfinitives] = useState( [] );
    const [tense, setTense] = useState();
    const [translations, setTranslations] = useState( [] );
    const tenseSelections = [];
    const [showModal, setShowModal] = useState( false );

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

    const clearAnswers = () => {
        yoRef.current.value = null;
        tuRef.current.value = null;
        elRef.current.value = null;
        nosotrosRef.current.value = null;
        vosotrosRef.current.value = null;
        ellosRef.current.value = null;
    }

    const handleSubmitClick = () => {
        const set = {};
        set.yo = yoRef.current.value;
        set.tu = tuRef.current.value;
        set.el = elRef.current.value;
        set.nosotros = nosotrosRef.current.value;
        set.vosotros = vosotrosRef.current.value;
        set.ellos = ellosRef.current.value;
        setUserAnswers( prev => [...prev, set]);
        incrementQuestion();
        clearAnswers();
    }

    useEffect( () => {
        const randomVerbs = randomNumberGenerator( numQuestions, verbs.length );
        for(const verb of randomVerbs) {
            const set = {};
            let currentVerb = verbs[verb].id;
            let currentConjugations = conjugations
                .filter( ( conjugation ) => conjugation.tense === tense && conjugation.verb === currentVerb )
                .map( ({ yo, tu, el, nosotros, vosotros, ellos }) => ({ yo, tu, el, nosotros, vosotros, ellos}) );
            set.infinitive = verbs.find( verb => verb.id === currentVerb).infinitive;
            set.translation = verbs.find( verb => verb.id === currentVerb).translation;
            set.conjugations = currentConjugations[0];
            setQuestionSet( current => [...current, set] );
        }
    }, [tense] );

    createTenseSelect();
    
    return (
        <>
            <section className='pageContainer'>
                { showModal === true ? <Modal /> : null }
                <h1>Verb Conjugator</h1>
                <form id="conjugator" className="col-xs-12 col-sm-8 col-lg-4">
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
                                    <option key=""></option>
                                    { tenseSelections.map( ( tenseSelection ) => 
                                        <option key={ tenseSelection.tense } value={ tenseSelection.id }>{ tenseSelection.tense }</option>
                                    )}
                                </select>
                            </dd>
                        </dl> 
                    : null }
                    { questionSet[question] ? 
                        <section id="headings">
                            <h2>[ { questionSet[question].infinitive  } ]</h2>
                            <h4>{ questionSet[question].translation  }</h4>
                            <h5>{ tenses[tense - 1].tense } tense</h5>
                        </section>
                    : null }
                    { questionSet[question] ? 
                        <fieldset className="col-lg-12">
                            <Textinput ref={ yoRef } id="yo" name="yo" className="col-lg-12" />
                            <Textinput ref={ tuRef } id="tu" name="tu" className="col-lg-12" />
                            <Textinput ref={ elRef } id="el" name="el/Ella/Usted" className="col-lg-12" />
                            <Textinput ref={ nosotrosRef } id="nosotros" name="nosotros" className="col-lg-12" />
                            <Textinput ref={ vosotrosRef } id="vosotros" name="vosotros" className="col-lg-12" />
                            <Textinput ref={ ellosRef } id="ellos" name="ellos/Ellas/Ustedes" className="col-lg-12" />
                        </fieldset>
                    : null }
                    <div className='buttons col-lg-12'>
                        { questionSet[question] ? <input type="button" id="submitBtn" onClick={ handleSubmitClick } value="submit" /> : null }
                    </div>
                </form>
                { questionSet[question] ? <Accents /> : null }
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

export default Conjugator;
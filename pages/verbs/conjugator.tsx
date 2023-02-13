import { useState, useEffect, useRef, FC } from 'react';
import { PrismaClient } from '@prisma/client';
import Modal from '../../src/components/modal';
import ConjugatorReport from '../../src/components/verbs/conjugator-report';
import Textinput from '../../src/components/textInput';
import Accents from '../../src/components/accents';
import randomNumberGenerator from '../../helper/useRandomNumberGenerator';

const prisma = new PrismaClient();

interface ConjugatorProps {
    verbs: any[];
    tenses: any[];
    conjugations: any[];
}

const Conjugator: FC<ConjugatorProps> = ( { verbs, tenses, conjugations } ) => {
    const numQuestionsRef = useRef(null);
    const tensesRef = useRef(null);
    const yoRef = useRef(null);
    const tuRef = useRef(null);
    const elRef = useRef(null);
    const nosotrosRef = useRef(null);
    const vosotrosRef = useRef(null);
    const ellosRef = useRef(null);
    const [numQuestions, setNumQuestions] = useState(0);
    const [questionSet, setQuestionSet] = useState( [] );
    const [userAnswers, setUserAnswers] = useState( [] );
    const [question, setQuestion] = useState( 0 );
    const [infinitives, setInfinitives] = useState( [] );
    const [tense, setTense] = useState(0);
    const [translations, setTranslations] = useState( [] );
    const tenseSelections = [];
    const [showModal, setShowModal] = useState( false );
    const reportTitle = "Verb Conjugator Report";
    let currentTextbox;

    const incrementQuestion = () => {
        if(question < numQuestions) {
            setQuestion(question + 1);
        } 
        
        question === (numQuestions - 1) && setShowModal( showModal => showModal = !showModal );
    }

    const handleNumQuestionsChange = (e) => {
        setNumQuestions( parseInt( e.target.value ));
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
        setTense( e.target.value );
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
        const set = {
            yo: '',
            tu: '',
            el: '',
            nosotros: '',
            vosotros: '',
            ellos: ''
        };
        set.yo = yoRef.current.value;
        set.tu = tuRef.current.value;
        set.el = elRef.current.value;
        set.nosotros = nosotrosRef.current.value;
        set.vosotros = vosotrosRef.current.value;
        set.ellos = ellosRef.current.value;
        questionSet[question].userAnswers = set;
        incrementQuestion();
        clearAnswers();
    }

    const handleAccentClick = (e) => {
        e.preventDefault();
        const currentPosition = currentTextbox.selectionStart;
        let answer = currentTextbox.value;
        currentTextbox.value = answer.slice(0, currentPosition) + e.target.value + answer.slice(currentPosition);
        currentTextbox.focus();
        currentTextbox.selectionStart = currentPosition + 1;
        currentTextbox.selectionEnd = currentPosition + 1;
    }

    const onFocus = (e) => {
        if(e.target === yoRef.current ) {
            currentTextbox = yoRef.current;
        }
        if(e.target === tuRef.current ) {
            currentTextbox = tuRef.current;
        }
        if(e.target === elRef.current ) {
            currentTextbox = elRef.current;
        }
        if(e.target === nosotrosRef.current ) {
            currentTextbox = nosotrosRef.current;
        }
        if(e.target === vosotrosRef.current ) {
            currentTextbox = vosotrosRef.current;
        }
        if(e.target === ellosRef.current ) {
            currentTextbox = ellosRef.current;
        }
    }

    useEffect( () => {
        const randomVerbs = randomNumberGenerator( numQuestions, verbs.length );
        for(const verb of randomVerbs) {
            const set = {
                infinitive: '',
                translation: '',
                conjugations: null
            };
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
                { showModal === true ? 
                    <Modal>
                        <ConjugatorReport reportTitle={ reportTitle } questionSet={ questionSet } />
                    </Modal> : 
                    null 
                }
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
                            <Textinput ref={ yoRef } id="yo" name="yo" onFocusEvent={ onFocus } className="col-lg-12" />
                            <Textinput ref={ tuRef } id="tu" name="tu" onFocusEvent={ onFocus } className="col-lg-12" />
                            <Textinput ref={ elRef } id="el" name="el/Ella/Usted" onFocusEvent={ onFocus } className="col-lg-12" />
                            <Textinput ref={ nosotrosRef } id="nosotros" name="nosotros" onFocusEvent={ onFocus } className="col-lg-12" />
                            <Textinput ref={ vosotrosRef } id="vosotros" name="vosotros" onFocusEvent={ onFocus } className="col-lg-12" />
                            <Textinput ref={ ellosRef } id="ellos" name="ellos/Ellas/Ustedes" onFocusEvent={ onFocus } className="col-lg-12" />
                        </fieldset>
                    : null }
                    <div className='buttons col-lg-12'>
                        { questionSet[question] ? <input type="button" id="submitBtn" onClick={ handleSubmitClick } value="submit" /> : null }
                    </div>
                </form>
                { questionSet[question] && <Accents handleAccentClick={ handleAccentClick } /> }
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
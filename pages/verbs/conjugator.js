import { useState, useEffect } from 'react';
import { PrismaClient } from '@prisma/client';
import Modal from '/src/components/modal.tsx';
import Textinput from '/src/components/textInput.tsx';
import Accents from '/src/components/accents.tsx';
import randomNumberGenerator from '../../helper/useRandomNumberGenerator.tsx';

const prisma = new PrismaClient();

function Conjugator( { verbs, tenses, conjugations } ) {
    const [numQuestions, setNumQuestions] = useState();
    const [questionSet, setQuestionSet] = useState( [] );
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
    }

    useEffect( () => {
        const randomVerbs = randomNumberGenerator( numQuestions, verbs.length );
        for(const verb of randomVerbs) {
            const set = {};
            let currentVerb = verbs[verb].id;
            let currentConjugations = conjugations
                .filter( ( conjugation ) => conjugation.tense === tense && conjugation.verb === currentVerb )
                .map( ({ yo, tu, el, nosotros, vosotros, ellos }) => ({ yo, tu, el, nosotros, vosotros, ellos}) );
            set.infinitive = verbs[currentVerb].infinitive;
            set.translation = verbs[currentVerb].translation;
            set.conjugations = currentConjugations;
            setQuestionSet( current => [...current, set] );
        }
    }, [tense] );

    console.log(questionSet);
    createTenseSelect();
    
    return (
        <>
            <section className='pageContainer'>
                { showModal === true ? <Modal /> : null }
                <h1>Verb Conjugator</h1>
                <form id="conjugator" className="col-xs-12 col-sm-8 col-lg-4">
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
                        <dl id='tenseSelect'>
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
                    { questionSet.length > 0 && 
                        <section id="headings">
                            <h2>[ { questionSet[question] && questionSet[question].infinitive  } ]</h2>
                            <h4>{ questionSet[question] && questionSet[question].translation  }</h4>
                            <h5>{ tenses[tense - 1].tense } tense</h5>
                        </section>
                    }
                    { questionSet.length > 0 && 
                        <fieldset className="col-lg-12">
                            <Textinput id="yo" name="yo" className="col-lg-12" />
                            <Textinput id="tu" name="tu" className="col-lg-12" />
                            <Textinput id="el" name="el/Ella/Usted" className="col-lg-12" />
                            <Textinput id="nosotros" name="nosotros" className="col-lg-12" />
                            <Textinput id="vosotros" name="vosotros" className="col-lg-12" />
                            <Textinput id="ellos" name="ellos/Ellas/Ustedes" className="col-lg-12" />
                        </fieldset>
                    }
                    { questionSet.length > 0 && <Accents /> }
                    <div className='buttons col-lg-12'>
                        { questionSet.length > 0 && <input type="button" id="submitBtn" onClick={ incrementQuestion } value="submit" /> }
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

export default Conjugator;
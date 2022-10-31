import { useState, useEffect } from 'react';
import { PrismaClient } from '@prisma/client';
import Modal from '/src/components/modal.tsx';
import Textinput from '/src/components/textInput.tsx';
import Accents from '/src/components/accents.tsx';
import randomNumberGenerator from '../../helper/useRandomNumberGenerator.tsx';

const prisma = new PrismaClient();

function Conjugator( { verbs, tenses, conjugations } ) {
    const numQuestions = 5;
    const numOptions = 5;
    const [question, setQuestion] = useState( 0 );
    const [infinitives, setInfinitives] = useState( [] );
    const [translations, setTranslations] = useState( [] );
    const [randomTenses, setRandomTenses] = useState( randomNumberGenerator( numQuestions, tenses.length )
                                                .map( (element) => element + 1 ) 
                                            );
    const [showModal, setShowModal] = useState( false );

    useEffect( () => {
        const randomIndices = randomNumberGenerator( numQuestions, verbs.length );
        const randomOrder = randomNumberGenerator( numQuestions, tenses.length );
        let verbIds = [];
        let slideSet = [];
        let scrambledSet = [];
        for( const index of randomIndices ) {
            verbIds = [...verbIds, verbs.filter( verb => verb.id === index )[0].id];
        }
        for( const id of verbIds ) {
            setInfinitives( prev => [...prev, verbs.filter( verb => verb.id === id)[0].infinitive]);
            setTranslations( prev => [...prev, verbs.filter( verb => verb.id === id)[0].translation]);
        }
    }, [] );

    const incrementQuestion = () => {
        if( question < numQuestions ) {
            setQuestion( ++question );
        } 
        
        question === numQuestions && setShowModal( showModal => showModal = !showModal );
    }
    const currentTense = tenses && tenses.filter( tense => tense.id === randomTenses[question] )[0].tense;

    return (
        <>
            <section className='pageContainer'>
                { showModal === true ? <Modal /> : null }
                <h1>Verb Conjugator</h1>
                <form id="conjugator" className="col-xs-12 col-sm-8 col-lg-4">
                    <h2>[ { infinitives && infinitives[question]  } ]</h2>
                    <h4>{ translations && translations[question]  }</h4>
                    <h5>{ currentTense } tense</h5>

                    <fieldset className="col-lg-12">
                        <Textinput id="yo" name="yo" className="col-lg-12" />
                        <Textinput id="tu" name="tu" className="col-lg-12" />
                        <Textinput id="el" name="el/Ella/Usted" className="col-lg-12" />
                        <Textinput id="nosotros" name="nosotros" className="col-lg-12" />
                        <Textinput id="vosotros" name="vosotros" className="col-lg-12" />
                        <Textinput id="ellos" name="ellos/Ellas/Ustedes" className="col-lg-12" />
                    </fieldset>
                    { questionSet[question] && <Accents /> }
                    <div className='buttons col-lg-12'>
                        { questionSet[question] && <input type="button" id="submitBtn" onClick={ incrementQuestion } value="submit" /> }
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
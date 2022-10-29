import { useState, useEffect } from 'react';
import { PrismaClient } from '@prisma/client';
import Siteheader from '/src/components/siteHeader.tsx';
import Footer from '/src/components/footer.tsx';
import randomNumberGenerator from '../../helper/useRandomNumberGenerator.tsx';

const prisma = new PrismaClient();

function Slider( { verbs, tenses, conjugations } ) {
    const numQuestions = 5;
    const numOptions = 5;
    const bricks = ['yo', 'tu', 'él/ella/ud', 'nosotros', 'vosotros', 'ellos/ellas/uds'];
    const [question, setQuestion] = useState( 0 );
    const [infinitives, setInfinitives] = useState( [] );
    const [randomTenses, setRandomTenses] = useState( randomNumberGenerator( numQuestions, tenses.length ).map( (element) => element + 1 ) );
    const [slideSets, setSlideSets] = useState( [] );

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
        }
        let sets = [];
        for( let i = 0; i < numQuestions; i++) {
            let currentVerb = verbIds[i];
            let currentTense = randomTenses[i];
            let currentConjugations = conjugations
                .filter( ( conjugation ) => conjugation.tense === currentTense && conjugation.verb === currentVerb)
                .map( ({ yo, tu, el, nosotros, vosotros, ellos }) => ({ yo, tu, el, nosotros, vosotros, ellos}) );
            let currentSlides = Object.values(currentConjugations[0]);
            const randomSlideOrder = randomNumberGenerator( currentSlides.length, currentSlides.length );
            let scrambledSlides = randomSlideOrder.map( slide => currentSlides[slide] );
            setSlideSets( prev => [...prev, scrambledSlides] );
        }
    }, []);

    const incrementQuestion = () => {
        if( question <= question ) {
            setQuestion( question + 1 );
        }
    }
    
    const currentTense = tenses && tenses.filter( tense => tense.id === randomTenses[question] )[0].tense;
    const currentSlideSet = slideSets && slideSets[question];

    return (
        <>
            <section className='pageContainer'>
                <h1>Verb Slider</h1>
                <form id="slider" className="col-xs-12 col-sm-8 col-lg-4">
                    <fieldset className="col-lg-12">
                        <section>
                            <h2>[ { infinitives && infinitives[question]  } ]</h2>
                            <h4>{ currentTense } tense</h4>
                        </section>
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
                                    currentSlideSet && currentSlideSet.map( ( slideSet, index ) => 
                                        <div key={ index }>{ slideSet }</div>
                                    )
                                }
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
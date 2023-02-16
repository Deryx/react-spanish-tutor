import { useState, useEffect, useRef, useImperativeHandle, FC } from 'react';
import { PrismaClient } from '@prisma/client';
import Layout from '../../src/components/layout';
import Dropdown from '../../src/components/dropDown';
import Card from '../../src/components/card';

const prisma = new PrismaClient();

interface FlashcardProps {
    verbs: any[];
    tenses: any[];
    conjugations: any[];
}

const Flashcard: FC<FlashcardProps> = ( { verbs, tenses, conjugations } ) => {
    const verbRef = useRef(null);
    const tenseRef = useRef(null);
    const verbCardRef = useRef(null);
    const [cardInfo, setCardInfo] = useState({
        infinitive: null,
        translation: null,
        pronunciation: null,
        tense: null,
        conjugations: null
    });
    const [verbSelection, setVerbSelection] = useState(0);
    const [tenseSelection, setTenseSelection] = useState(0);

    const verbSelections = [];
    const tenseSelections = [];
    const headerFront: String = 'Front';
    const headerBack: String = 'Back';
    const info = '';
    let toggle: boolean = false;

    const createVerbSelect = () => {
        for(const verb of verbs) {
            verbSelections.push( 
                {
                    id: verb.id,
                    verb: verb.infinitive 
                }
            );
        }
        verbSelections.sort((a, b) => a.verb > b.verb ? 1 : -1);
        verbSelections.unshift({ id: '', verb: 'SELECT AN INFINITIVE' });
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

    const handleFlipClick = (e) => {
        e.preventDefault();
        toggle = !toggle;
        if(toggle) {
            verbCardRef.current.classList.add('flipCard');
        } else {
            verbCardRef.current.classList.remove('flipCard');
            console.log(verbCardRef.current.classList);
        }
    }

    const handleVerbChange = (e) => {
        e.preventDefault();
        setVerbSelection(parseInt(e.target.value));
    }

    const handleTenseChange = (e) => {
        e.preventDefault();
        setTenseSelection(parseInt(e.target.value));
    }

    useEffect(() => {
        const cardBack = verbCardRef.current.querySelector('.back');
        cardBack.style.backgroundColor = 'rgb(0, 0, 0)';
        const info = {
                infinitive: null,
                translation: null,
                pronunciation: null,
                tense: '',
                conjugations: null
            };
        const infinitiveInfo = verbs.find((verb) => verb.id  === verbSelection);
        const tenseInput = tenses.find((tense) => tense.id === tenseSelection);
        info.infinitive = infinitiveInfo && infinitiveInfo.infinitive;
        info.translation = infinitiveInfo && infinitiveInfo.translation;
        info.pronunciation = infinitiveInfo && infinitiveInfo.pronunciation;
        info.tense = tenseInput && tenseInput.tense;
        const verbConjugations = conjugations
            .filter((conjugation) => conjugation.verb === verbSelection && conjugation.tense === tenseSelection)
            .map( ({ yo, tu, el, nosotros, vosotros, ellos }) => ({ yo, tu, el, nosotros, vosotros, ellos}) )[0];
        info.conjugations = verbConjugations && verbConjugations;
        setCardInfo(info);
    }, [verbSelection, tenseSelection]);

    createVerbSelect();
    createTenseSelect();

    return (
        <Layout>
            <section className='pageContainer'>
                <h1>Verb Flashcard</h1>
                <form id="verbFlashcard" className="col-xs-12 col-sm-8 col-lg-4">
                    <fieldset className="col-lg-12">
                        <dl ref={verbRef}>
                            <dt><label htmlFor="verbSelect">verb: </label></dt>
                            <dd>
                                <select id="verbSelect" name="verbSelect" onChange={handleVerbChange}>
                                    { verbSelections.map( ( verbSelection ) => 
                                        <option key={ verbSelection.id } value={ verbSelection.id }>{ verbSelection.verb }</option>
                                    )}
                                </select>
                            </dd>
                        </dl>
                        <dl>
                            <dt><label htmlFor="tenseSelect">tense: </label></dt>
                            <dd>
                                <select ref={tenseRef} id="tenseSelect" name="tenseSelect" onChange={handleTenseChange}>
                                    { tenseSelections.map( ( tenseSelection, i ) => 
                                        <option key={ i } value={ tenseSelection.id }>{ tenseSelection.tense }</option>
                                    )}
                                </select>
                            </dd>
                        </dl>
                        { cardInfo ? 
                            <Card ref={ verbCardRef } cardType={'verb'} infinitive={ cardInfo.infinitive } translation={ cardInfo.translation } pronunciation={ cardInfo.pronunciation } tense={ cardInfo.tense } conjugations={cardInfo.conjugations} />
                            : null                            
                        }
                    </fieldset>
                    <div className='buttons col-lg-12'>
                        <input type="button" id="flipBtn" onClick={handleFlipClick} value="flip card" />
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

export default Flashcard;
import { useState, useEffect, useRef, useImperativeHandle, FC } from 'react';
import { PrismaClient } from '@prisma/client';
import Dropdown from '../../src/components/dropDown';
import Card from '../../src/components/card';

const prisma = new PrismaClient();

interface FlashcardProps {
    verbs: any[];
    tenses: any[];
}

const Flashcard: FC<FlashcardProps> = ( { verbs, tenses } ) => {
    const cardRef = useRef(null);
    const [card, setCard] = useState(0);

    const verbSelections = [];
    const tenseSelections = [];
    const headerFront = 'Front';
    const headerBack = 'Back';
    const info = '';

    for(const verb of verbs) {
        verbSelections.push( 
            {
                id: verb.id,
                verb: verb.infinitive 
            }
        );
    }
    verbSelections.sort((a, b) => a.verb > b.verb ? 1 : -1);
    
    for(const tense of tenses) {
        tenseSelections.push( 
            {
                id: tense.id,
                tense: tense.tense
            } 
        );
    }


    const incrementQuestion = () => {
        if( card <= card ) {
            setCard( card + 1 );
        }
    }

    return (
        <>
            <section className='pageContainer'>
                <h1>Verb Flashcard</h1>
                <form id="verbFlashcard" className="col-xs-12 col-sm-8 col-lg-4">
                    <fieldset className="col-lg-12">
                        <dl>
                            <dt><label htmlFor="verbSelect">verb: </label></dt>
                            <dd>
                                <select id="verbSelect" name="verbSelect">
                                    { verbSelections.map( ( verbSelection ) => 
                                        <option key={ verbSelection.id } value={ verbSelection.id }>{ verbSelection.verb }</option>
                                    )}
                                </select>
                            </dd>
                        </dl>
                        <dl>
                            <dt><label htmlFor="tenseSelect">tense: </label></dt>
                            <dd>
                                <select id="tenseSelect" name="tenseSelect">
                                    { tenseSelections.map( ( tenseSelection, i ) => 
                                        <option key={ i } value={ tenseSelection.id }>{ tenseSelection.tense }</option>
                                    )}
                                </select>
                            </dd>
                        </dl>
                        <Card ref={ cardRef } frontHeader={ headerFront } backHeader={ headerBack } frontInfo={ info } backInfo={ info } />
                    </fieldset>
                    <div className='buttons col-lg-12'>
                        <input type="button" id="flipBtn" value="flip card" />
                        <input type="button" id="nextBtn" onClick={ incrementQuestion } value="next" />
                    </div>
                </form>
            </section>
        </>
    )
}

export async function getServerSideProps() {
    const allVerbs = await prisma.verbs.findMany();
    const allTenses = await prisma.tenses.findMany();
    return {
        props: {
            verbs: allVerbs,
            tenses: allTenses,
        }
    }
}

export default Flashcard;
import { useState, useEffect, useRef, useImperativeHandle } from 'react';
import { PrismaClient } from '@prisma/client';
import Siteheader from '/src/components/siteHeader.tsx';
import Footer from '/src/components/footer.tsx';
import Dropdown from '/src/components/dropDown.tsx';
import Card from '/src/components/card.tsx';

const prisma = new PrismaClient();

function Flashcard( { verbs, tenses } ) {
    const cardRef = useRef(null);

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
        if( question <= question ) {
            setQuestion( question + 1 );
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
            <Footer />
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
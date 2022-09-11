import { PrismaClient } from '@prisma/client';
import Siteheader from '/src/components/siteHeader.tsx';
import Footer from '/src/components/footer.tsx';
import Dropdown from '/src/components/dropDown.tsx';
import Card from '/src/components/card.tsx';

const prisma = new PrismaClient();

function Flashcard( { verbs, tenses } ) {
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
                        <Card header={ headerFront } info={ info } />
                        {/* <Card header={ headerBack } info={ info } /> */}
                    </fieldset>
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
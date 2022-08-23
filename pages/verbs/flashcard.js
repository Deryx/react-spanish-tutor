import { PrismaClient } from '@prisma/client';
import Siteheader from '/src/components/siteHeader.tsx';
import Footer from '/src/components/footer.tsx';
import Dropdown from '/src/components/dropDown.tsx';
import Card from '/src/components/card.tsx';

const prisma = new PrismaClient();

function Flashcard( { verbs, tenses } ) {
    const verbSelect = [];
    const tenseSelect = [];
    const headerFront = 'Front';
    const headerBack = 'Back';
    const info = '';

    for(const verb in verbs) {
        verbSelect.push( verbs[verb].infinitive );
    }
    
    for(const tense in tenses) {
        tenseSelect.push( tenses[tense].tense );
    }

    return (
        <>
            <Siteheader />
            <section className='pageContainer'>
                <h1>Verb Flashcard</h1>
                <form id="verbFlashcard" className="col-xs-12 col-sm-8 col-lg-4">
                    <fieldset className="col-lg-12">
                        <Dropdown id="verbSelect" name="verbSelect" options={ verbSelect } />
                        <Dropdown id="tenseSelect" name="tenseSelect" options={ tenseSelect } />
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
            tenses: allTenses
        }
    }
}

export default Flashcard;
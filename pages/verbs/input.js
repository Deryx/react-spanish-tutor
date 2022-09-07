import { useState } from 'react';
import { PrismaClient } from '@prisma/client';
import Siteheader from '/src/components/siteHeader.tsx';
import Footer from '/src/components/footer.tsx';
import Texinput from '/src/components/textInput.tsx';
import Textsection from '/src/components/verbs/tenseSection.tsx';
import Accents from '/src/components/accents.tsx';

const prisma = new PrismaClient();

function Input({ tenses }) {
    const formTenses = [];
    const [tense, setTense] = useState( 0 );

    for(const tense in tenses) {
        formTenses.push( tenses[tense].tense );
    }

    function incrementTense() {
        setTense( tense + 1 );
    }

    function handleNextClick() {
        incrementTense();        
    }

    return (
        <div>
            <section className='pageContainer'>
                <h1>Verb Input</h1>
                <form id="verbs" className="col-xs-12 col-sm-8 col-lg-5">
                    <fieldset className="col-lg-12">
                        <Texinput id="infinitive" name="infinitive" className="col-lg-12" />
                        <Texinput id="translation" name="translation" className="col-lg-12" />
                        <Texinput id="pronunciation" name="pronunciation" className="col-lg-12" />
                    
                        <Textsection tense={ formTenses[tense]  } />
                    </fieldset>
                    <Accents></Accents>
                    <div className='buttons col-lg-12'>
                        <input type="button" id="nextBtn" onClick={ incrementTense } value="next" />
                    </div>
                    <div className='buttons col-lg-12'>
                        <input type="button" id="submitBtn" value="add verb" />
                    </div>
                </form>
            </section>
            <Footer />
        </div>
    )
}

export async function getServerSideProps() {
    const allTenses = await prisma.tenses.findMany();
    return {
        props: {
            tenses: allTenses
        }
    }
}

export default Input;
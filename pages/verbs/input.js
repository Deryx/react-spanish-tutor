import { useState, useRef } from 'react';
import { PrismaClient } from '@prisma/client';
import Siteheader from '/src/components/siteHeader.tsx';
import Footer from '/src/components/footer.tsx';
import Texinput from '/src/components/textInput.tsx';
import Textsection from '/src/components/verbs/tenseSection.tsx';
import Accents from '/src/components/accents.tsx';

const prisma = new PrismaClient();

function Input({ tenses }) {
    const infinitiveRef = useRef();
    const nextButtonRef = useRef();
    const submitButtonRef = useRef();

    const formTenses = [];
    const [tense, setTense] = useState( 0 );
    const numTenses = tenses.length;

    for(const tense in tenses) {
        formTenses.push( tenses[tense].tense );
    }

    function incrementTense() {
        setTense( tense + 1 );
    }

    function handleNextClick() {
        if(tense < numTenses - 1 ) {
            incrementTense();
        } else {
            nextButtonRef.current.style.display = "none";
            submitButtonRef.current.style.display = "block";
        }     
    }

    return (
        <div>
            <section className='pageContainer'>
                <h1>Verb Input</h1>
                    <form id="verbs" className="col-xs-12 col-sm-8 col-lg-5">
                        { tense < numTenses && 
                            <fieldset className="col-lg-12">
                                    <>
                                        <Texinput ref={ infinitiveRef } id="infinitive" name="infinitive" className="col-lg-12" />
                                        <Texinput id="translation" name="translation" className="col-lg-12" />
                                        <Texinput id="pronunciation" name="pronunciation" className="col-lg-12" />
                                    
                                        <Textsection tense={ formTenses[tense]  } />
                                    </>
                            </fieldset>
                        }
                        <div className='buttons col-lg-12'>
                            <input ref={ nextButtonRef } type="button" id="nextBtn" onClick={ handleNextClick } value="next" />
                            <input ref={ submitButtonRef } type="button" id="submitBtn" value="add verb" />
                        </div>
                    </form>
                { tense < numTenses && <Accents /> }
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
import { useState, useRef, FC } from 'react';
import { PrismaClient } from '@prisma/client';
import Texinput from '../../src/components/textInput';
import Tensesection from '../../src/components/verbs/tenseSection';
import Accents from '../../src/components/accents';

const prisma = new PrismaClient();

interface InputProps {
    tenses: any[];
}

const Input: FC<InputProps> = ({ tenses }) => {
    const infinitiveRef = useRef(null);
    const nextButtonRef = useRef(null);
    const submitButtonRef = useRef(null);

    const formTenses = [];
    const [tense, setTense] = useState(0);
    const numTenses = tenses.length;

    let currentTextBox;

    const incrementTense = () => {
        setTense(tense + 1);
    }

    const handleNextClick = () => {
        if(tense < numTenses - 1) {
            incrementTense();
        } else {
            nextButtonRef.current.style.display = "none";
            submitButtonRef.current.style.display = "block";
        }     
    }

    const handleInfinitiveFocusEvent = (e) => {
        const infinitiveBox = document.querySelector('#infinitive');
        if(e.target === infinitiveBox) {
            currentTextBox = infinitiveBox;
        }
    }

    const handleSectionFocusEvent = (e) => {
        const currentSection = document.querySelector(`#${formTenses[tense]}`);
        if(currentSection.contains(e.target)){
            currentTextBox = e.target;
        }
    }

    const handleAccentClick = (e, accent) => {
        e.preventDefault();
        const currentPosition = currentTextBox.selectionStart;
        let answer = currentTextBox.value;
        currentTextBox.value = answer.slice(0, currentPosition) + e.target.value + answer.slice(currentPosition);
        currentTextBox.focus();
        currentTextBox.selectionStart = currentPosition + 1;
        currentTextBox.selectionEnd = currentPosition + 1;
    }

    for(const tense in tenses) {
        formTenses.push( tenses[tense].tense );
    }

    return (
        <div>
            <section className='pageContainer'>
                <h1>Verb Input</h1>
                    <form id="verbs" className="col-xs-12 col-sm-8 col-lg-5">
                        { tense < numTenses && 
                            <fieldset className="col-lg-12">
                                    <>
                                        <Texinput ref={ infinitiveRef } id="infinitive" name="infinitive" onFocusEvent={ handleInfinitiveFocusEvent } className="col-lg-12" />
                                        <Texinput id="translation" name="translation" className="col-lg-12" />
                                        <Texinput id="pronunciation" name="pronunciation" className="col-lg-12" />
                                    
                                        <Tensesection tense={ formTenses[tense] } onFocusEvent={ handleSectionFocusEvent } />
                                    </>
                            </fieldset>
                        }
                        <div className='buttons col-lg-12'>
                            <input ref={ nextButtonRef } type="button" id="nextBtn" onClick={ handleNextClick } value="next" />
                            <input ref={ submitButtonRef } type="button" id="submitBtn" value="add verb" />
                        </div>
                    </form>
                { tense < numTenses && <Accents handleAccentClick={ handleAccentClick } /> }
            </section>
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
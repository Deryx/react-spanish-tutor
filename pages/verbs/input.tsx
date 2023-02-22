import { useState, useRef, FC } from 'react';
import Head from '../../node_modules/next/head';
import Layout from '../../src/components/layout';
import Router from "../../node_modules/next/router";
import { PrismaClient } from '@prisma/client';
import Texinput from '../../src/components/textInput';
import Accents from '../../src/components/accents';

const prisma = new PrismaClient();

interface InputProps {
    verbs: any[];
    tenses: any[];
}

const Input: FC<InputProps> = ({ verbs, tenses }) => {
    const formRef = useRef(null);
    const infinitiveRef = useRef(null);
    const translationRef = useRef(null);
    const pronunciationRef = useRef(null);
    const tensesRef = useRef(null);

    const presentYoRef = useRef(null);
    const presentTuRef = useRef(null);
    const presentElRef = useRef(null);
    const presentNosotrosRef = useRef(null);
    const presentVosotrosRef = useRef(null);
    const presentEllosRef = useRef(null);

    const preteriteYoRef = useRef(null);
    const preteriteTuRef = useRef(null);
    const preteriteElRef = useRef(null);
    const preteriteNosotrosRef = useRef(null);
    const preteriteVosotrosRef = useRef(null);
    const preteriteEllosRef = useRef(null);

    const imperfectYoRef = useRef(null);
    const imperfectTuRef = useRef(null);
    const imperfectElRef = useRef(null);
    const imperfectNosotrosRef = useRef(null);
    const imperfectVosotrosRef = useRef(null);
    const imperfectEllosRef = useRef(null);

    const conditionalYoRef = useRef(null);
    const conditionalTuRef = useRef(null);
    const conditionalElRef = useRef(null);
    const conditionalNosotrosRef = useRef(null);
    const conditionalVosotrosRef = useRef(null);
    const conditionalEllosRef = useRef(null);

    const futureYoRef = useRef(null);
    const futureTuRef = useRef(null);
    const futureElRef = useRef(null);
    const futureNosotrosRef = useRef(null);
    const futureVosotrosRef = useRef(null);
    const futureEllosRef = useRef(null);

    const nextButtonRef = useRef(null);
    const submitButtonRef = useRef(null);

    const formTenses = [];
    const [tense, setTense] = useState(0);
    const numTenses = tenses.length;

    let currentTextBox;

    class Verb {
        infinitive: string;
        translation: string;
        pronunciation: string;

        constructor(infinitive: string,
                    translation: string,
                    pronunciation: string){
            
            this.infinitive = infinitive;
            this.translation = translation;
            this.pronunciation = pronunciation;
        }
    }

    class Conjugation {
        verb: number;
        tense: number;
        yo: string;
        tu: string;
        el: string;
        nosotros: string;
        vosotros: string;
        ellos: string;

        constructor(verb: number,
                    tense: number,
                    yo: string,
                    tu: string,
                    el: string,
                    nosotros: string,
                    vosotros: string,
                    ellos: string) {

            this.verb = verb;
            this.tense = tense;
            this.yo = yo;
            this.tu = tu;
            this.el = el;
            this.nosotros = nosotros;
            this.vosotros = vosotros;
            this.ellos = ellos;
        }
    }

    const addVerb = async (verb) => {
        try {
            const body = verb;
            await fetch(`/api/add-verb`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body),
            });
        } catch (error) {
            console.error(error);
        }
    }

    const addConjugation = async (conjugation) => {
        try {
            const body = conjugation;
            await fetch(`/api/add-conjugation`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body),
            });
        } catch (error) {
            console.error(error);
        }
    }

    const incrementTense = () => {
        setTense(tense + 1);
    }

    const handleNextClick = () => {
        if(tense < numTenses - 1) {
            const currentTense = formTenses[tense];
            const formInputs = formRef.current.querySelectorAll('input');
            let allAnswered = true;
            for(const formInput of formInputs) {
                if(!formInput.value) {
                    allAnswered = false;
                    break;
                }
            }
            if(allAnswered) {
                incrementTense();
            }

        } else {
            nextButtonRef.current.style.display = "none";
            submitButtonRef.current.style.display = "block";
        }     
    }

    const handleTextboxFocusEvent = (e) => {
        currentTextBox = e.target;
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

    const handleSubmitClick = (e) => {
        e.preventDefault();

        const newVerb = new Verb(
            infinitiveRef.current.value,
            translationRef.current.value,
            pronunciationRef.current.value);

        addVerb(newVerb);
        const verb = verbs.find(verb => verb.infinitive === infinitiveRef.current.value);
        const newVerbId = verb.id;

        const presentConjugations = new Conjugation(
            newVerbId,
            tense,
            presentYoRef.current.value,
            presentTuRef.current.value,
            presentElRef.current.value,
            presentNosotrosRef.current.value,
            presentVosotrosRef.current.value,
            presentEllosRef.current.value
        );
        addConjugation(presentConjugations);

        const preteriteConjugations = new Conjugation(
            newVerbId,
            tense,
            preteriteYoRef.current.value,
            preteriteTuRef.current.value,
            preteriteElRef.current.value,
            preteriteNosotrosRef.current.value,
            preteriteVosotrosRef.current.value,
            preteriteEllosRef.current.value
        );
        addConjugation(preteriteConjugations);

        const imperfectConjugations = new Conjugation(
            newVerbId,
            tense,
            imperfectYoRef.current.value,
            imperfectTuRef.current.value,
            imperfectElRef.current.value,
            imperfectNosotrosRef.current.value,
            imperfectVosotrosRef.current.value,
            imperfectEllosRef.current.value
        );
        addConjugation(imperfectConjugations);

        const conditionalConjugations = new Conjugation(
            newVerbId,
            tense,
            conditionalYoRef.current.value,
            conditionalTuRef.current.value,
            conditionalElRef.current.value,
            conditionalNosotrosRef.current.value,
            conditionalVosotrosRef.current.value,
            conditionalEllosRef.current.value
        );
        addConjugation(conditionalConjugations);

        const futureConjugations = new Conjugation(
            newVerbId,
            tense,
            futureYoRef.current.value,
            futureTuRef.current.value,
            futureElRef.current.value,
            futureNosotrosRef.current.value,
            futureVosotrosRef.current.value,
            futureEllosRef.current.value
        );
        addConjugation(futureConjugations);
    }

    for(const tense in tenses) {
        formTenses.push( tenses[tense].tense );
    }

    return (
        <Layout>
            <section className='pageContainer'>
                <h1>Verb Input</h1>
                    <form ref={ formRef } id="verbs" className="col-xs-12 col-sm-8 col-lg-5">
                        { tense < numTenses && 
                            <fieldset className="col-lg-10">
                                <Texinput ref={ infinitiveRef } id="infinitive" name="infinitive" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                <Texinput ref={ translationRef } id="translation" name="translation" inputClass="col-lg-12" />
                                <Texinput ref={ pronunciationRef } id="pronunciation" name="pronunciation" inputClass="col-lg-12" />
                            
                                <section ref={ tensesRef }>
                                    <h4>{ formTenses[tense] }</h4>
                                    { formTenses[tense] === 'present' && 
                                        <>
                                            <Texinput ref={ presentYoRef } id="presentYo" name="Yo" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ presentTuRef } id="presentTu" name="Tu" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ presentElRef } id="presentEl" name="El/Ella/Usted" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ presentNosotrosRef } id="presentNosotros" name="Nosotros" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ presentVosotrosRef } id="presentVosotros" name="Vosotros" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ presentEllosRef } id="presentEllos" name="Ellos/Ellas/Ustedes" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                        </>
                                    }
                                    { formTenses[tense] === 'preterite' && 
                                        <>
                                            <Texinput ref={ preteriteYoRef } id="preteriteYo" name="Yo" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ preteriteTuRef } id="preteriteTu" name="Tu" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ preteriteElRef } id="preteriteEl" name="El/Ella/Usted" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ preteriteNosotrosRef } id="preteriteNosotros" name="Nosotros" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ preteriteVosotrosRef } id="preteriteVosotros" name="Vosotros" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ preteriteEllosRef } id="preteriteEllos" name="Ellos/Ellas/Ustedes" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                        </>
                                    }
                                    { formTenses[tense] === 'imperfect' &&
                                        <>
                                            <Texinput ref={ imperfectYoRef } id="imperfectYo" name="Yo" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ imperfectTuRef } id="imperfectTu" name="Tu" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ imperfectElRef } id="imperfectEl" name="El/Ella/Usted" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ imperfectNosotrosRef } id="imperfectNosotros" name="Nosotros" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ imperfectVosotrosRef } id="imperfectVosotros" name="Vosotros" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ imperfectEllosRef } id="imperfectEllos" name="Ellos/Ellas/Ustedes" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                        </>
                                    }
                                    { formTenses[tense] === 'conditional' && 
                                        <>
                                            <Texinput ref={ conditionalYoRef } id="conditionalYo" name="Yo" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ conditionalTuRef } id="conditionalTu" name="Tu" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ conditionalElRef } id="conditionalEl" name="El/Ella/Usted" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ conditionalNosotrosRef } id="conditionalNosotros" name="Nosotros" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ conditionalVosotrosRef } id="conditionalVosotros" name="Vosotros" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ conditionalEllosRef } id="conditionalEllos" name="Ellos/Ellas/Ustedes" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                        </>
                                    }
                                    { formTenses[tense] === 'future' && 
                                        <>
                                            <Texinput ref={ futureYoRef } id="futureYo" name="Yo" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ futureTuRef } id="futureTu" name="Tu" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ futureElRef } id="futureEl" name="El/Ella/Usted" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ futureNosotrosRef } id="futureNosotros" name="Nosotros" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ futureVosotrosRef } id="futureVosotros" name="Vosotros" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ futureEllosRef } id="futureEllos" name="Ellos/Ellas/Ustedes" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                        </>
                                    }
                                </section>
                            </fieldset>
                        }
                        <div className='buttons col-lg-12'>
                            <input ref={ nextButtonRef } type="button" id="nextBtn" onClick={ handleNextClick } value="next" />
                            <input ref={ submitButtonRef } type="button" id="submitBtn" onClick={ handleSubmitClick } value="add verb" />
                        </div>
                    </form>
                { tense < numTenses && <Accents handleAccentClick={ handleAccentClick } /> }
            </section>
        </Layout>
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

export default Input;
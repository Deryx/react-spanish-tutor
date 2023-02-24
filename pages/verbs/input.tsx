import { useState, useRef, FC } from 'react';
import { useRouter } from '../../node_modules/next/router';
import Head from '../../node_modules/next/head';
import Layout from '../../src/components/layout';
import Router from "../../node_modules/next/router";
import { PrismaClient } from '@prisma/client';
import Texinput from '../../src/components/textInput';
import Accents from '../../src/components/accents';

const prisma = new PrismaClient();
const router = useRouter();

interface InputProps {
    verbs: any[];
    tenses: any[];
}

const Input: FC<InputProps> = ({ verbs, tenses }) => {
    const [tense, setTense] = useState(0);
    const [verbID, setVerbID] = useState(null);
    const [presentConjugation, setPresentConjugation] = useState(null);
    const [preteriteConjugation, setPreteriteConjugation] = useState(null);
    const [imperfectConjugation, setImperfectConjugation] = useState(null);
    const [conditionalConjugation, setConditionalConjugation] = useState(null);
    const [futureConjugation, setFutureConjugation] = useState(null);
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
    const numTenses = tenses.length;

    let currentTextBox;
    let currentTense;

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

    const getVerbId = async (verb: string) => {
        try {
            const id = await fetch(`/api/retrieve-verbId?verb=${verb}`, 
                {
                    method: 'GET'
                },
            );
            return id.json();
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

    const handleNextClick = async (e) => {
        e.preventDefault();

        const formInputs = formRef.current.querySelectorAll('input');
        let allAnswered = true;

        for(const formInput of formInputs) {
            if(!formInput.value) {
                allAnswered = false;
                break;
            }
        }

        if(tense === 0) {
            const infinitve = infinitiveRef.current.value.toLowerCase();
            const translation = translationRef.current.value.toLowerCase();
            const pronunciation = pronunciationRef.current.value.toLowerCase();

            const newInfinitive = new Verb(
                infinitve,
                translation,
                pronunciation
            );
            addVerb(newInfinitive);
            const newVerb = await getVerbId(infinitve);
            setVerbID(newVerb[0].id);
            incrementTense();
        }

        if(allAnswered) {
            if(tense === 1) {
                const presentConjugations = new Conjugation(
                    verbID,
                    tense,
                    presentYoRef.current && presentYoRef.current.value.toLowerCase(),
                    presentTuRef.current && presentTuRef.current.value.toLowerCase(),
                    presentElRef.current && presentElRef.current.value.toLowerCase(),
                    presentNosotrosRef.current && presentNosotrosRef.current.value.toLowerCase(),
                    presentVosotrosRef.current && presentVosotrosRef.current.value.toLowerCase(),
                    presentEllosRef.current && presentEllosRef.current.value.toLowerCase()
                );
                setPresentConjugation(presentConjugations);
            }

            if(tense === 2) {
                const preteriteConjugations = new Conjugation(
                    verbID,
                    tense,
                    preteriteYoRef.current && preteriteYoRef && preteriteYoRef.current.value.toLowerCase(),
                    preteriteTuRef.current && preteriteTuRef.current.value.toLowerCase(),
                    preteriteElRef.current && preteriteElRef.current.value.toLowerCase(),
                    preteriteNosotrosRef.current && preteriteNosotrosRef.current.value.toLowerCase(),
                    preteriteVosotrosRef.current && preteriteVosotrosRef.current.value.toLowerCase(),
                    preteriteEllosRef.current && preteriteEllosRef.current.value.toLowerCase()
                );
                setPreteriteConjugation(preteriteConjugations);
            }

            if(tense === 3) {
                const imperfectConjugations = new Conjugation(
                    verbID,
                    tense,
                    imperfectYoRef.current && imperfectYoRef.current.value.toLowerCase(),
                    imperfectTuRef.current && imperfectTuRef.current.value.toLowerCase(),
                    imperfectElRef.current && imperfectElRef.current.value.toLowerCase(),
                    imperfectNosotrosRef.current && imperfectNosotrosRef.current.value.toLowerCase(),
                    imperfectVosotrosRef.current && imperfectVosotrosRef.current.value.toLowerCase(),
                    imperfectEllosRef.current && imperfectEllosRef.current.value.toLowerCase()
                );
                setImperfectConjugation(imperfectConjugations);
            }

            if(tense === 4) {
                const conditionalConjugations = new Conjugation(
                    verbID,
                    tense,
                    conditionalYoRef.current && conditionalYoRef.current.value.toLowerCase(),
                    conditionalTuRef.current && conditionalTuRef.current.value.toLowerCase(),
                    conditionalElRef.current && conditionalElRef.current.value.toLowerCase(),
                    conditionalNosotrosRef.current && conditionalNosotrosRef.current.value.toLowerCase(),
                    conditionalVosotrosRef.current && conditionalVosotrosRef.current.value.toLowerCase(),
                    conditionalEllosRef.current && conditionalEllosRef.current.value.toLowerCase()
                );
                setConditionalConjugation(conditionalConjugations);
            }

            if(tense === 5) {
                const futureConjugations = new Conjugation(
                    verbID,
                    tense,
                    futureYoRef.current && futureYoRef.current.value.toLowerCase(),
                    futureTuRef.current && futureTuRef.current.value.toLowerCase(),
                    futureElRef.current && futureElRef.current.value.toLowerCase(),
                    futureNosotrosRef.current && futureNosotrosRef.current.value.toLowerCase(),
                    futureVosotrosRef.current && futureVosotrosRef.current.value.toLowerCase(),
                    futureEllosRef.current && futureEllosRef.current.value.toLowerCase()
                );
                setFutureConjugation(futureConjugations);
            }

            incrementTense();
        }
    }

    const handleSubmitClick = () => {
        addConjugation(presentConjugation);
        addConjugation(preteriteConjugation);
        addConjugation(imperfectConjugation);
        addConjugation(conditionalConjugation);
        addConjugation(futureConjugation);
        router.reload();
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

    for(const tense in tenses) {
        formTenses.push( tenses[tense].tense );
    }

    return (
        <Layout>
            <section className='pageContainer'>
                <h1>Verb Input</h1>
                    <form ref={ formRef } id="verbs" className="col-xs-12 col-sm-8 col-lg-5">
                        { tense <= numTenses && 
                            <fieldset className="col-lg-10">
                                <Texinput ref={ infinitiveRef } id="infinitive" name="infinitive" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                <Texinput ref={ translationRef } id="translation" name="translation" inputClass="col-lg-12" />
                                <Texinput ref={ pronunciationRef } id="pronunciation" name="pronunciation" inputClass="col-lg-12" />
                            
                                <section ref={ tensesRef }>
                                    <h4>{ formTenses[tense - 1] }</h4>
                                    { tense === 1 ? 
                                        <>
                                            <Texinput ref={ presentYoRef } id="presentYo" name="Yo" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ presentTuRef } id="presentTu" name="Tu" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ presentElRef } id="presentEl" name="El/Ella/Usted" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ presentNosotrosRef } id="presentNosotros" name="Nosotros" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ presentVosotrosRef } id="presentVosotros" name="Vosotros" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ presentEllosRef } id="presentEllos" name="Ellos/Ellas/Ustedes" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                        </> : null
                                    }
                                    { tense === 2 ? 
                                        <>
                                            <Texinput ref={ preteriteYoRef } id="preteriteYo" name="Yo" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ preteriteTuRef } id="preteriteTu" name="Tu" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ preteriteElRef } id="preteriteEl" name="El/Ella/Usted" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ preteriteNosotrosRef } id="preteriteNosotros" name="Nosotros" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ preteriteVosotrosRef } id="preteriteVosotros" name="Vosotros" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ preteriteEllosRef } id="preteriteEllos" name="Ellos/Ellas/Ustedes" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                        </> : null
                                    }
                                    { tense === 3 ?
                                        <>
                                            <Texinput ref={ imperfectYoRef } id="imperfectYo" name="Yo" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ imperfectTuRef } id="imperfectTu" name="Tu" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ imperfectElRef } id="imperfectEl" name="El/Ella/Usted" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ imperfectNosotrosRef } id="imperfectNosotros" name="Nosotros" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ imperfectVosotrosRef } id="imperfectVosotros" name="Vosotros" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ imperfectEllosRef } id="imperfectEllos" name="Ellos/Ellas/Ustedes" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                        </> : null
                                    }
                                    { tense === 4 ? 
                                        <>
                                            <Texinput ref={ conditionalYoRef } id="conditionalYo" name="Yo" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ conditionalTuRef } id="conditionalTu" name="Tu" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ conditionalElRef } id="conditionalEl" name="El/Ella/Usted" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ conditionalNosotrosRef } id="conditionalNosotros" name="Nosotros" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ conditionalVosotrosRef } id="conditionalVosotros" name="Vosotros" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ conditionalEllosRef } id="conditionalEllos" name="Ellos/Ellas/Ustedes" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                        </> : null
                                    }
                                    { tense === 5 ? 
                                        <>
                                            <Texinput ref={ futureYoRef } id="futureYo" name="Yo" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ futureTuRef } id="futureTu" name="Tu" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ futureElRef } id="futureEl" name="El/Ella/Usted" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ futureNosotrosRef } id="futureNosotros" name="Nosotros" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ futureVosotrosRef } id="futureVosotros" name="Vosotros" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                            <Texinput ref={ futureEllosRef } id="futureEllos" name="Ellos/Ellas/Ustedes" onFocusEvent={ handleTextboxFocusEvent } inputClass="col-lg-12" />
                                        </> : null
                                    }
                                </section>
                            </fieldset>
                        }
                        <div className='buttons col-lg-12'>
                            { tense <= 5 ? 
                                <input type="button" id='nextBtn' onClick={ handleNextClick } value='next' /> : 
                                <input type="button" id='submitBtn' onClick={ handleSubmitClick } value='add verb' />
                            }
                        </div>
                    </form>
                { tense <= numTenses && <Accents handleAccentClick={ handleAccentClick } /> }
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
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
    const [tense, setTense] = useState(0);
    const [verbID, setVerbID] = useState(null);

    const [infinitive, setInfinitive] = useState(null);
    const [translation, setTranslation] = useState(null);
    const [pronunciation, setPronunciation] = useState(null);

    const [presentYo, setPresentYo] = useState(null);
    const [presentTu, setPresentTu] = useState(null);
    const [presentEl, setPresentEl] = useState(null);
    const [presentNosotros, setPresentNosotros] = useState(null);
    const [presentVosotros, setPresentVosotros] = useState(null);
    const [presentEllos, setPresentEllos] = useState(null);

    const [preteriteYo, setPreteriteYo] = useState(null);
    const [preteriteTu, setPreteriteTu] = useState(null);
    const [preteriteEl, setPreteriteEl] = useState(null);
    const [preteriteNosotros, setPreteriteNosotros] = useState(null);
    const [preteriteVosotros, setPreteriteVosotros] = useState(null);
    const [preteriteEllos, setPreteriteEllos] = useState(null);

    const [imperfectYo, setImperfectYo] = useState(null);
    const [imperfectTu, setImperfectTu] = useState(null);
    const [imperfectEl, setImperfectEl] = useState(null);
    const [imperfectNosotros, setImperfectNosotros] = useState(null);
    const [imperfectVosotros, setImperfectVosotros] = useState(null);
    const [imperfectEllos, setImperfectEllos] = useState(null);

    const [conditionalYo, setConditionalYo] = useState(null);
    const [conditionalTu, setConditionalTu] = useState(null);
    const [conditionalEl, setConditionalEl] = useState(null);
    const [conditionalNosotros, setConditionalNosotros] = useState(null);
    const [conditionalVosotros, setConditionalVosotros] = useState(null);
    const [conditionalEllos, setConditionalEllos] = useState(null);

    const [futureYo, setFutureYo] = useState(null);
    const [futureTu, setFutureTu] = useState(null);
    const [futureEl, setFutureEl] = useState(null);
    const [futureNosotros, setFutureNosotros] = useState(null);
    const [futureVosotros, setFutureVosotros] = useState(null);
    const [futureEllos, setFutureEllos] = useState(null);

    const [presentConjugation, setPresentConjugation] = useState(null);
    const [preteriteConjugation, setPreteriteConjugation] = useState(null);
    const [imperfectConjugation, setImperfectConjugation] = useState(null);
    const [conditionalConjugation, setConditionalConjugation] = useState(null);
    const [futureConjugation, setFutureConjugation] = useState(null);
    const [showConjugations, setShowConjugations] = useState(false);

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
            const hasInfinitive = verbs.find(verb => verb.infinitive === infinitive);

            if(hasInfinitive === undefined) {
                const newInfinitive = new Verb(
                    infinitive.toLowerCase(),
                    translation.toLowerCase(),
                    pronunciation.toLowerCase()
                );
                addVerb(newInfinitive);
                const newVerb = await getVerbId(infinitive);
                setVerbID(newVerb[0].id);
                incrementTense();
            }
        }

        if(allAnswered && verbID) {
            if(tense === 1) {
                const presentConjugations = new Conjugation(
                    verbID,
                    tense,
                    presentYo.toLowerCase(),
                    presentTu.toLowerCase(),
                    presentEl.toLowerCase(),
                    presentNosotros.toLowerCase(),
                    presentVosotros.toLowerCase(),
                    presentEllos.toLowerCase()
                );
                setPresentConjugation(presentConjugations);
            }

            if(tense === 2) {
                const preteriteConjugations = new Conjugation(
                    verbID,
                    tense,
                    preteriteYo.toLowerCase(),
                    preteriteTu.toLowerCase(),
                    preteriteEl.toLowerCase(),
                    preteriteNosotros.toLowerCase(),
                    preteriteVosotros.toLowerCase(),
                    preteriteEllos.toLowerCase()
                );
                setPreteriteConjugation(preteriteConjugations);
            }

            if(tense === 3) {
                const imperfectConjugations = new Conjugation(
                    verbID,
                    tense,
                    imperfectYo.toLowerCase(),
                    imperfectTu.toLowerCase(),
                    imperfectEl.toLowerCase(),
                    imperfectNosotros.toLowerCase(),
                    imperfectVosotros.toLowerCase(),
                    imperfectEllos.toLowerCase()
                );
                setImperfectConjugation(imperfectConjugations);
            }

            if(tense === 4) {
                const conditionalConjugations = new Conjugation(
                    verbID,
                    tense,
                    conditionalYo.toLowerCase(),
                    conditionalTu.toLowerCase(),
                    conditionalEl.toLowerCase(),
                    conditionalNosotros.toLowerCase(),
                    conditionalVosotros.toLowerCase(),
                    conditionalEllos.toLowerCase()
                );
                setConditionalConjugation(conditionalConjugations);
            }

            if(tense === 5) {
                const futureConjugations = new Conjugation(
                    verbID,
                    tense,
                    futureYo.toLowerCase(),
                    futureTu.toLowerCase(),
                    futureEl.toLowerCase(),
                    futureNosotros.toLowerCase(),
                    futureVosotros.toLowerCase(),
                    futureEllos.toLowerCase()
                );
                setFutureConjugation(futureConjugations);
                setShowConjugations(true);
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
        Router.reload();
    }

    const handleQuit = () => {
        Router.reload();
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
                                <Texinput ref={ infinitiveRef } id="infinitive" name="infinitive" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => setInfinitive(e.target.value) } inputClass="col-lg-12" />
                                <Texinput id="translation" name="translation" onChangeEvent={ (e) => setTranslation(e.target.value) } inputClass="col-lg-12" />
                                <Texinput id="pronunciation" name="pronunciation" onChangeEvent={ (e) => setPronunciation(e.target.value) } inputClass="col-lg-12" />
                            
                                <section ref={ tensesRef }>
                                    <h4>{ formTenses[tense - 1] }</h4>
                                    { tense === 1 ? 
                                        <>
                                            <Texinput ref={ presentYoRef } id="presentYo" name="Yo" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => setPresentYo(e.target.value) } inputClass="col-lg-12" />
                                            <Texinput ref={ presentTuRef } id="presentTu" name="Tu" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => setPresentTu(e.target.value) } inputClass="col-lg-12" />
                                            <Texinput ref={ presentElRef } id="presentEl" name="El/Ella/Usted" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => setPresentEl(e.target.value) } inputClass="col-lg-12" />
                                            <Texinput ref={ presentNosotrosRef } id="presentNosotros" name="Nosotros" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => setPresentNosotros(e.target.value) } inputClass="col-lg-12" />
                                            <Texinput ref={ presentVosotrosRef } id="presentVosotros" name="Vosotros" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => setPresentVosotros(e.target.value) } inputClass="col-lg-12" />
                                            <Texinput ref={ presentEllosRef } id="presentEllos" name="Ellos/Ellas/Ustedes" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => setPresentEllos(e.target.value) } inputClass="col-lg-12" />
                                        </> : null
                                    }
                                    { tense === 2 ? 
                                        <>
                                            <Texinput ref={ preteriteYoRef } id="preteriteYo" name="Yo" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => setPreteriteYo(e.target.value) } inputClass="col-lg-12" />
                                            <Texinput ref={ preteriteTuRef } id="preteriteTu" name="Tu" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => setPreteriteTu(e.target.value) } inputClass="col-lg-12" />
                                            <Texinput ref={ preteriteElRef } id="preteriteEl" name="El/Ella/Usted" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => setPreteriteEl(e.target.value) } inputClass="col-lg-12" />
                                            <Texinput ref={ preteriteNosotrosRef } id="preteriteNosotros" name="Nosotros" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => setPreteriteNosotros(e.target.value) } inputClass="col-lg-12" />
                                            <Texinput ref={ preteriteVosotrosRef } id="preteriteVosotros" name="Vosotros" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => setPreteriteVosotros(e.target.value) } inputClass="col-lg-12" />
                                            <Texinput ref={ preteriteEllosRef } id="preteriteEllos" name="Ellos/Ellas/Ustedes" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => setPreteriteEllos(e.target.value) } inputClass="col-lg-12" />
                                        </> : null
                                    }
                                    { tense === 3 ?
                                        <>
                                            <Texinput ref={ imperfectYoRef } id="imperfectYo" name="Yo" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => setImperfectYo(e.target.value) } inputClass="col-lg-12" />
                                            <Texinput ref={ imperfectTuRef } id="imperfectTu" name="Tu" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => setImperfectTu(e.target.value) } inputClass="col-lg-12" />
                                            <Texinput ref={ imperfectElRef } id="imperfectEl" name="El/Ella/Usted" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => setImperfectEl(e.target.value) } inputClass="col-lg-12" />
                                            <Texinput ref={ imperfectNosotrosRef } id="imperfectNosotros" name="Nosotros" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => setImperfectNosotros(e.target.value) } inputClass="col-lg-12" />
                                            <Texinput ref={ imperfectVosotrosRef } id="imperfectVosotros" name="Vosotros" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => setImperfectVosotros(e.target.value) } inputClass="col-lg-12" />
                                            <Texinput ref={ imperfectEllosRef } id="imperfectEllos" name="Ellos/Ellas/Ustedes" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => setImperfectEllos(e.target.value) } inputClass="col-lg-12" />
                                        </> : null
                                    }
                                    { tense === 4 ? 
                                        <>
                                            <Texinput ref={ conditionalYoRef } id="conditionalYo" name="Yo" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => setConditionalYo(e.target.value) } inputClass="col-lg-12" />
                                            <Texinput ref={ conditionalTuRef } id="conditionalTu" name="Tu" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => setConditionalTu(e.target.value) } inputClass="col-lg-12" />
                                            <Texinput ref={ conditionalElRef } id="conditionalEl" name="El/Ella/Usted" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => setConditionalEl(e.target.value) } inputClass="col-lg-12" />
                                            <Texinput ref={ conditionalNosotrosRef } id="conditionalNosotros" name="Nosotros" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => setConditionalNosotros(e.target.value) } inputClass="col-lg-12" />
                                            <Texinput ref={ conditionalVosotrosRef } id="conditionalVosotros" name="Vosotros" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => setConditionalVosotros(e.target.value) } inputClass="col-lg-12" />
                                            <Texinput ref={ conditionalEllosRef } id="conditionalEllos" name="Ellos/Ellas/Ustedes" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => setConditionalEllos(e.target.value) } inputClass="col-lg-12" />
                                        </> : null
                                    }
                                    { tense === 5 ? 
                                        <>
                                            <Texinput ref={ futureYoRef } id="futureYo" name="Yo" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => setFutureYo(e.target.value) } inputClass="col-lg-12" />
                                            <Texinput ref={ futureTuRef } id="futureTu" name="Tu" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => setFutureTu(e.target.value) } inputClass="col-lg-12" />
                                            <Texinput ref={ futureElRef } id="futureEl" name="El/Ella/Usted" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => setFutureEl(e.target.value) } inputClass="col-lg-12" />
                                            <Texinput ref={ futureNosotrosRef } id="futureNosotros" name="Nosotros" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => setFutureNosotros(e.target.value) } inputClass="col-lg-12" />
                                            <Texinput ref={ futureVosotrosRef } id="futureVosotros" name="Vosotros" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => setFutureVosotros(e.target.value) } inputClass="col-lg-12" />
                                            <Texinput ref={ futureEllosRef } id="futureEllos" name="Ellos/Ellas/Ustedes" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => setFutureEllos(e.target.value) } inputClass="col-lg-12" />
                                        </> : null
                                    }
                                </section>
                            </fieldset>
                        }
                        {
                            showConjugations && 
                            <>
                                <h3>Everything OK?</h3>
                                <table>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>present</th>
                                            <th>preterite</th>
                                            <th>imperfect</th>
                                            <th>conditional</th>
                                            <th>future</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>yo</td>
                                            <td>{ presentConjugation.yo }</td>
                                            <td>{ preteriteConjugation.yo }</td>
                                            <td>{ imperfectConjugation.yo }</td>
                                            <td>{ conditionalConjugation.yo }</td>
                                            <td>{ futureConjugation.yo }</td>
                                        </tr>
                                        <tr>
                                            <td>tú</td>
                                            <td>{ presentConjugation.tu }</td>
                                            <td>{ preteriteConjugation.tu }</td>
                                            <td>{ imperfectConjugation.tu }</td>
                                            <td>{ conditionalConjugation.tu }</td>
                                            <td>{ futureConjugation.tu }</td>
                                        </tr>
                                        <tr>
                                            <td>él/ella/usted</td>
                                            <td>{ presentConjugation.el }</td>
                                            <td>{ preteriteConjugation.el }</td>
                                            <td>{ imperfectConjugation.el }</td>
                                            <td>{ conditionalConjugation.el }</td>
                                            <td>{ futureConjugation.el }</td>
                                        </tr>
                                        <tr>
                                            <td>nosotros</td>
                                            <td>{ presentConjugation.nosotros }</td>
                                            <td>{ preteriteConjugation.nosotros }</td>
                                            <td>{ imperfectConjugation.nosotros }</td>
                                            <td>{ conditionalConjugation.nosotros }</td>
                                            <td>{ futureConjugation.nosotros }</td>
                                        </tr>
                                        <tr>
                                            <td>vosotros</td>
                                            <td>{ presentConjugation.vosotros }</td>
                                            <td>{ preteriteConjugation.vosotros }</td>
                                            <td>{ imperfectConjugation.vosotros }</td>
                                            <td>{ conditionalConjugation.vosotros }</td>
                                            <td>{ futureConjugation.vosotros }</td>
                                        </tr>
                                        <tr>
                                            <td>ellos/ellas/ustedes</td>
                                            <td>{ presentConjugation.ellos }</td>
                                            <td>{ preteriteConjugation.ellos }</td>
                                            <td>{ imperfectConjugation.ellos }</td>
                                            <td>{ conditionalConjugation.ellos }</td>
                                            <td>{ futureConjugation.ellos }</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </>
                        }
                        <div className='buttons col-lg-12'>
                            { tense <= 5 ? 
                                <input type="button" id='nextBtn' onClick={ handleNextClick } value='next' /> : 
                                <>
                                    <input type="button" id='submitBtn' onClick={ handleSubmitClick } value='add verb' />
                                    <input type="button" id='quitBtn' onClick={ handleQuit } value='quit' />
                                </>
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
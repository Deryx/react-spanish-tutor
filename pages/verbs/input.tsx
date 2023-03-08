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

    const [newInfinitive, setNewInfinitive] = useState({
        infinitive: null,
        translation: null,
        pronunciation: null
    });

    const [presentConjugations, setPresentConjugations] = useState({
        verb: null,
        tense: null,
        yo: null,
        tu: null,
        el: null,
        nosotros: null,
        vosotros: null,
        ellos: null
    });
    const [preteriteConjugations, setPreteriteConjugations] = useState({
        verb: null,
        tense: null,
        yo: null,
        tu: null,
        el: null,
        nosotros: null,
        vosotros: null,
        ellos: null
    });
    const [imperfectConjugations, setImperfectConjugations] = useState({
        verb: null,
        tense: null,
        yo: null,
        tu: null,
        el: null,
        nosotros: null,
        vosotros: null,
        ellos: null
    });
    const [conditionalConjugations, setConditionalConjugations] = useState({
        verb: null,
        tense: null,
        yo: null,
        tu: null,
        el: null,
        nosotros: null,
        vosotros: null,
        ellos: null
    });
    const [futureConjugations, setFutureConjugations] = useState({
        verb: null,
        tense: null,
        yo: null,
        tu: null,
        el: null,
        nosotros: null,
        vosotros: null,
        ellos: null
    });

    const [showConjugations, setShowConjugations] = useState(false);

    const formRef = useRef(null);
    const infinitiveRef = useRef(null);

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
            const hasInfinitive = verbs.find(verb => verb.infinitive === newInfinitive.infinitive);

            if(hasInfinitive === undefined) {
                addVerb(newInfinitive);
                const newVerb = newInfinitive && await getVerbId(newInfinitive.infinitive);
                setVerbID(newVerb[0].id);
                incrementTense();
            }
        }

        if(allAnswered && verbID) {
            if(tense === 1) {
                setPresentConjugations({...presentConjugations,
                    verb: verbID,
                    tense: tense,
                    yo: presentYoRef.current.value,
                    tu: presentTuRef.current.value,
                    el: presentElRef.current.value,
                    nosotros: presentNosotrosRef.current.value,
                    vosotros: presentVosotrosRef.current.value,
                    ellos: presentElRef.current.value
                });

            }
            if(tense === 2) {
                setPreteriteConjugations({...preteriteConjugations,
                    verb: verbID,
                    tense: tense,
                    yo: preteriteYoRef.current.value,
                    tu: preteriteTuRef.current.value,
                    el: preteriteElRef.current.value,
                    nosotros: preteriteNosotrosRef.current.value,
                    vosotros: preteriteVosotrosRef.current.value,
                    ellos: preteriteEllosRef.current.value
                });
            }
            if(tense === 3) {
                setImperfectConjugations({...imperfectConjugations,
                    verb: verbID,
                    tense: tense,
                    yo: imperfectYoRef.current.value,
                    tu: imperfectTuRef.current.value,
                    el: imperfectElRef.current.value,
                    nosotros: imperfectNosotrosRef.current.value,
                    vosotros: imperfectVosotrosRef.current.value,
                    ellos: imperfectEllosRef.current.value
                });
            }
            if(tense === 4) {
                setConditionalConjugations({...conditionalConjugations,
                    verb: verbID,
                    tense: tense,
                    yo: conditionalYoRef.current.value,
                    tu: conditionalTuRef.current.value,
                    el: conditionalElRef.current.value,
                    nosotros: conditionalNosotrosRef.current.value,
                    vosotros: conditionalVosotrosRef.current.value,
                    ellos: conditionalEllosRef.current.value
                });
            }
            if(tense === 5) {
                setFutureConjugations({...futureConjugations,
                    verb: verbID,
                    tense: tense,
                    yo: futureYoRef.current.value,
                    tu: futureTuRef.current.value,
                    el: futureElRef.current.value,
                    nosotros: futureNosotrosRef.current.value,
                    vosotros: futureVosotrosRef.current.value,
                    ellos: futureEllosRef.current.value
                });
                setShowConjugations(true);
            }

            incrementTense();
        }
    }

    const handleSubmitClick = () => {
        addConjugation(presentConjugations);
        addConjugation(preteriteConjugations);
        addConjugation(imperfectConjugations);
        addConjugation(conditionalConjugations);
        addConjugation(futureConjugations);
        Router.reload();
    }

    const handleQuit = () => {
        Router.reload();
    }

    const handleTextboxFocusEvent = (e) => {
        currentTextBox = e.target;
    }

    const handleAccentClick = (e) => {
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
                            <fieldset className="col-xs-12 col-lg-10">
                                <Texinput ref={ infinitiveRef } id="infinitive" name="infinitive" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => setNewInfinitive({...newInfinitive, infinitive: e.target.value.toLowerCase()}) } inputClass="col-lg-12" />
                                <Texinput id="translation" name="translation" onChangeEvent={ (e) => setNewInfinitive({...newInfinitive, translation: e.target.value.toLowerCase()}) } inputClass="col-lg-12" />
                                <Texinput id="pronunciation" name="pronunciation" onChangeEvent={ (e) => setNewInfinitive({...newInfinitive, pronunciation: e.target.value.toLowerCase()}) } inputClass="col-lg-12" />
                            
                                <section>
                                    <h4>{ formTenses[tense - 1] }</h4>
                                    { tense === 1 ? 
                                        <>
                                            <Texinput ref={ presentYoRef } id="presentYo" name="Yo" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => e.target.value.toLowerCase() } inputClass="col-lg-12" />
                                            <Texinput ref={ presentTuRef } id="presentTu" name="Tu" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => e.target.value.toLowerCase() } inputClass="col-lg-12" />
                                            <Texinput ref={ presentElRef } id="presentEl" name="El/Ella/Usted" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => e.target.value.toLowerCase() } inputClass="col-lg-12" />
                                            <Texinput ref={ presentNosotrosRef } id="presentNosotros" name="Nosotros" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => e.target.value.toLowerCase() } inputClass="col-lg-12" />
                                            <Texinput ref={ presentVosotrosRef } id="presentVosotros" name="Vosotros" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => e.target.value.toLowerCase() } inputClass="col-lg-12" />
                                            <Texinput ref={ presentEllosRef } id="presentEllos" name="Ellos/Ellas/Ustedes" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => e.target.value.toLowerCase() } inputClass="col-lg-12" />
                                        </> : null
                                    }
                                    { tense === 2 ? 
                                        <>
                                            <Texinput ref={ preteriteYoRef } id="preteriteYo" name="Yo" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => e.target.value.toLowerCase() } inputClass="col-lg-12" />
                                            <Texinput ref={ preteriteTuRef } id="preteriteTu" name="Tu" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => e.target.value.toLowerCase() } inputClass="col-lg-12" />
                                            <Texinput ref={ preteriteElRef } id="preteriteEl" name="El/Ella/Usted" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => e.target.value.toLowerCase() } inputClass="col-lg-12" />
                                            <Texinput ref={ preteriteNosotrosRef } id="preteriteNosotros" name="Nosotros" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => e.target.value.toLowerCase() } inputClass="col-lg-12" />
                                            <Texinput ref={ preteriteVosotrosRef } id="preteriteVosotros" name="Vosotros" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => e.target.value.toLowerCase() } inputClass="col-lg-12" />
                                            <Texinput ref={ preteriteEllosRef } id="preteriteEllos" name="Ellos/Ellas/Ustedes" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => e.target.value.toLowerCase() } inputClass="col-lg-12" />
                                        </> : null
                                    }
                                    { tense === 3 ?
                                        <>
                                            <Texinput ref={ imperfectYoRef } id="imperfectYo" name="Yo" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => e.target.value.toLowerCase() } inputClass="col-lg-12" />
                                            <Texinput ref={ imperfectTuRef } id="imperfectTu" name="Tu" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => e.target.value.toLowerCase() } inputClass="col-lg-12" />
                                            <Texinput ref={ imperfectElRef } id="imperfectEl" name="El/Ella/Usted" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => e.target.value.toLowerCase() } inputClass="col-lg-12" />
                                            <Texinput ref={ imperfectNosotrosRef } id="imperfectNosotros" name="Nosotros" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => e.target.value.toLowerCase() } inputClass="col-lg-12" />
                                            <Texinput ref={ imperfectVosotrosRef } id="imperfectVosotros" name="Vosotros" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => e.target.value.toLowerCase() } inputClass="col-lg-12" />
                                            <Texinput ref={ imperfectEllosRef } id="imperfectEllos" name="Ellos/Ellas/Ustedes" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => e.target.value.toLowerCase() } inputClass="col-lg-12" />
                                        </> : null
                                    }
                                    { tense === 4 ? 
                                        <>
                                            <Texinput ref={ conditionalYoRef } id="conditionalYo" name="Yo" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => e.target.value.toLowerCase() } inputClass="col-lg-12" />
                                            <Texinput ref={ conditionalTuRef } id="conditionalTu" name="Tu" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => e.target.value.toLowerCase() } inputClass="col-lg-12" />
                                            <Texinput ref={ conditionalElRef } id="conditionalEl" name="El/Ella/Usted" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => e.target.value.toLowerCase() } inputClass="col-lg-12" />
                                            <Texinput ref={ conditionalNosotrosRef } id="conditionalNosotros" name="Nosotros" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => e.target.value.toLowerCase() } inputClass="col-lg-12" />
                                            <Texinput ref={ conditionalVosotrosRef } id="conditionalVosotros" name="Vosotros" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => e.target.value.toLowerCase() } inputClass="col-lg-12" />
                                            <Texinput ref={ conditionalEllosRef } id="conditionalEllos" name="Ellos/Ellas/Ustedes" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => e.target.value.toLowerCase() } inputClass="col-lg-12" />
                                        </> : null
                                    }
                                    { tense === 5 ? 
                                        <>
                                            <Texinput ref={ futureYoRef } id="futureYo" name="Yo" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => e.target.value.toLowerCase() } inputClass="col-lg-12" />
                                            <Texinput ref={ futureTuRef } id="futureTu" name="Tu" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => e.target.value.toLowerCase() } inputClass="col-lg-12" />
                                            <Texinput ref={ futureElRef } id="futureEl" name="El/Ella/Usted" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => e.target.value.toLowerCase() } inputClass="col-lg-12" />
                                            <Texinput ref={ futureNosotrosRef } id="futureNosotros" name="Nosotros" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => e.target.value.toLowerCase() } inputClass="col-lg-12" />
                                            <Texinput ref={ futureVosotrosRef } id="futureVosotros" name="Vosotros" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => e.target.value.toLowerCase() } inputClass="col-lg-12" />
                                            <Texinput ref={ futureEllosRef } id="futureEllos" name="Ellos/Ellas/Ustedes" onFocusEvent={ handleTextboxFocusEvent } onChangeEvent={ (e) => e.target.value.toLowerCase() } inputClass="col-lg-12" />
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
                                            <td>{ presentConjugations.yo }</td>
                                            <td>{ preteriteConjugations.yo }</td>
                                            <td>{ imperfectConjugations.yo }</td>
                                            <td>{ conditionalConjugations.yo }</td>
                                            <td>{ futureConjugations.yo }</td>
                                        </tr>
                                        <tr>
                                            <td>tú</td>
                                            <td>{ presentConjugations.tu }</td>
                                            <td>{ preteriteConjugations.tu }</td>
                                            <td>{ imperfectConjugations.tu }</td>
                                            <td>{ conditionalConjugations.tu }</td>
                                            <td>{ futureConjugations.tu }</td>
                                        </tr>
                                        <tr>
                                            <td>él/ella/usted</td>
                                            <td>{ presentConjugations.el }</td>
                                            <td>{ preteriteConjugations.el }</td>
                                            <td>{ imperfectConjugations.el }</td>
                                            <td>{ conditionalConjugations.el }</td>
                                            <td>{ futureConjugations.el }</td>
                                        </tr>
                                        <tr>
                                            <td>nosotros</td>
                                            <td>{ presentConjugations.nosotros }</td>
                                            <td>{ preteriteConjugations.nosotros }</td>
                                            <td>{ imperfectConjugations.nosotros }</td>
                                            <td>{ conditionalConjugations.nosotros }</td>
                                            <td>{ futureConjugations.nosotros }</td>
                                        </tr>
                                        <tr>
                                            <td>vosotros</td>
                                            <td>{ presentConjugations.vosotros }</td>
                                            <td>{ preteriteConjugations.vosotros }</td>
                                            <td>{ imperfectConjugations.vosotros }</td>
                                            <td>{ conditionalConjugations.vosotros }</td>
                                            <td>{ futureConjugations.vosotros }</td>
                                        </tr>
                                        <tr>
                                            <td>ellos/ellas/ustedes</td>
                                            <td>{ presentConjugations.ellos }</td>
                                            <td>{ preteriteConjugations.ellos }</td>
                                            <td>{ imperfectConjugations.ellos }</td>
                                            <td>{ conditionalConjugations.ellos }</td>
                                            <td>{ futureConjugations.ellos }</td>
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
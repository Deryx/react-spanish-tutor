import { useState, useRef } from 'react';
import Texinput from '../textInput';

function Tensesection( props: any ) {
    const presentYoRef = useRef();
    const preteriteYoRef = useRef();
    const imperfectYoRef = useRef();
    const conditionalYoRef = useRef();
    const futureYoRef = useRef();

    const presentTuRef = useRef();
    const preteriteTuRef = useRef();
    const imperfectTuRef = useRef();
    const conditionalTuRef = useRef();
    const futureTuRef = useRef();

    const presentElRef = useRef();
    const preteriteElRef = useRef();
    const imperfectElRef = useRef();
    const conditionalElRef = useRef();
    const futureElRef = useRef();

    const presentNosotrosRef = useRef();
    const preteriteNosotrosRef = useRef();
    const imperfectNosotrosRef = useRef();
    const conditionalNosotrosRef = useRef();
    const futureNosotrosRef = useRef();
    
    const presentVosotrosRef = useRef();
    const preteriteVosotrosRef = useRef();
    const imperfectVosotrosRef = useRef();
    const conditionalVosotrosRef = useRef();
    const futureVosotrosRef = useRef();
    
    const presentEllosRef = useRef();
    const preteriteEllosRef = useRef();
    const imperfectEllosRef = useRef();
    const conditionalEllosRef = useRef();
    const futureEllosRef = useRef();

    return (
        <div>
            <section id={ props.tense }>
                <h4>{ props.tense }</h4>
                { props.tense === 'present' && 
                    <>
                        <Texinput ref= { presentYoRef } id={ `${ props.tense }Yo` } name="Yo" className="col-lg-12" />
                        <Texinput ref= { presentTuRef } id={ `${ props.tense }Tu` } name="Tu" className="col-lg-12" />
                        <Texinput ref= { presentElRef } id={ `${ props.tense }El` } name="El/Ella/Usted" className="col-lg-12" />
                        <Texinput ref= { presentNosotrosRef } id={ `${ props.tense }Nosotros` } name="Nosotros" className="col-lg-12" />
                        <Texinput ref= { presentVosotrosRef } id={ `${ props.tense }Vosotros` } name="Vosotros" className="col-lg-12" />
                        <Texinput ref= { presentEllosRef } id={ `${ props.tense }Ellos` } name="Ellos/Ellas/Ustedes" className="col-lg-12" />
                    </>
                }
                { props.tense === 'preterite' && 
                    <>
                        <Texinput ref= { preteriteYoRef } id={ `${ props.tense }Yo` } name="Yo" className="col-lg-12" />
                        <Texinput ref= { preteriteTuRef } id={ `${ props.tense }Tu` } name="Tu" className="col-lg-12" />
                        <Texinput ref= { preteriteElRef } id={ `${ props.tense }El` } name="El/Ella/Usted" className="col-lg-12" />
                        <Texinput ref= { preteriteNosotrosRef } id={ `${ props.tense }Nosotros` } name="Nosotros" className="col-lg-12" />
                        <Texinput ref= { preteriteVosotrosRef } id={ `${ props.tense }Vosotros` } name="Vosotros" className="col-lg-12" />
                        <Texinput ref= { preteriteEllosRef } id={ `${ props.tense }Ellos` } name="Ellos/Ellas/Ustedes" className="col-lg-12" />
                    </>
                }
                { props.tense === 'imperfect' &&
                    <>
                        <Texinput ref= { imperfectYoRef } id={ `${ props.tense }Yo` } name="Yo" className="col-lg-12" />
                        <Texinput ref= { imperfectTuRef } id={ `${ props.tense }Tu` } name="Tu" className="col-lg-12" />
                        <Texinput ref= { imperfectElRef } id={ `${ props.tense }El` } name="El/Ella/Usted" className="col-lg-12" />
                        <Texinput ref= { imperfectNosotrosRef } id={ `${ props.tense }Nosotros` } name="Nosotros" className="col-lg-12" />
                        <Texinput ref= { imperfectVosotrosRef } id={ `${ props.tense }Vosotros` } name="Vosotros" className="col-lg-12" />
                        <Texinput ref= { imperfectEllosRef } id={ `${ props.tense }Ellos` } name="Ellos/Ellas/Ustedes" className="col-lg-12" />
                    </>
                }
                { props.tense === 'conditional' && 
                    <>
                        <Texinput ref= { conditionalYoRef } id={ `${ props.tense }Yo` } name="Yo" className="col-lg-12" />
                        <Texinput ref= { conditionalTuRef } id={ `${ props.tense }Tu` } name="Tu" className="col-lg-12" />
                        <Texinput ref= { conditionalElRef } id={ `${ props.tense }El` } name="El/Ella/Usted" className="col-lg-12" />
                        <Texinput ref= { conditionalNosotrosRef } id={ `${ props.tense }Nosotros` } name="Nosotros" className="col-lg-12" />
                        <Texinput ref= { conditionalVosotrosRef } id={ `${ props.tense }Vosotros` } name="Vosotros" className="col-lg-12" />
                        <Texinput ref= { conditionalEllosRef } id={ `${ props.tense }Ellos` } name="Ellos/Ellas/Ustedes" className="col-lg-12" />
                    </>
                }
                { props.tense === 'future' && 
                    <>
                        <Texinput ref= { futureYoRef } id={ `${ props.tense }Yo` } name="Yo" className="col-lg-12" />
                        <Texinput ref= { futureTuRef } id={ `${ props.tense }Tu` } name="Tu" className="col-lg-12" />
                        <Texinput ref= { futureElRef } id={ `${ props.tense }El` } name="El/Ella/Usted" className="col-lg-12" />
                        <Texinput ref= { futureNosotrosRef } id={ `${ props.tense }Nosotros` } name="Nosotros" className="col-lg-12" />
                        <Texinput ref= { futureVosotrosRef } id={ `${ props.tense }Vosotros` } name="Vosotros" className="col-lg-12" />
                        <Texinput ref= { futureEllosRef } id={ `${ props.tense }Ellos` } name="Ellos/Ellas/Ustedes" className="col-lg-12" />
                    </>
                }
            </section>
        </div>
    )
}

export default Tensesection;
import Siteheader from '/src/components/siteHeader.tsx';
import Footer from '/src/components/footer.tsx';
import Texinput from '/src/components/textInput.tsx';
import Accents from '/src/components/accents.tsx';

function Input() {

    return (
        <>
            <Siteheader />
            <section className='pageContainer'>
                <h1>Verb Input</h1>
                <form id="verbs" className="col-xs-12 col-sm-8 col-lg-4">
                    <fieldset className="col-lg-12">
                        <Texinput id="infinitive" name="infinitive" className="col-lg-12" />
                        <Texinput id="translation" name="translation" className="col-lg-12" />
                        <Texinput id="pronunciation" name="pronunciation" className="col-lg-12" />

                        <section>
                            <h4>present tense</h4>
                            <Texinput id="presentYo" name="Yo" className="col-lg-12" />
                            <Texinput id="presentTu" name="Tu" className="col-lg-12" />
                            <Texinput id="presentEl" name="El/Ella/Usted" className="col-lg-12" />
                            <Texinput id="presentNosotros" name="Nosotros" className="col-lg-12" />
                            <Texinput id="presentVosotros" name="Vosotros" className="col-lg-12" />
                            <Texinput id="presentEllos" name="Ellos/Ellas/Ustedes" className="col-lg-12" />
                        </section>

                        <section>
                            <h4>preterite tense</h4>
                            <Texinput id="preteriteYo" name="Yo" className="col-lg-12" />
                            <Texinput id="preteriteTu" name="Tu" className="col-lg-12" />
                            <Texinput id="preteriteEl" name="El/Ella/Usted" className="col-lg-12" />
                            <Texinput id="preteriteNosotros" name="Nosotros" className="col-lg-12" />
                            <Texinput id="preteriteVosotros" name="Vosotros" className="col-lg-12" />
                            <Texinput id="preteriteEllos" name="Ellos/Ellas/Ustedes" className="col-lg-12" />
                        </section>

                        <section>
                            <h4>imperfect tense</h4>
                            <Texinput id="imperfectYo" name="Yo" className="col-lg-12" />
                            <Texinput id="imperfectTu" name="Tu" className="col-lg-12" />
                            <Texinput id="imperfectEl" name="El/Ella/Usted" className="col-lg-12" />
                            <Texinput id="imperfectNosotros" name="Nosotros" className="col-lg-12" />
                            <Texinput id="imperfectVosotros" name="Vosotros" className="col-lg-12" />
                            <Texinput id="imperfectEllos" name="Ellos/Ellas/Ustedes" className="col-lg-12" />
                        </section>

                        <section>
                            <h4>conditional tense</h4>
                            <Texinput id="conditionalYo" name="Yo" className="col-lg-12" />
                            <Texinput id="conditionalTu" name="Tu" className="col-lg-12" />
                            <Texinput id="conditionalEl" name="El/Ella/Usted" className="col-lg-12" />
                            <Texinput id="conditionalNosotros" name="Nosotros" className="col-lg-12" />
                            <Texinput id="conditionalVosotros" name="Vosotros" className="col-lg-12" />
                            <Texinput id="conditionalEllos" name="Ellos/Ellas/Ustedes" className="col-lg-12" />
                        </section>
                    </fieldset>
                </form>
                <Accents></Accents>
            </section>
            <Footer />
        </>
    )
}

export default Input;
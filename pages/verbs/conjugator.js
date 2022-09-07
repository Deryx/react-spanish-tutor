import Siteheader from '/src/components/siteHeader.tsx';
import Footer from '/src/components/footer.tsx';
import Textinput from '/src/components/textInput.tsx';
import Accents from '/src/components/accents.tsx';

function Conjugator() {
    const pages = [];

    return (
        <>
            <section className='pageContainer'>
                <h1>Verb Conjugator</h1>
                <form id="conjugator" className="col-xs-12 col-sm-8 col-lg-4">
                    <fieldset className="col-lg-12">
                        <h2></h2>
                        <h3></h3>
                        <h4></h4>
                        <Textinput id="yo" name="yo" className="col-lg-12" />
                        <Textinput id="tu" name="tu" className="col-lg-12" />
                        <Textinput id="el" name="el/Ella/Usted" className="col-lg-12" />
                        <Textinput id="nosotros" name="nosotros" className="col-lg-12" />
                        <Textinput id="vosotros" name="vosotros" className="col-lg-12" />
                        <Textinput id="ellos" name="ellos/Ellas/Ustedes" className="col-lg-12" />
                    </fieldset>
                </form>
                <Accents></Accents>
            </section>
            <Footer />
        </>
    )
}

export default Conjugator;
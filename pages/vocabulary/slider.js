import Siteheader from '/src/components/siteHeader.tsx';
import Footer from '/src/components/footer.tsx';

function Slider() {

    return (
        <>
            <Siteheader />
            <section className='pageContainer'>
                <h1>Vocabulary Slider</h1>
                <form id="slider" className="col-xs-12 col-sm-8 col-lg-4">
                    <fieldset className="col-lg-12">

                    </fieldset>
                </form>
            </section>
            <Footer />
        </>
    )
}

export default Slider;
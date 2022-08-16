import Siteheader from '/src/components/siteHeader.tsx';
import Footer from '/src/components/footer.tsx';

function Slider() {
    const pages = [];

    return (
        <>
            <Siteheader />
            <section className='pageContainer'>
                <h1>Verb Slider</h1>
                <form className="col-xs-12 col-sm-8 col-lg-4">
                    <fieldset className="col-lg-12">
                        
                    </fieldset>
                </form>
            </section>
            <Footer />
        </>
    )
}

export default Slider;
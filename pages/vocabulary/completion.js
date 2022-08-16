import Siteheader from '/src/components/siteHeader.tsx';
import Footer from '/src/components/footer.tsx';
import Accents from '/src/components/accents.tsx';

function Completion() {

    return (
        <>
            <Siteheader />
            <section className='pageContainer'>
                <h1>Vocabulary Completion</h1>
                <form className="col-xs-12 col-sm-8 col-lg-4">
                    <fieldset className="col-lg-12">

                    </fieldset>
                    <Accents></Accents>
                </form>
            </section>
            <Footer />
        </>
    )
}

export default Completion;
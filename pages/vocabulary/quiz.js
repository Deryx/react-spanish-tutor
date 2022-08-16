import Siteheader from '/src/components/siteHeader.tsx';
import Footer from '/src/components/footer.tsx';
import Radiogroup from '/src/components/radioGroup.tsx';

function Quiz() {

    return (
        <>
            <Siteheader />
            <section className='pageContainer'>
                <h1>Vocabulary Quiz</h1>
                <form id="quiz" className="col-xs-12 col-sm-8 col-lg-4">
                    <fieldset className="col-lg-12">
                        
                    </fieldset>
                </form>
            </section>
            <Footer />
        </>
    )
}

export default Quiz;
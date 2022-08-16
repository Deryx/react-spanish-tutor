import Siteheader from '/src/components/siteHeader.tsx';
import Footer from '/src/components/footer.tsx';
import Dropdown from '/src/components/dropDown.tsx';
import Texinput from '/src/components/textInput.tsx';
import Imageupload from '/src/components/imageUpload.tsx';
import Accents from '/src/components/accents.tsx';

function Input() {
    const categories = [];

    return (
        <>
            <Siteheader />
            <section className='pageContainer'>
                <h1>Vocabulary Input</h1>
                <form id="vocabulary" className="col-xs-12 col-sm-10 col-md-8 col-lg-4">
                    <fieldset class="col-lg-12">
                        <Dropdown id="category" name="category" options={ categories } />
                        <Texinput id="newCategory" name="new category" className="col-lg-12" />
                        <Texinput id="word" name="word" className="col-lg-12" />
                        <Texinput id="translation" name="translation" className="col-lg-12" />
                        <Texinput id="gender" name="gender" className="col-lg-12" />
                        <Imageupload id="image" name="image" />
                        <Texinput id="pronunciation" name="pronunciation" className="col-lg-12" />
                    </fieldset>
                </form>
                <Accents></Accents>
            </section>
            <Footer />
        </>
    )
}

export default Input;
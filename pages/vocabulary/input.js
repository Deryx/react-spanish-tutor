import { PrismaClient } from '@prisma/client';
import Siteheader from '/src/components/siteHeader.tsx';
import Footer from '/src/components/footer.tsx';
import Dropdown from '/src/components/dropDown.tsx';
import Texinput from '/src/components/textInput.tsx';
import Imageupload from '/src/components/imageUpload.tsx';
import Accents from '/src/components/accents.tsx';

const prisma = new PrismaClient;

function Input({ categories }) {
    const categorySelect = [];

    for(const category in categories) {
        categorySelect.push( categories[category].category );
    }

    return (
        <>
            <Siteheader />
            <section className='pageContainer'>
                <h1>Vocabulary Input</h1>
                <form id="vocabulary" className="col-xs-12 col-sm-10 col-md-8 col-lg-4">
                    <fieldset className="col-lg-12">
                        <Dropdown id="category" name="category" options={ categorySelect.sort() } />
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

export async function getServerSideProps() {
    const allCategories = await prisma.categories.findMany();
    return {
        props: {
            categories: allCategories
        }
    };
}

export default Input;
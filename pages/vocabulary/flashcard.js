import { PrismaClient } from '@prisma/client';
import Siteheader from '/src/components/siteHeader.tsx';
import Footer from '/src/components/footer.tsx';
import Dropdown from '/src/components/dropDown.tsx';
import Card from '/src/components/card.tsx';

const prisma = new PrismaClient();

function Flashcard( { categories } ) {
    const headerFront = 'Front';
    const headerBack = 'Back';
    const info = '';
    const categorySelect = [];

    for(const category in categories) {
        categorySelect.push( categories[category].category );
    }

    return (
        <>
            <Siteheader />
            <section className='pageContainer'>
                <h1>Vocabulary Flashcard</h1>
                <form id="vocabularyFlashcard" className="col-xs-12 col-sm-8 col-lg-4">
                    <fieldset className="col-lg-12">
                        <Dropdown id="categorySelect" name="categorySelect" options={ categorySelect.sort() } />
                        {/* <Card header={ headerFront } info={ info } /> */}
                        {/* <Card header={ headerBack } info={ info } /> */}
                    </fieldset>
                </form>
            </section>
            <Footer />
        </>
    )
}

export async function getStaticProps() {
    const allCategories = await prisma.categories.findMany();
    return {
        props: {
            categories: allCategories
        }
    }
}

export default Flashcard;
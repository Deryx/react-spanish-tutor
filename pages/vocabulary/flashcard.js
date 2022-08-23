import { PrismaClient } from '@prisma/client';
import Siteheader from '/src/components/siteHeader.tsx';
import Footer from '/src/components/footer.tsx';
import Dropdown from '/src/components/dropDown.tsx';
import Card from '/src/components/card.tsx';

const prisma = new PrismaClient;

function Flashcard({ dictionary, categories }) {
    const headerFront = 'Front';
    const headerBack = 'Back';
    const info = '';
    const categorySelections = [];
    const quizDictionary = [];

    for(const category of categories) {
        categorySelections.push( 
            {
                id: category.id,
                category: category.category
            }
         );
    }
    categorySelections.unshift({ id: '', category: 'all' });

    for(const entry in dictionary) {
        quizDictionary.push( 
            { 
                word: dictionary.word,
                translation: dictionary.translation,
                category: dictionary.category
            }
         );
    }

    return (
        <>
            <Siteheader />
            <section className='pageContainer'>
                <h1>Vocabulary Flashcard</h1>
                <form id="vocabularyFlashcard" className="col-xs-12 col-sm-8 col-lg-4">
                    <fieldset className="col-lg-12">
                        <dl>
                            <dt><label htmlFor="categorySelect">category: </label></dt>
                            <dd>
                                <select id="categorySelect" name="categorySelect">
                                    { categorySelections.map( ( categorySelection, i ) => 
                                        <option key={ i } value={ categorySelection.id }>{ categorySelection.category }</option>
                                    )}
                                </select>
                            </dd>
                        </dl>
                        <Card header={ headerFront } info={ info } />
                        {/* <Card header={ headerBack } info={ info } /> */}
                    </fieldset>
                </form>
            </section>
            <Footer />
        </>
    )
}

function generateRandomNumbers( arrLength, maxNumber ) {
    const numArray = [];
    let index = 0;

    while( index < arrLength ) {
        let newNumber = Math.floor(( Math.random() * maxNumber ));
        if( numArray.indexOf( newNumber ) === -1 ) {
            numArray.push( newNumber );
            index++;
        }
    }

    return numArray;
}

export async function getServerSideProps() {
    const allVocabulary = await prisma.words.findMany();
    const allCategories = await prisma.categories.findMany();

    return {
        props: {
            dictionary: allVocabulary,
            categories: allCategories
        }
    }
}

export default Flashcard;
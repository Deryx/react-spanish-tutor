import { useState, useEffect } from 'react';
import { PrismaClient } from '@prisma/client';
import Siteheader from '/src/components/siteHeader.tsx';
import Footer from '/src/components/footer.tsx';
import randomNumberGenerator from '../../helper/useRandomNumberGenerator.tsx';

const prisma = new PrismaClient();

function Scramble({ dictionary, categories }) {
    const [questionSet, setQuestionSet] = useState( [] );
    const [question, setQuestion] = useState( 0 );

    const numQuestions = 5;
    const categorySelections = [];
    const scrambleDictionary = dictionary;
    const dictionaryLength = dictionary.length;

    const incrementQuestion = () => {
        if( question <= question ) {
            setQuestion( question + 1 );
        }
    }

    useEffect(() => {
        const words = randomNumberGenerator( numQuestions, dictionaryLength );
        for(let i = 0; i < numQuestions; i++) {
            let current = words[i];
            let currentWord = scrambleDictionary[current].word;
            let set = {};

            let currentArray = currentWord.split( '' );
            let scrambledArray = randomNumberGenerator( currentWord.length, currentWord.length );
            let scrambledWord = scrambledArray.map( element => currentArray[element]);
            set.question = scrambledWord;
            set.answer = currentWord;

            setQuestionSet( current => [...current, set] );
        }
    }, []);

    for(const category of categories) {
        categorySelections.push( 
            {
                id: category.id,
                category: category.category
            }
         );
    }

    categorySelections.sort((a, b) => a.category > b.category ? 1 : -1);
    categorySelections.unshift({ id: '', category: 'all' });

    return (
        <>
            <section className='pageContainer'>
                <h1>Vocabulary Scramble</h1>
                <form id="scramble" className="col-xs-12 col-sm-8 col-lg-4">
                    <fieldset className="col-lg-12">
                        <dl id='categorySelect'>
                            <dt><label htmlFor="category">category: </label></dt>
                            <dd>
                                <select id="category" name="category">
                                    { categorySelections.map( ( categorySelection, i ) => 
                                        <option key={ i } value={ categorySelection.id }>{ categorySelection.category }</option>
                                    )}
                                </select>
                            </dd>
                        </dl>
                        <dl id="questions">
                            <dt>
                                <label htmlFor={ `q${ question }` }>
                                    { questionSet[question] && questionSet[question].question }
                                </label>
                            </dt>
                            {/* <dd>
                                { questionSet[question] && questionSet[question].options.map( option => 
                                    <div>
                                        <input type="radio" id={ `q${ question }` } name={ `q${ question }` } value={ option } />
                                        <label htmlFor={ `q${ question }` }> 
                                            { option }
                                        </label>
                                    </div>
                                )}
                            </dd> */}
                        </dl>
                    </fieldset>
                    <div className='buttons col-lg-12'>
                        <input type="button" id="submitBtn" onClick={ incrementQuestion } value="next" />
                    </div>
                </form>
            </section>
            <Footer />
        </>
    )
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

export default Scramble;
import { useState, useEffect } from 'react';
import { PrismaClient } from '@prisma/client';
import Siteheader from '/src/components/siteHeader.tsx';
import Footer from '/src/components/footer.tsx';
import Accents from '/src/components/accents.tsx';

const prisma = new PrismaClient();

function Completion({ dictionary, categories }) {
    const [questions, setQuestions] = useState( [] );
    const [question, setQuestion] = useState( 0 );

    const quizDictionary = [];
    const dictionaryLength = dictionary.length;
    const numQuestions = 5;

    useEffect( () => {    
        setQuestions( generateRandomNumbers( numQuestions, dictionaryLength ) );
    
        let randomSpot;
        for(let i = 0; i < numQuestions; i++) {
            options.push( generateRandomNumbers( numOptions - 1, dictionaryLength ) );
            randomSpot = generateRandomNumbers( 1, 4 );
            options[i].splice(randomSpot[0], 0, questions[i]);
        }
    }, []);

    return (
        <>
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

export default Completion;
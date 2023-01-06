import { useState, useEffect, useRef, useImperativeHandle, FC } from 'react';
import { PrismaClient } from '@prisma/client';
import Dropdown from '../../src/components/dropDown';
import Card from '../../src/components/card';
import randomNumberGenerator from '../../helper/useRandomNumberGenerator';

const prisma = new PrismaClient;

interface FlashcardProps {
    dictionary: any[];
    categories: any[];
}

const Flashcard: FC<FlashcardProps> = ({ dictionary, categories }) => {
    const categoriesRef = useRef(null);
    const cardRef = useRef(null);
    const [card, setCard] = useState(0);
    const [category, setCategory] = useState();
    // const card = cardRef.current && cardRef.current;

    const headerFront = 'Front';
    const headerBack = 'Back';
    const info = '';
    const categorySelections = [];
    let flashcardDictionary;

    const incrementQuestion = () => {
        if(card <= card) {
            setCard(card + 1);
        }
    }

    const handleCategoryChange = () => {
        setCategory( parseInt( event.target.value ));
        categoriesRef.current.style.display = "none";
    }

    const flipCard = () => {
        cardRef.current.classList.toggle( 'flipCard' );
    }

    const handleClick = () => {
        cardRef.current.addEventListener('click', flipCard);

        return () => {
            cardRef.current.removeEventListener('click', flipCard);
        }
    }

    const createCategorySelect = () => {
        for(const category of categories) {
            categorySelections.push( 
                {
                    id: category.id,
                    category: category.category
                }
             );
        }
    
        categorySelections.sort((a, b) => a.category > b.category ? 1 : -1);
        categorySelections.unshift({ id: '0', category: 'all' });
        categorySelections.unshift({ id: '', category: '' });
    }

    useEffect( () => {
        flashcardDictionary = category != '0' ? [...dictionary.filter( word => word.category === category )] : dictionary;
        const dictionaryLength = flashcardDictionary.length;
        const words = randomNumberGenerator( dictionaryLength, dictionaryLength );
    }, [category] );

    createCategorySelect();

    return (
        <>
            <section className='pageContainer'>
                <h1>Vocabulary Flashcard</h1>
                <form id="vocabularyFlashcard" className="col-xs-12 col-sm-8 col-lg-4">
                    <fieldset className="col-lg-12">
                        <dl ref={ categoriesRef } id='categorySelect'>
                            <dt><label htmlFor="category">category: </label></dt>
                            <dd>
                                <select id="category" name="category" onChange={ handleCategoryChange }>
                                    { categorySelections.map( ( categorySelection ) => 
                                        <option key={ categorySelection.category } value={ categorySelection.id }>{ categorySelection.category }</option>
                                    )}
                                </select>
                            </dd>
                        </dl> 
                        <Card ref={ cardRef } frontHeader={ headerFront } backHeader={ headerBack } frontInfo={ info } backInfo={ info } />
                    </fieldset>
                    <div className='buttons col-lg-12'>
                        <input type="button" id="flipBtn" onClick={ handleClick } value="flip card" />
                        <input type="button" id="nextBtn" onClick={ incrementQuestion } value="next" />
                    </div>
                </form>
            </section>
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

export default Flashcard;
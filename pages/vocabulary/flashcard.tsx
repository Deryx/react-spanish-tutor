import { useState, useEffect, useRef, useImperativeHandle, FC } from 'react';
import { PrismaClient } from '@prisma/client';
import Layout from '../../src/components/layout';
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
    const [cards, setCards] = useState([]);
    const [category, setCategory] = useState(null);

    const headerFront = 'Front';
    const headerBack = 'Back';
    const info = '';
    const categorySelections = [];
    let flashcardDictionary;
    let toggle: boolean = false;

    const incrementCard = () => {
        if(card <= cards.length) {
            setCard(card + 1);
        }
    }

    const handleCategoryChange = (e) => {
        categoriesRef.current.value = parseInt(e.target.value);
        setCategory(categoriesRef.current.value);
    }

    const handleNext = (e) => {
        e.preventDefault();
        incrementCard();
    }

    const handleClick = (e) => {
        e.preventDefault();
        toggle = !toggle;
        if(toggle) {
            cardRef.current.classList.add('flipCard');
        } else {
            cardRef.current.classList.remove('flipCard');
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
        categorySelections.unshift({ id: '', category: 'SELECT A CATEGORY' });
    }

    useEffect(() => {
        flashcardDictionary = category != '0' ? [...dictionary.filter( word => word.category === category )] : dictionary;
        const dictionaryLength = flashcardDictionary.length;
        const words = randomNumberGenerator(dictionaryLength, dictionaryLength);
        setCards([]);
        for(let i = 0; i < words.length; i++) {
            setCards(prev => [...prev, flashcardDictionary[i]]);
        }
    }, [category]);

    createCategorySelect();

    return (
        <Layout>
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
                        <Card ref={ cardRef } cardType={'vocabulary'} word={ cards[card] && cards[card].word } pronunciation={ cards[card] && cards[card].pronunciation } translation={ cards[card] && cards[card].translation }  image={ cards[card] && cards[card].image.split('/')[2] } />
                    </fieldset>
                    <div className='buttons col-lg-12'>
                        <input type="button" id="flipBtn" onClick={ handleClick } value="flip card" />
                        <input type="button" id="nextBtn" onClick={ handleNext } value="next" />
                    </div>
                </form>
            </section>
        </Layout>
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
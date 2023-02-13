import { useState, useRef, useEffect, FC } from 'react';
import { PrismaClient } from '@prisma/client';
import Footer from '../../src/components/footer';
import Texinput from '../../src/components/textInput';
import Imageupload from '../../src/components/imageUpload';
import Accents from '../../src/components/accents';

const prisma = new PrismaClient;

interface InputProps {
    categories: any[];
}

const Input: FC<InputProps> = ({ categories }) => {
    const [accent, setAccent] = useState(null);
    const formRef = useRef(null);
    const categoryRef = useRef(null);
    const wordRef = useRef(null);
    const translationRef = useRef(null);
    const genderRef = useRef(null);
    const imageRef = useRef(null);
    const pronunciationRef = useRef(null);
    let currentTextbox;

    const [formValues, setFormValues] = useState({
        category: null,
        word: '',
        translation: '',
        gender: '',
        image: '',
        pronunciation: ''
    });
    const categorySelections = [];

    const addVocabulary = async (vocabulary) => {
        try {
            const body = vocabulary;
            await fetch(`/api/add-vocabulary`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body),
            });
        } catch (error) {
            console.error(error);
        }
    }

    const handleOtherSelection = (e) => {
        formValues.category = parseInt( e.target.value, 10 );
    }

    const handleAccentClick = (e) => {
        e.preventDefault();
        setAccent(e.target.value);
        const currentPosition = wordRef.current.selectionStart;
        let answer = wordRef.current.value;
        wordRef.current.value = answer.slice(0, currentPosition) + e.target.value + answer.slice(currentPosition);
        wordRef.current.focus();
        wordRef.current.selectionStart = currentPosition + 1;
        wordRef.current.selectionEnd = currentPosition + 1;
    }

    const handleInputChange = (e) => {
        const currentBox = e.target.id;
    }

    const createCategorySelect = () => {
        const numCategories = categories.length + 2;
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
        categorySelections.push({ id: `${numCategories}`, category: 'other' });
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();

        const currentImage = imageRef.current.value && [imageRef.current.value.match('/fakepath\\(.*)/'), 'assets/images/'].join('');

        if(categoryRef.current.value && wordRef.current.value && translationRef.current.value && currentImage, pronunciationRef.current.value) {
            const newVocabulary = {
                category: categoryRef.current.value,
                word: wordRef.current.value,
                translation: translationRef.current.value,
                gender: genderRef.current.value,
                image: imageRef.current.value,
                pronunciation: pronunciationRef.current
            }
            addVocabulary(newVocabulary);
        }
    }

    createCategorySelect();

    return (
        <>
            <section className='pageContainer'>
                <h1>Vocabulary Input</h1>
                <form ref={ formRef } id="vocabulary" className="col-xs-12 col-sm-10 col-md-8 col-lg-5">
                    <fieldset className="col-lg-12">
                        <dl>
                            <dt><label htmlFor="categorySelect">category: </label></dt>
                            <dd>
                                <select ref={ categoryRef } id="category" name="category" onChange={ handleOtherSelection }>
                                    { categorySelections.map( ( categorySelection, i ) => 
                                        <option key={ i } value={ categorySelection.id }>{ categorySelection.category }</option>
                                    )}
                                </select>
                            </dd>
                        </dl>
                        { formValues.category === '0' && <Texinput id="newCategory" name="new category" className="col-lg-12" /> }
                        <Texinput ref={ wordRef } id="word" name="word" onFocus={ currentTextbox = wordRef } onChange={ handleInputChange } className="col-lg-12" />
                        <Texinput ref={ translationRef } id="translation" name="translation" onChange={ handleInputChange } className="col-lg-12" />
                        <Texinput ref={ genderRef } id="gender" name="gender" onChange={ handleInputChange } className="col-lg-12" />
                        <Imageupload ref={ imageRef } id="image" name="image" />
                        <Texinput ref={ pronunciationRef } id="pronunciation" name="pronunciation" onChange={ handleInputChange } className="col-lg-12" />
                    </fieldset>
                    <div className='buttons col-lg-12'>
                        <input type="button" id="submitBtn" onClick={handleSubmitClick} value="add word" />
                    </div>
                </form>
                <Accents handleAccentClick={ handleAccentClick } />
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
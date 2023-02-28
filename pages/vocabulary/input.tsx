import { useState, useRef, useEffect, FC } from 'react';
import Router from "../../node_modules/next/router";
import { PrismaClient } from '@prisma/client';
import Layout from '../../src/components/layout';
import Footer from '../../src/components/footer';
import Texinput from '../../src/components/textInput';
import Imageupload from '../../src/components/imageUpload';
import Accents from '../../src/components/accents';

const prisma = new PrismaClient;

interface InputProps {
    dictionary: any[];
    categories: any[];
}

const Input: FC<InputProps> = ({ dictionary, categories }) => {
    const [accent, setAccent] = useState(null);
    const [category, setCategory] = useState(null);
    const [newCategory, setNewCategory] = useState(null);
    const formRef = useRef(null);
    const categoryRef = useRef(null);
    const newCategoryRef = useRef(null);
    const wordRef = useRef(null);
    const translationRef = useRef(null);
    const genderRef = useRef(null);
    const imageRef = useRef(null);
    const pronunciationRef = useRef(null);
    let currentTextbox;

    const [formValues, setFormValues] = useState({
        category: null,
        word: null,
        translation: null,
        gender: null,
        image: null,
        pronunciation: ''
    });

    let newCategoryDisabled = category === null || category !== '0' || category === -1;

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

    const addCategory = async (category: string) => {
        try {
            const body = { category: category };
            await fetch(`/api/add-category`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body),
            });
        } catch (error) {
            console.error(error);
        }
    }

    const getCategoryId = async (category: string) => {
        try {
            const id = await fetch(`/api/retrieve-categoryId?category=${category}`, 
                {
                    method: 'GET'
                },
            );
            return id.json();
        } catch (error) {
            console.error(error);
        }
    }

    const getCategories = async () => {
        try {
            const categories = await fetch(`/api/retrieve-categories`).then(response => response.json());
            return categories;
        } catch (error) {
            console.error(error);
        }
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
        categorySelections.unshift({ id: '-1', category: 'all' });
        categorySelections.unshift({ id: '', category: 'SELECT A CATEGORY' });
        categorySelections.push({ id: '0', category: 'other' });
    }

    const handleNewCategory = async (e) => {
        e.preventDefault();

        const inputCategory = e.target.value;
        const hasCategory = categories.find(category => category.category === inputCategory);
        if(hasCategory === undefined) {
            await addCategory(inputCategory.toLowerCase());
            const newestCategory = await getCategoryId(inputCategory.toLowerCase());
            setCategory(newestCategory[0].id);
        }
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();

        const formComplete = category && wordRef.current.value && translationRef.current.value && pronunciationRef.current.value;
        const hasWord = wordRef.current && dictionary.find(entry => entry.word === wordRef.current.value);

        if(formComplete && hasWord === undefined) {
            const imageFile = imageRef.current ? imageRef.current.value.replace("C:\\fakepath\\", "/images/") : '/images/blank.png';
            const newVocabulary = {
                category: category,
                word: wordRef.current.value,
                translation: translationRef.current.value,
                gender: genderRef.current.value,
                image: imageFile,
                pronunciation: pronunciationRef.current.value
            };
            addVocabulary(newVocabulary);
            Router.reload();
        }
    }

    useEffect(() => {
        if(category === '0') {
            newCategoryRef.current.focus();
        }
    }, [category]);

    createCategorySelect();

    return (
        <Layout>
            <section className='pageContainer'>
                <h1>Vocabulary Input</h1>
                <form ref={ formRef } id="vocabulary" className="col-xs-12 col-sm-10 col-md-8 col-lg-4">
                    <fieldset className="col-lg-12">
                        <dl>
                            <dt><label htmlFor="categorySelect">category: </label></dt>
                            <dd>
                                <select ref={ categoryRef } id="categorySelect" name="categorySelect" onChange={ (e) => setCategory(parseInt(e.target.value)) }>
                                    { categorySelections.map( ( categorySelection, i ) => 
                                        <option key={ i } value={ categorySelection.id }>{ categorySelection.category }</option>
                                    )}
                                </select>
                            </dd>
                        </dl>
                        <Texinput ref={ newCategoryRef } id="newCategory" name="new category" disabled={ newCategoryDisabled } onChangeEvent={ handleNewCategory } inputClass="col-lg-12" />
                        <Texinput ref={ wordRef } id="word" name="word" onFocusEvent={ (e) => handleInputChange(e) } inputClass="col-lg-12" />
                        <Texinput ref={ translationRef } id="translation" name="translation" inputClass="col-lg-12" />
                        <Texinput ref={ genderRef } id="gender" name="gender" inputClass="col-lg-12" />
                        <Imageupload ref={ imageRef } id="image" name="image" />
                        <Texinput ref={ pronunciationRef } id="pronunciation" name="pronunciation" inputClass="col-lg-12" />
                    </fieldset>
                    <div className='buttons col-lg-12'>
                        <input type="button" id="submitBtn" onClick={handleSubmitClick} value="add word" />
                    </div>
                </form>
                <Accents handleAccentClick={ handleAccentClick } />
            </section>
            <Footer />
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
    };
}

export default Input;
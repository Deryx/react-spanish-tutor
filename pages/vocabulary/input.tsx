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
    const [word, setWord] = useState(null);
    const [translation, setTranslation] = useState(null);
    const [pronunciation, setPronunciation] = useState(null);
    const [gender, setGender] = useState(null);
    const [image, setImage] = useState(null);
    const wordRef = useRef(null);
    const newCategoryRef = useRef(null);
    const newCategoryDisabled = category === null || category !== 0 || category === -1;
    let currentTextbox;

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

        const formComplete = category && word && translation && pronunciation;
        const hasWord = word && dictionary.find(entry => entry.word === word);

        if(formComplete && hasWord === undefined) {
            const imageFile = image ? image.replace("C:\\fakepath\\", "/images/") : '/images/blank.png';
            const newVocabulary = {
                category: category,
                word: word,
                translation: translation,
                gender: gender,
                image: imageFile,
                pronunciation: pronunciation
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
                <form id="vocabulary" className="col-xs-12 col-sm-10 col-md-8 col-lg-4">
                    <fieldset className="col-lg-12">
                        <dl>
                            <dt><label htmlFor="categorySelect">category: </label></dt>
                            <dd>
                                <select id="categorySelect" name="categorySelect" onChange={ (e) => setCategory(parseInt(e.target.value)) }>
                                    { categorySelections.map( ( categorySelection, i ) => 
                                        <option key={ i } value={ categorySelection.id }>{ categorySelection.category }</option>
                                    )}
                                </select>
                            </dd>
                        </dl>
                        <Texinput ref={ newCategoryRef } id="newCategory" name="new category" disabled={ newCategoryDisabled } onChangeEvent={ handleNewCategory } inputClass="col-lg-12" />
                        <Texinput ref={ wordRef } id="word" name="word" onFocusEvent={ (e) => handleInputChange(e) } onChangeEvent={ (e) => setWord(e.target.value) } inputClass="col-lg-12" />
                        <Texinput id="translation" name="translation" onChangeEvent={ (e) => setTranslation(e.target.value) } inputClass="col-lg-12" />
                        <Texinput id="gender" name="gender" onChangeEvent={ (e) => setGender(e.target.value) } inputClass="col-lg-12" />
                        <Imageupload id="image" onChangeEvent={ (e) => setImage(e.target.value) } name="image" />
                        <Texinput id="pronunciation" name="pronunciation" onChangeEvent={ (e) => setPronunciation(e.target.value) } inputClass="col-lg-12" />
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
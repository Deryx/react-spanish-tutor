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
    const wordRef = useRef(null);
    const translationRef = useRef(null);
    const genderRef = useRef(null);
    const pronunciationRef = useRef(null);
    let currentTextbox;

    const [formValues, setFormValues] = useState({
        category: '',
        word: '',
        translation: '',
        gender: '',
        image: '',
        pronunciation: ''
    });
    const categorySelections = [];

    const handleOtherSelection = (e) => {
        setFormValues({category: e.target.value });
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

    createCategorySelect();

    return (
        <>
            <section className='pageContainer'>
                <h1>Vocabulary Input</h1>
                <form id="vocabulary" className="col-xs-12 col-sm-10 col-md-8 col-lg-5">
                    <fieldset className="col-lg-12">
                        <dl>
                            <dt><label htmlFor="categorySelect">category: </label></dt>
                            <dd>
                                <select id="category" name="category" onChange={ handleOtherSelection }>
                                    { categorySelections.map( ( categorySelection, i ) => 
                                        <option key={ i } value={ categorySelection.id }>{ categorySelection.category }</option>
                                    )}
                                </select>
                            </dd>
                        </dl>
                        { formValues.category === '0' && <Texinput id="newCategory" name="new category" className="col-lg-12" /> }
                        <Texinput ref={ wordRef } id="word" name="word" onFocus={ currentTextbox = wordRef } onChange={ handleInputChange } className="col-lg-12" />
                        <Texinput id="translation" name="translation" onChange={ handleInputChange } className="col-lg-12" />
                        <Texinput id="gender" name="gender" onChange={ handleInputChange } className="col-lg-12" />
                        <Imageupload id="image" name="image" />
                        <Texinput id="pronunciation" name="pronunciation" onChange={ handleInputChange } className="col-lg-12" />
                    </fieldset>
                    <div className='buttons col-lg-12'>
                        <input type="button" id="submitBtn" value="add word" />
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
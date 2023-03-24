import { useState, useEffect, useRef, FC } from 'react';
import { PrismaClient } from '@prisma/client';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Layout from '../../src/components/layout';
import Modal from '../../src/components/modal';
import SimpleReport from '../../src/components/vocabulary/simple-report';
import randomNumberGenerator from '../../helper/useRandomNumberGenerator';

const prisma = new PrismaClient();

interface ScrambleProps {
    dictionary: any[];
    categories: any[];
}

const Scramble: FC<ScrambleProps> = ({ dictionary, categories }) => {
    const numQuestionsRef = useRef(null);
    const categoriesRef = useRef(null);
    const answerRef = useRef(null);
    const [numQuestions, setNumQuestions] = useState(0);
    const [category, setCategory] = useState(0);
    const [questionSet, setQuestionSet] = useState( [] );
    const [question, setQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState( [] );
    const [showModal, setShowModal] = useState( false );
    const reportTitle = "Vocabulary Scramble Report";

    const categorySelections = [];
    let scrambleDictionary = [];

    const incrementQuestion = () => {
        if( question < numQuestions ) {
            setQuestion( question + 1 );
        } 
        
        question === (numQuestions - 1) && setShowModal( showModal => showModal = !showModal );
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

    const handleNumQuestionsChange = (e) => {
        setNumQuestions( parseInt(e.target.value) );
        numQuestionsRef.current.style.display = "none";
    }

    const handleCategoryChange = (e) => {
        setCategory( parseInt(e.target.value) );
        categoriesRef.current.style.display = "none";
    }

    const handleOnDragComplete = (result) => {
        if (!result.destination) return;
      
        let items = Array.from(questionSet[question].scrambledWord);
        console.log(items);
        //Changing the position of Array element
        let removedItem = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, removedItem);
      
        //Updating the list
        questionSet[question].scrambledWord = items;
      };

    const handleSubmitClick = () => {
        const currentAnswer = answerRef.current.querySelectorAll( 'div' );
        const answer = [];
        for( const div of currentAnswer ) {
            answer.push( div.innerText );
        }
        setUserAnswers( prev => [...prev, answer.join('')] );
        incrementQuestion();
    }

    useEffect(() => {
        scrambleDictionary = [...dictionary.filter( word => word.category === category )];
        const dictionaryLength = scrambleDictionary.length;
        const words = randomNumberGenerator( numQuestions, dictionaryLength );
        for(let i = 0; i < numQuestions; i++) {
            let current = words[i];
            let currentWord = scrambleDictionary[current].word;
            let currentTranslation = scrambleDictionary[current].translation;
            let set = {
                question: '',
                scrambledWord: [],
                answer: ''
            };

            let currentArray = currentWord.split( '' );
            let scrambledArray = randomNumberGenerator( currentWord.length, currentWord.length );
            let scrambledWord = scrambledArray.map( element => currentArray[element] );
            set.question = currentTranslation;
            set.scrambledWord = scrambledWord;
            set.answer = currentWord;

            setQuestionSet( current => [...current, set] );
        }
    }, [category]);

    createCategorySelect();

    return (
        <Layout>
            <section className='pageContainer'>
                { showModal === true ? 
                    <>
                        <Modal>
                            <SimpleReport reportTitle={ reportTitle } questionSet={ questionSet } userAnswers={ userAnswers } />
                        </Modal>
                    </>
                    : null 
                }
                <h1>Vocabulary Scramble</h1>
                <form id="scramble" className="col-xs-12 col-sm-8 col-lg-4">
                    <fieldset className="col-lg-12">
                        <dl ref={ numQuestionsRef } id='numQuestionsSelect'>
                            <dt><label htmlFor='numQuestions'>number questions: </label></dt>
                            <dd>
                                <select id="numQuestions" name="numQuestions" onChange={ handleNumQuestionsChange }>
                                    <option key=""></option>
                                    <option key="numQuestions5" value="5">5</option>
                                    <option key="numQuestions10" value="10">10</option>
                                    <option key="numQuestions15" value="15">15</option>
                                    <option key="numQuestions20" value="20">20</option>
                                </select>
                            </dd>
                        </dl>
                        { numQuestions ? 
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
                        : null }
                        { questionSet[question] ? 
                            <dl ref={answerRef} id="questions">                            
                                <dt>
                                    <h2>[ { questionSet[question].question } ]</h2>
                                </dt>
                                <DragDropContext onDragEnd={handleOnDragComplete}>
                                    <Droppable droppableId='words' direction="horizontal">
                                        {(provided, snapshot) => (
                                            <dd {...provided.droppableProps} ref={provided.innerRef}>
                                                {questionSet[question].scrambledWord.map( ( letter, index ) =>
                                                    <Draggable key={`letter${index}`} draggableId={`letter${index}`} index={index}>
                                                        {(provided) => ( 
                                                            <div className='draggable' id={`letter${index}`} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                                { letter }
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                )}
                                                {provided.placeholder}
                                            </dd>
                                        )}
                                    </Droppable>
                                </DragDropContext>
                            </dl>
                        : null }
                    </fieldset>
                    <div className='buttons col-lg-12'>
                        { questionSet[question] ? <input type="button" id="submitBtn" onClick={ handleSubmitClick } value="submit" /> : null }
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

export default Scramble;
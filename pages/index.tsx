import React, { useEffect, useState, useRef } from 'react';
import Layout from '../src/components/layout';
import Footer from "../src/components/footer";
import Image from '../node_modules/next/image';
import Link from '../node_modules/next/link';
import SlideShow from '../src/components/slideShow';
import ContentCard from '../src/components/contentCard';
import { clearInterval } from 'timers';

const slideData = [
    {
        image: '/images/home/Flag-Argentina.webp',
        caption: 'Argentina'
    },
    {
        image: '/images/home/Flag-Bolivia.webp',
        caption: 'Bolivia'
    },
    {
        image: '/images/home/Flag-Chile.webp',
        caption: 'Chile'
    },
    {
        image: '/images/home/Flag-Colombia.webp',
        caption: 'Colombia'
    },
    {
        image: '/images/home/Flag-Costa-Rica.webp',
        caption: 'Costa Rica'
    },
    {
        image: '/images/home/Flag-Dominican-Republic.webp',
        caption: 'Dominican Republic'
    },
    {
        image: '/images/home/Flag-Ecuador.webp',
        caption: 'Ecuador'
    },
    {
        image: '/images/home/Flag-El-Salvador.webp',
        caption: 'El Salvador'
    },
    {
        image: '/images/home/Flag-Equatorial-Guinea.webp',
        caption: 'Equatorial Guinea'
    },
    {
        image: '/images/home/Flag-Guatemala.webp',
        caption: 'Guatemala'
    },
    {
        image: '/images/home/Flag-Honduras.webp',
        caption: 'Honduras'
    },
    {
        image: '/images/home/Flag-Mexico.webp',
        caption: 'Mexico'
    },
    {
        image: '/images/home/Flag-Nicaragua.webp',
        caption: 'Nicaragua'
    },
    {
        image: '/images/home/Flag-Panama.webp',
        caption: 'Panama'
    },
    {
        image: '/images/home/Flag-Paraguay.webp',
        caption: 'Paraguay'
    },
    {
        image: '/images/home/Flag-Peru.webp',
        caption: 'Peru'
    },
    {
        image: '/images/home/Flag-Spain.webp',
        caption: 'Spain'
    },
    {
        image: '/images/home/Flag-Uruguay.webp',
        caption: 'Uruguay'
    },
    {
        image: '/images/home/Flag-Venezuela.webp',
        caption: 'Venezuela'
    }
];

const Index = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [slides, setSlides] = useState(slideData);
    const delay = 2000;
    
    return (
        <Layout>
            <div id="home">
                <div id="intro">
                    <div className='spanish-map'>
                        <Image 
                            className='landingBackground'
                            src="/images/home/296-2965054_map-of-spain-png-transparent-png.png"
                            objectFit='scale-down'
                            objectPosition='left'
                            layout='fill'
                            priority={true}
                            alt="Map of Spain with Provinces"
                        />
                    </div>
                    <div className='mainContent'>
                        <section className='tag-line'>
                            <h1>Learn Spanish!</h1>
                            <h2>Speak Spanish in all of the following countries that have Spanish as their primary language: </h2>
                        </section>
                        <div className="slideShow">
                            <div className='slideShowSlider' style={{transform: `translate3d(${-slideNumber * 100}%, 0, 0)`}}>
                                <SlideShow slidesData={slideData} delay={ delay } />
                            </div>
                        </div>
                    </div>
                    <div className='scroll-link'>
                        <Link href='#verbContent' scroll={ false }>
                            <div className='circle'>
                                <div className='triangle'></div>
                            </div>
                        </Link>
                    </div>
                </div>
                <section id="verbContent">
                    <h2>[ Verbs ]</h2>
                    <p>Learn approximately 100 of the most commonly used Spanish verbs by studying flashcards and testing your study skills using the conjugator and playing the slider. The verbs are in the indicative form with present, preterite, imperfect, conditional, and future tenses.</p>
                    <div className='row'>
                        <ContentCard image='/images/home/verb-flashcard.png' heading='flash card' description="Before delving into the verb games — the conjugator and slider — study the conjugations of approximately 100 of the most used spanish verbs by using the verb flashcards." width='col-lg-3' />
                        <ContentCard image='/images/home/verb-conjugator.png' heading='conjugator' description="Try the verb conjugator. Your knowledge of the present, preterite, imperfect, conditional, and future tenses will be tested." width='col-lg-3' />
                        <ContentCard image='/images/home/verb-slider.png' heading='slider' description="Try the verb slider. The conjugations and their translations are already on the page. You only have to slide around the conjugations to match with the pronouns." width='col-lg-3' />
                    </div>
                </section>
                <section id="vocabularyContent">
                    <h2>[ Vocabulary ]</h2>
                    <p>This site has over 700 words (and counting!) to start your (and my) Spanish-learning journey! Start by studying the flashcards. You can choose to study a category or all of the vocabulary. After you are confident in your in new vocabulary, you can test yourself by using the completion, fill-in, quiz, scramble, and slider exercises. Each exercise allows you to choose a category or all vocabulary and the number of questions (5, 10, 15, and 20) you want. After you're done, you are presented with a report detailing the percentage correct and correct answers and your answers.</p>
                    <div className='row'>
                        <ContentCard image='/images/home/vocabulary-flashcard.png' heading='flash card' description='Before trying your hand at the vocabulary games — word completion, word fill-in, word quiz, word scramble, and slider — study the spanish to english translations of over 700 words with vocabulary flashcards.' width='col-lg-3' />
                        <ContentCard image='/images/home/vocabulary-completion.png' heading='completion' description='Test your learning by playing vocabulary completion. You are presented with the english translation above and the spanish equivalent below, minus at least half of the letters. Fill in the missing letters, including letters with accents.' width='col-lg-3' />
                        <ContentCard image='/images/home/vocabulary-fillin.png' heading='fill in' description="So, you've tried vocabulary completion but, find it too easy because some of the letters are already provided? Then try vocabulary fill-in! Just remember, accented letters count toward the correct answer too!" width='col-lg-3' />
                    </div>
                    <div className='row'>
                        <ContentCard image='/images/home/vocabulary-quiz.png' heading='quiz' description="Studying the vocabulary flashcards is done and you think you know a few things. So, maybe you want to test yourself with the customary vocabulary quiz. You are presented with the spanish word and six possible translations." width='col-lg-3' />
                        <ContentCard image='/images/home/vocabulary-scramble.png' heading='scramble' description="Test your spanish mastery while playing the vocabulary scramble. All the letters of the spanish word, including the blanks, are presented on the screen. Your job, of course, is to put each of them in their proper place." width='col-lg-3' />
                        <ContentCard image='/images/home/vocabulary-slider.png' heading='slider' description="Try the sliding of the vocabulary slider. The immobile english translation tiles are on the left side. The sliding spanish words are on the left. Slide the spanish words up and down to match their corresponding english translation." width='col-lg-3' />
                    </div>
                </section>
                <footer>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <Image src='/images/home/spanish-tutor-logo.png' width='250' height='50' />
                            <p>&#169;Deryx E. Scott</p>
                        </div>
                        <div className='col-lg-3'>
                            <h4>features</h4>
                            <div className='col-lg-6'>
                                <h5>verbs</h5>
                                <ul>
                                    <li>
                                        <Link href='/verbs/tenses'>
                                            <a>about tenses</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/verbs/flashcards'>
                                            <a>flash cards</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/verbs/conjugator'>
                                            <a>conjugator</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/verbs/slider'>
                                            <a>slider</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-lg-6'>
                                <h5>vocabulary</h5>
                                <ul>
                                    <li>
                                        <Link href='/vocabulary/flashcard'>
                                            <a>flash cards</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/vocabulary/completion'>
                                            <a>completion</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/vocabulary/fill-in'>
                                            <a>fill-in</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/vocabulary/quiz'>
                                            <a>quiz</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/vocabulary/scramble'>
                                            <a>scramble</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/vocabulary/slider'>
                                            <a>slider</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-3'>

                        </div>
                    </div>
                </footer>
            </div>
        </Layout>
    )
}

export default Index;
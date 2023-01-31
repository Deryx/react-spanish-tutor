import React, { useEffect, useState, useRef } from 'react';
import Footer from "../src/components/footer";
import Image from 'next/image';
import SlideShow from '../src/components/slideShow';
import { clearInterval } from 'timers';

const Index = () => {
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
    const [slide, setSlide] = useState(0);
    const slideShowRef = useRef(null);

    const incrementSlide = () => {
        if(slide < slideData.length) {
            setSlide(slide + 1);
        }
    }

    useEffect(() => {
        let intervalId;
        const slides = slideShowRef.current.querySelectorAll('div');
        const changeSlide = () => {
            if(!intervalId) {
                intervalId = setInterval(playSlides, 2000);
            }
        }

        const stopShow = () => {
            clearInterval(intervalId);

            intervalId = null;
        }

        const playSlides = () => {
            let previous;
            slides.forEach(slide => slide.classList.add('not-active'));
            slides[slide] && slides[slide].classList.remove('not-active');
            slides[slide] && slides[slide].classList.add('active');
            incrementSlide();
        }

        if(slide < slideData.length) {
            changeSlide();
        } else {
            setSlide(0);
        }
    }, [slide]);
    

    return (
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
                        <h2>Use it in all of these countries that have Spanish as their primary language: </h2>
                    </section>
                    <div ref={ slideShowRef } className="slideShow">
                        <SlideShow slideSet={ slideData } />
                    </div>
                </div>
            </div>
            <section id="verbContent">
                <h2>Verbs</h2>
                <p>Learn approximately 100 of the most commonly used Spanish verbs by studying flashcards and testing your study skills using the conjugator and playing the slider. The verbs are in the indicative form with present, preterite, imperfect, conditional, and future tenses.</p>
            </section>
            <section id="vocabularyContent">
                <h2>Vocabulary</h2>
                <p>This site has over 700 words (and counting!) to start your (and my) Spanish-learning journey! Start by studying the flashcards. You can choose to study a category or all of the vocabulary. After you are confident in your in new vocabulary, you can test yourself by using the completion, fill-in, quiz, scramble, and slider exercises. Each exercise allows you to choose a category or all vocabulary and the number of questions (5, 10, 15, and 20) you want. After you're done, you are presented with a report detailing the percentage correct and correct answers and your answers.</p>
            </section>
            <footer>

            </footer>
        </div>
    )
}

export default Index;
import React, { useEffect, useState, useRef } from 'react';
// import { setTimeout } from 'timers/promises';
import Slide from '../components/slide';

interface SlideShowProps {
    slidesData: any;
    delay: number;
}

const SlideShow = ({ slidesData, delay }: SlideShowProps ) => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [slides, setSlides] = useState( slidesData );
    const timeoutRef = useRef(null);

    const resetTimeout = () => {
        if(timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    const changeSlide: any = () => {
        setSlideNumber(slideNumber + 1);
    }

    useEffect(() => {
        resetTimeout();
        if(slideNumber < slides.length) {
            timeoutRef.current = setTimeout(changeSlide, delay);
        } else {
            setSlideNumber(0);
        }
    }, [slideNumber]);

    return (
        <div className='slideShowSlider'>
            { slides[slideNumber] ? <Slide image={slides[slideNumber].image} imageWidth={400} imageHeight={250} caption={slides[slideNumber].caption} /> : null }
        </div>
    );
}

export default SlideShow;
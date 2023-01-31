import React, { useEffect, useState } from 'react';
import Image from '../../node_modules/next/image';

interface SlideShowProps {
    slideSet: any;
}


const SlideShow = ({ slideSet }: SlideShowProps) => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [slides, setSlides] = useState(slideSet);

    const incrementSlideNumber = () => {
        setSlideNumber(slideNumber + 1);
    }

    return (
        slides && slides.map( (slide, index) => 
            <div key={ `slide-${index}`} className='not-active'>
                <Image key={ `image-${index}` } src={ slide.image } width={400} height={250} objectPosition='center' alt={ slide.caption } />
                <p key={ `caption-${index}` }>{ slide.caption }</p>
            </div>    
        )
    )
}

export default SlideShow;
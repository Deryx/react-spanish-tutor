import React, { useState } from 'react';
import Image from '../../node_modules/next/image';

interface SlideProps {
    image: string;
    imageWidth: number;
    imageHeight: number;
    caption: string;
}


const Slide = ({ image, imageWidth, imageHeight, caption }: SlideProps) => {

    return (
        <div>
            <Image src={ image } width={ imageWidth } height={ imageHeight } objectPosition='center' alt={ caption } />
            <p >{ caption }</p>
        </div>    
    )
}

export default Slide;
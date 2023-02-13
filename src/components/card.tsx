import { forwardRef, FC } from 'react';
import Image from '../../node_modules/next/image';
import React from 'react';

export type CardType = 'vocabulary' | 'verb';

interface CardProps {
    cardType: 'vocabulary';
    word?: String;
    pronunciation?: String;
    image?: String;
    infinitive?: String;
    translation?: String;
    tense?: String;
    conjugations?: any;
}

const Card = forwardRef((props: CardProps, _ref) => {
    const {cardType, word, pronunciation, translation, image, infinitive, tense, conjugations} = props;
    
    return (
        <div className='mainContainer'>
            <div ref={_ref} className="card">
                { cardType == "vocabulary" ? 
                    <>
                        <div className='front'>
                            <h3>[ { word } ]</h3>
                            <h4 className="info">
                                { pronunciation }
                            </h4>
                        </div>
                        <div className='back'>
                            <h3>{ translation }</h3>
                            { image && !(image === 'blank.png') ?
                                <div className="image">
                                    <Image src={`/images/${image}`} width={150} height={150} />
                                </div> : null
                            }
                        </div>
                    </> : 
                    <>
                        <div className='front'>
                            <h3>[ { infinitive } ]</h3>
                            <h4>[ {translation} ]</h4>
                            <h4>{ pronunciation }</h4>
                        </div>
                        <div className='back'>
                            <h3>[ {tense} ] tense</h3>
                            { conjugations && Object.entries(conjugations).map(([key, value]) => <dl className='verb'><dt>{key}</dt><dd>{value}</dd></dl>)}   
                        </div>
                    </>
                }
            </div>
        </div>
    )
});

export default Card;
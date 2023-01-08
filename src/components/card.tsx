import { forwardRef, FC } from 'react';
import Image from 'next/image';
import React from 'react';

export type CardType = 'vocabulary' | 'verb';

interface VocabularyCardProps {
    cardType: CardType;
    word: String;
    pronunciation: String;
    translation: String;
    image: String;
}

interface VerbCardProps {
    cardType: CardType;
    infinitive: String;
    translation: String;
    pronunciation: String;
    tense: String;
    conjugations: any;
}

export type CardProps = VocabularyCardProps | VerbCardProps;

const Card = forwardRef((props: CardProps, _ref) => {
    const {cardType, word, pronunciation, translation, image, infinitive, tense, conjugations} = props;
    
    return (
        <div className='mainContainer'>
            <div ref={_ref} className="card">
                { props.cardType == "vocabulary" ? 
                    <>
                        <div className='front'>
                            <h3>[ { word } ]</h3>
                            <h4 className="info">
                                { pronunciation }
                            </h4>
                        </div>
                        <div className='back'>
                            <h3>{ translation }</h3>
                            { image && image.split('/').length > 0 ?
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
                            <div>
                                { conjugations && Object.entries(conjugations).map(([key, value]) => <dl className='verb'><dt>{key}</dt><dd>{value}</dd></dl>)}   
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
});

export default Card;
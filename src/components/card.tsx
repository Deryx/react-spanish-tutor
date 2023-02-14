import { forwardRef, FC } from 'react';
import Image from '../../node_modules/next/image';
import React from 'react';

interface VocabularyCardProps {
    cardType: 'vocabulary';
    word: String;
    pronunciation: String;
    translation: String;
    image: String;
}

interface VerbCardProps {
    cardType: 'verb';
    infinitive: String;
    translation: String;
    pronunciation: String;
    tense: String;
    conjugations: Object;
}

type CardProps = VocabularyCardProps | VerbCardProps;

const Card = forwardRef((props: CardProps, _ref: any ) => {
    
    return (
        <div className='mainContainer'>
            <div ref={ _ref } className="card">
                { props.cardType == "vocabulary" ? 
                    <>
                        <div className='front'>
                            <h3>[ { props.word } ]</h3>
                            <h4 className="info">
                                { props.pronunciation }
                            </h4>
                        </div>
                        <div className='back'>
                            <h3>{ props.translation }</h3>
                            { props.image && !(props.image === 'blank.png') ?
                                <div className="image">
                                    <Image src={`/images/${props.image}`} width={150} height={150} />
                                </div> : null
                            }
                        </div>
                    </> : 
                    <>
                        <div className='front'>
                            <h3>[ { props.infinitive } ]</h3>
                            <h4>[ { props.translation } ]</h4>
                            <h4>{ props.pronunciation }</h4>
                        </div>
                        <div className='back'>
                            <h3>[ { props.tense } ] tense</h3>
                            { props.conjugations && Object.entries( props.conjugations ).map(([pronoun, conjugation]) => <dl key={pronoun} className='verb'><dt>{pronoun}</dt><dd>{conjugation}</dd></dl>)}   
                        </div>
                    </>
                }
            </div>
        </div>
    )
});

export default Card;
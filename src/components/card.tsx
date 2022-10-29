import { forwardRef } from 'react';
import React from 'react';

const Card = forwardRef( ( props, ref ) => {

    return (
        <div className='mainContainer'>
            <div ref={ ref } className="card">
                <div className='front'>
                    <h3>{ props.frontHeader }</h3>
                    <div className="info">
                        { props.frontInfo }
                    </div>
                </div>
                <div className='back'>
                    <h3>{ props.backHeader }</h3>
                    <div className="info">
                        { props.backInfo }
                    </div>
                </div>
            </div>
        </div>
    )
});

export default Card;
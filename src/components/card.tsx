import React from 'react';

function Card( props: any ) {
    return (
        <section className="card face col-lg-12">
            <h3>{ props.header }</h3>
            <div className="info">
                { props.info }
            </div>
        </section>
    )
}

export default Card;
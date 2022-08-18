import React from 'react';

function Textinput( props:any ) {
    return (
        <>
            <dl>
                <dt><label htmlFor={ props.id }>{ props.name }: </label></dt>
                <dd>
                    <input type="text" id={ props.id } name={ props.id } />
                </dd>
            </dl>
        </>
    )
}

export default Textinput;
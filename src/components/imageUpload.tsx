import React from 'react';

function Textinput( props:any ) {
    return (
        <>
            <dl>
                <dt><label for={ props.id }>{ props.name }: </label></dt>
                <dd>
                    <input type="file" id={ props.id } name={ props.id } />
                </dd>
            </dl>
        </>
    )
}

export default Textinput;
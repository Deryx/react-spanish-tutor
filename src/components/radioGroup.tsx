import React from 'react';

function Radiogroup( props: any ) {
    return (
        <div>
            { props.choices.map( ( choice ) =>
                <>
                    <input type="radio" id={ choice.id } name={ choice.id } value={ choice.value } />
                    <label for={ choice.id }>{ choice.value }</label>
                </>
            )};
        </div>
    )
}

export default Radiogroup;
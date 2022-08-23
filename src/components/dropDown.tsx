import React from 'react';

function Dropdown( props: any ) {
    return (
        <>
            <dl>
                <dt><label htmlFor={ props.id }>{ props.name }: </label></dt>
                <dd>
                    <select id={ props.id } name={ props.id }>
                        { props.options.map( ( option, i ) => 
                            <option key={ i } value={ option.id }>{ option.value }</option>
                        )}
                    </select>
                </dd>
            </dl>
        </>
    )
}

export default Dropdown;
import { forwardRef } from 'react';

const Textinput = forwardRef( ( props:any, forwardedRef ) => {
    return (
        <>
            <dl>
                <dt><label htmlFor={ props.id }>{ props.name }: </label></dt>
                <dd>
                    <input ref={ forwardedRef } type="text" id={ props.id } onFocus={ props.onFocusEvent } name={ props.id } />
                </dd>
            </dl>
        </>
    )
})

export default Textinput;
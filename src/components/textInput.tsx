import { forwardRef } from 'react';

interface TextinputProps {
    id: string;
    onFocusEvent?: any;
    onChangeEvent?: any;
    disabled?: boolean;
    name?: string;
    inputClass?: string;
}

const Textinput = forwardRef(( {id, onFocusEvent, onChangeEvent, disabled, name, inputClass}: TextinputProps, _ref: any) => {
    return (
        <>
            <dl>
                <dt><label htmlFor={ id }>{ name }: </label></dt>
                <dd>
                    <input ref={ _ref } type="text" id={ id } onFocus={ onFocusEvent } onChange={ onChangeEvent } name={ id } disabled={ disabled } className={ inputClass } />
                </dd>
            </dl>
        </>
    )
})


export default Textinput;
import React, { forwardRef } from 'react';

const Imageupload = forwardRef( ( props:any, forwardedRef ) => {
    return (
        <>
            <dl>
                <dt><label htmlFor={ props.id }>{ props.name }: </label></dt>
                <dd>
                    <input ref={ forwardedRef } type="file" id={ props.id } name={ props.id } />
                </dd>
            </dl>
        </>
    )
});

export default Imageupload;
import React, { Children } from 'react';

function Modal( { children } ) {
    return (
       <div id="modal">
        { children }
       </div>
    )
}

export default Modal;
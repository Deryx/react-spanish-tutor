import React from 'react';

function Accents( { handleAccentClick } ) {
    return (
        <>
            <form id="accents" className='row'>
                <fieldset className='col-xs-12'>
                    <div className='col-xs-1'>
                        <button id="accent1" onClick={ handleAccentClick } value='á'>á</button>
                    </div>
                    <div className='col-xs-1'>
                        <button id="accent2" onClick={ handleAccentClick } value='é'>é</button>
                    </div>
                    <div className='col-xs-1'>
                        <button id="accent3" onClick={ handleAccentClick } value='í'>í</button>
                    </div>
                    <div className='col-xs-1'>
                        <button id="accent4" onClick={ handleAccentClick } value='ñ'>ñ</button>
                    </div>
                    <div className='col-xs-1'>
                        <button id="accent5" onClick={ handleAccentClick } value='ó'>ó</button>
                    </div>
                    <div className='col-xs-1'>
                        <button id="accent6" onClick={ handleAccentClick } value='ú'>ú</button>
                    </div>
                    <div className='col-xs-1'>
                        <button id="accent7" onClick={ handleAccentClick } value='ü'>ü</button>
                    </div>
                </fieldset>
            </form>
        </>
    )
}

export default Accents;
import React from 'react';

function Accents() {
    return (
        <>
            <form id="accents" className='row'>
                <fieldset className='col-xs-12'>
                    <div className='col-xs-1'>
                        <button id="accent1" value='á'>á</button>
                    </div>
                    <div className='col-xs-1'>
                        <button id="accent2" value='é'>é</button>
                    </div>
                    <div className='col-xs-1'>
                        <button id="accent3" value='í'>í</button>
                    </div>
                    <div className='col-xs-1'>
                        <button id="accent4" value='ñ'>ñ</button>
                    </div>
                    <div className='col-xs-1'>
                        <button id="accent5" value='ó'>ó</button>
                    </div>
                    <div className='col-xs-1'>
                        <button id="accent6" value='ú'>ú</button>
                    </div>
                    <div className='col-xs-1'>
                        <button id="accent7" value='ü'>ü</button>
                    </div>
                </fieldset>
            </form>
        </>
    )
}

export default Accents;
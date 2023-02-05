import React from 'react'
import './Modal.css'

function Modal({closeModal}){
    return(
        <div className='modalBackground'>
            <div className='modalContainer'>
                <div className='titleCloseBtn'>
                <button onClick={() => closeModal(false)}> X </button>
                </div>
                <div className='title'>
                    <h1>Spin the wheel! Continue?</h1>
                </div>
                <div className='body'>
                    <p>Wheel PlaceHolder</p>
                </div>
                <div className='footer'>
                    <button onClick={() => closeModal(false)}>Cancel</button>
                    <button>Continue</button>
                </div>

            </div>
        </div>

    )
}
export default Modal
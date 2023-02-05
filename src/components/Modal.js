import React from 'react'
import './Modal.css'
import Wheel from '../pages/wheel';

function Modal({closeModal}){
    return(
        <div className='modalBackground'>
            <div className='modalContainer'>
                <div className='titleCloseBtn'>
                <button onClick={() => closeModal(false)}> X </button>
                </div>
                <div className='modal-title'>
                    <h1>Spin the wheel! Continue?</h1>
                </div>
                <div className='body'>
                    <Wheel items={['Meet Paul!!!', 'Try Again :C', 'Meet Paul!!!', 'Try Again :C', 'Meet Paul!!!', 'Try Again :C ']} />
                </div>
                <div className='modal-footer'>
                    <button onClick={() => closeModal(false)}>Cancel</button>
                    <button>Continue</button>
                </div>

            </div>
        </div>

    )
}
export default Modal
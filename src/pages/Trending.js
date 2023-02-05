import React from 'react'
import {useState} from 'react'
import {Navigate, useNavigate} from "react-router-dom"
import Modal from '../components/Modal'

const Trending = () => {

    const navigate_spin = useNavigate()
    const handleClickSpin = () => {
        navigate_spin('/wheel')
    }
    const [openModal, setOpenModal] = useState(false)

    return (
        <div>
            <h1>Trending</h1>
            <button className='spin-button' onClick={() => {setOpenModal(true);
            }}>
                Spin the wheel
            </button>
            {openModal && <Modal closeModal={setOpenModal} />}
        </div>
    )
}
export default Trending
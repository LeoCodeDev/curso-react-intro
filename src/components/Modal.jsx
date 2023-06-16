import React, { useContext } from 'react'
import '../styles/Modal.css'
import { createPortal } from 'react-dom'
import { DeleteIconUI } from '../interfaces/DeleteIconUI'
import { TodoContext } from '../context/TodoContext/TodoContext'




const Modal = ({children}) => {
    const {setModalIsOpen} = useContext(TodoContext)
  return createPortal(
    <div className='modalContainer'>
        <div className='modalContent'>
            <DeleteIconUI className='closeModal' onClick={() => setModalIsOpen(false)}/>
            {children}
        </div>
    </div>,
    document.getElementById('modal')
  )
}

export {Modal}
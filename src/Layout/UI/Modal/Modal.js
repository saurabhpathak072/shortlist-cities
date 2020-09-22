import  Backdrop  from '../Backdrop/Backdrop';
import React from 'react'
import './Modal.css';

const Modal = (props) => {
    return (
        <>
        <Backdrop/>
        <div className='Modal'
        >
            { props.children }
        </div>
        </>
    )
}

export default Modal;

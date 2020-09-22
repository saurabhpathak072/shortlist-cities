import  Modal  from '../UI/Modal/Modal'
import React from 'react'
import Navigations from '../../Components/Navigations/Navigations'
import './Layout.css'
import Form from '../UI/Form/Form'
import { connect } from 'react-redux'

const Layout = (props) => {
    console.log("prop.isShowmodal",props.showmodal);
    return (
        <div>
            <div className="layout__nav">
            <Navigations/>
            </div>
            <main className="layout__main">
            {props.children}
            </main>
            {props.showmodal && <Modal show={props.showmodal}>
               <Form/>
            </Modal>}
        </div>
    )
}

const mapstatetoprops=state=>{
    return{
        showmodal:state.isShowModal
    }
}

export default connect(mapstatetoprops)(Layout);

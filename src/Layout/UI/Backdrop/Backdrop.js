import React from 'react';
import classes from './Backdrop.module.css';

function Backdrop(props) {
    return (
        <div className={classes.Backdrop} onClick={props.clicked}>
            
        </div>
        
    )
}

export default Backdrop
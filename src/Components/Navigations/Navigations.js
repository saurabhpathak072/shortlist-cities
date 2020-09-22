import React from 'react'
import { NavLink } from 'react-router-dom';
import SearchBox from '../SearchBox/SearchBox';
import './Navigations.css';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { addnewcity, showmodal } from '../../Storage/actionCreators/actionCreators';

const Navigations = (props) => {
    return (
        <div>
        <div className="navigation">
        <div className="navigation__addnew">
        <Button onClick={props.ishowmodal} variant="contained" color="primary">
        Add new City
      </Button>
        </div>
            <SearchBox/>
            <div className="navigation__list">
                
            <NavLink to="/">All Cities</NavLink>
            <NavLink to="/shortlisted">Short List Cities</NavLink>
            </div>
        </div>
        </div>
    )
}

const mapDipatchToProps=dispatch=>{
    return{
        addnew:(value)=>dispatch(addnewcity(value)),
        ishowmodal:()=>dispatch(showmodal())
    }
}

export default connect(null,mapDipatchToProps)(Navigations)

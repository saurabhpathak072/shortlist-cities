import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addnewcity, showmodal } from '../../../Storage/actionCreators/actionCreators';
import './Form.css';

const Form = (props) => {
    const [selectedcity, setselectedcity] = useState('')
    const [selectedstate, setselectedstate] = useState('')
    const [selecteddistrict, setselecteddistrict] = useState('')
    const state=props.cities.map(city=>city.State);
    const updatedstate=[...new Set(state)];

    const stateoption = updatedstate.map(state=>(
    <option key={state} value={state}>{state}</option>
    ))
    const district = props.cities.map(city=>city.District);
    const updatedDistrict=[...new Set(district)];
    const districtoption=updatedDistrict.map(district=>(
        <option key={district} value={district}>{district}</option>
    ))

    const updatelist =(event)=>{
        event.preventDefault();
        if(selectedcity && selectedstate && selecteddistrict)
         {props.addnew({City:selectedcity,State:selectedstate,District:selecteddistrict});
         props.isshowmodal();}
         else{
             alert("Please fill all the field");
         }
    }

    const setCity=(e)=>{
        setselectedcity(e.target.value);
    }
    
    return (
        <div className="form">
    <h3>Add New City</h3>
    <form onSubmit={updatelist}>
        <div className="form__field">
            <label>City</label>
            <input
             value={selectedcity}
             onChange={setCity} 
             type="text" 
             name="city"/>
        </div>
        <div className="form__field">
        <label>State</label>
            <select value={selectedstate} onChange={(e)=>setselectedstate(e.target.value)} id="state" name="state">
            <option>Select State</option>
                {stateoption}
            </select>
        </div>
        <div className="form__field">
        <label>District</label>
        
            <select value={selecteddistrict} onChange={(e)=>setselecteddistrict(e.target.value)} id="District" name="District">
            <option>Select Disctrict</option>
                {districtoption}
            </select>
        </div>
        <div className="form__button">
        <Button type="submit"  color="primary">
            Submit
        </Button>
        <Button onClick={props.isshowmodal} color="secondary">Cancel</Button>
        </div>
    </form>
</div>
        
    )
}

const mapstateToProps=state=>{
    return{
        cities:state.cities,
        showmodal:state.isShowModal
    }
}

const mapdispatchToProps=dispatch=>{
    return{
         addnew:(value)=>dispatch(addnewcity(value)),
         isshowmodal:()=>dispatch(showmodal())
    }
}

export default connect(mapstateToProps,mapdispatchToProps)(Form);

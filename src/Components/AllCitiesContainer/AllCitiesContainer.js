import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import React from 'react'
import { connect } from 'react-redux'
import { Button } from '@material-ui/core';
import { deletecities, shortlistcities } from '../../Storage/actionCreators/actionCreators'

const AllCitiesContainer = (props) => {
    
    return (
        <tr>
            <td>{props.city.State}</td>
            <td>{props.city.District}</td>
            <td>{props.city.City}</td>
            <td>
            <Button
             variant="contained" 
             onClick={()=>props.shortlist(props.city)} 
             color={props.city?.isShortlisted?`secondary`:`primary`}>
            {props.city?.isShortlisted? 'Remove from shortlist' : 'Shortlist'}
            </Button>
            <IconButton
             onClick={()=>props.delete(props.city)} 
             aria-label="delete">
                <DeleteIcon />
            </IconButton>
            </td>
        </tr>
    )
}

const mapDispatchToProps=dispatch=>{
    return{
        delete:(city)=>dispatch(deletecities(city)),
        shortlist:(city)=>dispatch(shortlistcities(city))
    }
}

export default connect(null,mapDispatchToProps)(AllCitiesContainer);

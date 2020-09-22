import React from 'react'
import AllCitiesContainer from '../AllCitiesContainer/AllCitiesContainer';
import './ShortList.css';
const ShortList = (props) => {
   

    return (
        <div>
            <div className='allcities'>
            <table>
            <tr>
            <th>City</th>
            <th>State</th>
            <th>District</th>
            <th>Actions</th>
            </tr>
            { props.cities.map(city=>{
                if(!city?.isDelete && city.isShortlisted){
                    if(!city.City){
                        return <h3>No City Shortlited</h3>
                    }
                    else
                    return(
                        <AllCitiesContainer keys={city.name} city={city}/>
                    )
                }
                else{
                    return null;
                }
                
                
            })}
            </table>
        </div>
        </div>
    )
}

export default ShortList

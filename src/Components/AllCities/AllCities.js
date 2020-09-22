import React from 'react';
import './AllCities.css';
import AllCitiesContainer from '../AllCitiesContainer/AllCitiesContainer'
import Paginations from '../Paginations/Paginations';
import { connect } from 'react-redux';

const AllCities = (props) => {
    let cities;
    if(props.isSearch){
        
        cities=props.searchCities.map(city=>{
            if(!city?.isDelete && !city?.isShortlisted){
                
                return(
                    <AllCitiesContainer keys={city.name} city={city}/>
                )
            }
            else{
                return null;
            }
        })
    }
    else{
        cities=props.cities.map(city=>{
            if(!city?.isDelete && !city?.isShortlisted){
                return(
                    <AllCitiesContainer keys={city.name} city={city}/>
                )
            }
            else{
                return null;
            }
        })
    }

    return (
        <div className='allcities'>
            <table>
                <tr>
                    <th>State</th>
                    <th>District</th>
                    <th>City</th>
                    <th>Actions</th>
                </tr>
                {cities}
            </table>
            {!props.isSearch &&<Paginations
             newsPerPage={props.newsPerPage} 
             totalNews={props.isSearch?props.searchCities.length:props.totalNews}
             paginate={props.paginate}/>}
        </div>
    )
}

const mapStateToProps=state=>{
    return{
        isSearch:state.isSearch,
        searchCities:state.searchCities
    }
}


export default connect(mapStateToProps)(AllCities);

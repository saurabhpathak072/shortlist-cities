import Axios from "axios";
import * as actionTypes from '../actionTypes/actionTypes'

export const storeCities=(data)=>{
    return{
        type:actionTypes.INITIALIZE_CITIES,
        cities:data
    }
}

export const fetchcities=()=>{
    return dispatch=>{
        Axios.get('https://api.jsonbin.io/b/5f5c76a5302a837e9564b5ca')
        .then(res=>{
            dispatch(storeCities(res.data))
        })
        .catch(err=>console.log(err))
    }
}

export const shortlistcities=(city)=>{
    return{
        type:actionTypes.SHORTLIST_CITIES,
        city:city
    }
}

export const deletecities=(city)=>{
    return{
        type:actionTypes.DELETE_CITIES,
        city:city
    }
}

export const search=(isitemsearch)=>{
    return{
        type:actionTypes.SEARCH_CITIES,
        isitemsearch:isitemsearch
    }
}

export const searchcitylist=(value)=>{
    return{
        type:actionTypes.SEARCH_CITIES_LIST,
        value:value
    }
}

export const addnewcity=(value)=>{
    return{
        type:actionTypes.ADD_NEW_CITIES,
        payload:value
    }
}

export const showmodal=()=>{
    return{
        type:actionTypes.SHOW_MODAL,
        
    }
}
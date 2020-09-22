import * as actionType from '../actionTypes/actionTypes';
const initialState={
    cities:[],
    searchCities:[],
    isShortlisted:false,
    isDelete:false,
    isSearch:false,
    isShowModal:false
}

const reducer = (state=initialState,action)=>{
switch(action.type){
    case actionType.INITIALIZE_CITIES:
        return{
            ...state,
            cities:action.cities

        }

    case actionType.SHORTLIST_CITIES:
        const shortlistcity=state.cities.map(city=>{
            
            if(city.City===action.city.City && city.District===action.city.District && city.State===action.city.State){
                console.log("!state.isShortlisted",!city?.isShortlisted)
               return {...city,isShortlisted:!city?.isShortlisted,isDelete:false}
            }
            else{
                return city;
            }
        })
        const searchshortlistcity=state.searchCities.map(city=>{
            
            if(city.City===action.city.City && city.District===action.city.District && city.State===action.city.State){
                console.log("!state.isShortlisted",!city?.isShortlisted)
               return {...city,isShortlisted:!city?.isShortlisted,isDelete:false}
            }
            else{
                return city;
            }
        })
        return{
            ...state,
            cities:shortlistcity,
            searchCities:searchshortlistcity
        }
        case actionType.DELETE_CITIES:
            console.log("DELETE");
            const deletecity=state.cities.map(city=>{
                
                if(city.City===action.city.City && city.District===action.city.District && city.State===action.city.State){
                    console.log(city);
                   return {...city,isShortlisted:false,isDelete:true}
                }
                else{
                    return city;
                }
            })
            const searchdeletecity=state.searchCities.map(city=>{
                
                if(city.City===action.city.City){
                    console.log(city);
                   return {...city,isShortlisted:false,isDelete:true}
                }
                else{
                    return city;
                }
            })
            return{
                ...state,
                cities:deletecity,
                searchCities:searchdeletecity
            }

        case actionType.SEARCH_CITIES:
            console.log("Search Cities",state);
            return{
                ...state,
                isSearch:action.isitemsearch
            }
        case actionType.SEARCH_CITIES_LIST:
            
            const updatedSearch=state.cities.filter(city=>{
               return city.City.includes(action.value) || city.District.includes(action.value) || city.State.includes(action.value);
            });
            console.log("Search Cities List",updatedSearch);
            return{
                ...state,
                searchCities:updatedSearch
            }
        case actionType.ADD_NEW_CITIES:
            console.log("Add new cities");
            // const NewCity=state.cities.concat({...action.payload});
            const NewCity=[{...action.payload},...state.cities];
            console.log("Add new cities",NewCity);
            return{
                ...state,
                cities:NewCity
            }
        case actionType.SHOW_MODAL:
            console.log("Modal",state.isShowModal);
            return{
                ...state,
                isShowModal:!state.isShowModal
            }
    default:
        return state;
}


}

export default reducer;
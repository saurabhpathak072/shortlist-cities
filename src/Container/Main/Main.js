import React, { useEffect,useState } from 'react';
import { connect } from 'react-redux';
import AllCities from '../../Components/AllCities/AllCities';
import { fetchcities } from '../../Storage/actionCreators/actionCreators';
import './Main.css';
import { Route } from 'react-router';
import ShortList from '../../Components/ShortList/ShortList';



const Main = (props) => {
    const [currentPage,setCurrentPage]=useState(1);
    const [newsPerPage]=useState(50);
    useEffect(()=>{
      
            props.initialize();
        
            
    },[]);
   
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    let currentCities = props.cities.slice(indexOfFirstNews,indexOfLastNews);

    const paginate =(pageNumbet)=>{
        setCurrentPage(pageNumbet);
    }

    return (
        <div className="main">
            
             
            {<Route exact path="/" ><AllCities indexOfFirstNews={indexOfFirstNews} indexOfLastNews={indexOfLastNews} newsPerPage={newsPerPage} totalNews={props.cities.length} cities={currentCities} paginate={paginate}/></Route>}
            {<Route path="/shortlisted"><ShortList cities={props.cities} newsPerPage={newsPerPage} totalNews={props.cities.length} shortcities={currentCities} paginate={paginate}/></Route>}
            
        </div>
    )
}

const mapStateToProps = state=>{
    return{
        isSearch:state.isSearch,
        cities:state.cities
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        initialize:()=>dispatch(fetchcities())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);

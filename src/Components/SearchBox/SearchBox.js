import React, { useState } from 'react';
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import './SearchBox.css';
import { connect } from 'react-redux';
import { search, searchcitylist } from '../../Storage/actionCreators/actionCreators';


const SearchBox = (props) => {
    const [isSearch, setisSearch] = useState(false)
    const [search, setsearch] = useState('');
    const updateSearch=(event)=>{
        setsearch(event.target.value);
        if(event.target.value){
            setisSearch(true);
            
            // props.itemsearch(true)
        }
        else{
            // props.itemsearch(false);
            setisSearch(false);
        }
    }

    const searchcitylist=(event)=>{
        event.preventDefault();
        console.log("Search");
        props.itemsearch(isSearch);
        props.searchcities(search);
       
    }
    return (
        <form onSubmit={searchcitylist}>
        <div className="searchbox">
            
            <div className="searchBox__search">
            <SearchOutlined/>
            <input
             placeholder="Search" 
             type="text"
             onChange={updateSearch}
             value={search}
             />
            </div>
            <button style={{display:"none"}}  type="submit">Search</button>
        </div>
        </form>
    )
}

const mapDispatchToProps=dispatch=>{
    return{
        itemsearch:(isitemsearch)=>dispatch(search(isitemsearch)),
        searchcities:(value)=>dispatch(searchcitylist(value))
    }
}

export default connect(null,mapDispatchToProps) (SearchBox);

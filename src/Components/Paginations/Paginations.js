import React from 'react'
import classes from './Paginations.module.css';

function Paginations({newsPerPage,totalNews,paginate}) {
    const pageNumber = [];
    console.log("pageNumber",pageNumber.length);
    for(let i=1;i<=Math.ceil(totalNews/newsPerPage);i++){
        
        pageNumber.push(i);
    }
    return (
        <nav className={classes.pagescontainer}>
            <ul className={classes.paginations}>
                {pageNumber.map(number=>{

                    return(
                        <li key={number} className={classes.pageitem}>
                            <div onClick={()=>paginate(number)} className={classes.pagelink}>
                                {number}
                            </div>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Paginations

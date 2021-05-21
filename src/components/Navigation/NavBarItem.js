/*  this file is responsible for every single link in NavBar like about, skill , etc  */
import React from 'react';
// import {NavLink} from 'react-router-dom';
import classes from './navBarItem.module.css';


const navBarItem = (props) => {
    
    return (
    <div className={classes.navBarItem} onClick={props.clicked}>
        <button href={props.link} 
        className={props.active ? classes.active : null}>
             <p>
        {props.children}
            </p>
            </button>
            
   </div>
    )
    };

export default navBarItem;


//to={props.link}
//exact={props.exact}
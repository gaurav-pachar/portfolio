/*  this file is responsible for every single link in NavBar like about, skill , etc  */
import React from 'react';
// import {NavLink} from 'react-router-dom';
import classes from './navBarItem.module.css';


const navBarItem = (props) => {
    console.log(props);
    return (
    <li className={classes.navBarItem}>
        <a href={props.link} 
        className={props.active ? classes.active : null}>
             <p>
        {props.children}
            </p>
            </a>
   </li>
    )
    };

export default navBarItem;


//to={props.link}
//exact={props.exact}
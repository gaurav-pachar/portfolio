/*  this file is responsible for every single link in NavBar like about, skill , etc  */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// import {NavLink} from 'react-router-dom';
import classes from './navBarItem.module.css';


const navBarItem = (props) => {
    
    return (
    <div className={classes.navBarItem} onClick={props.clicked}>
        <Link 
           to={props.link}
           exact={props.exact}
           activeClassName={classes.active}>{props.children}</Link>
   </div>
    );
    };

export default navBarItem;



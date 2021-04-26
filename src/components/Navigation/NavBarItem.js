/*  this file is responsible for every single link in NavBar like about, skill , etc  */
import React from 'react';
// import {NavLink} from 'react-router-dom';
import classes from './navBarItem.module.css';

const navBarItem = (props) => (
    <li className={classes.navBarItem}>
        <a href={props.link} 
        ClassName={props.active ? classes.active : null}>{props.children}</a>
   </li>
);

export default navBarItem;


//to={props.link}
//exact={props.exact}
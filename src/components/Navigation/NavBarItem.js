/*  this file is responsible for every single link in NavBar like about, skill , etc  */
import React from 'react';
// import { Link } from 'react-router-dom';
// import {NavLink} from 'react-router-dom';
import classes from './navBarItem.module.css';
import { Link } from 'react-scroll';


const navBarItem = (props) => {
    return (
    <div className={classes.navBarItem}>
        <Link 
           to={props.link}
           smooth={true} duration={500}
           activeClass={classes.active}>{props.children}</Link>
   </div>
    );
    };

export default navBarItem;



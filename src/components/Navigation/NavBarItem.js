/*  this file is responsible for every single link in NavBar like about, skill , etc  */
import React from 'react';
// import { Link } from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import classes from './navBarItem.module.css';
import { Link } from 'react-scroll';


const NavigationLink = (props) => {
    return (
    <div className={classes.navigationLink} onClick={props.clicked}>
        <NavLink
           to={props.link}
           exact={props.exact}
           activeClassName={classes.active}>{props.children}</NavLink>
   </div>
    );
    };



const ScrollLink = (props) => {
    return (
        <div className={classes.scrollLink} onClick={props.clicked}>
            <Link
              to={props.to}
              smooth={true} duration={500}
           activeClass={classes.active}>{props.children}</Link>
        </div>
    )
}

export {
    NavigationLink, 
    ScrollLink,
}




import React , { useState } from 'react';
import NavBarItems from '../../components/Navigation/NavBarItems';
import classes from './NavBar.module.css';
import MenuStack from '../../components/Navigation/MenuStack/MenuStack';
import NavBarItem from '../../components/Navigation/NavBarItem';
import { MdMail } from 'react-icons/md';
import { FaTools , FaUserAlt , FaHome , FaUserGraduate , FaBlackTie } from 'react-icons/fa';
import Aux from '../../Auxi';
import reactDom from 'react-dom';




const NavBar = (props) => {
    
    
    
    return (
        <div className={classes.NavBar}>
             <div className={classes.desktop}>
                 <NavBarItems/>
             </div>
         </div>
    )
};

export default NavBar;

/* 
<div>{showMenu ? <MenuStack /> : null}</div>
             <div className={classes.mobile}>
             <NavBarItem link="/" active>active</NavBarItem>
             <NavBarItem clicked={() => setshowMenu(!showMenu)}>Menu</NavBarItem>
             <NavBarItem link="/" active><MdMail/></NavBarItem>
             </div>






        */
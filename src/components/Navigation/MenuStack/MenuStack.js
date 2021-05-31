import React from 'react';
import NavBarItem from '../NavBarItem';
// import { MdMail } from 'react-icons/md';
import { FaTools , FaUserAlt , FaUserGraduate , FaBlackTie } from 'react-icons/fa';

import classes from './MenuStack.module.css';

export const MenuStack = (props) => {
    return (
        <div className={classes.MenuStack}>
            <NavBarItem link="about"><FaUserAlt/>About</NavBarItem>
            <NavBarItem link="skills"><FaTools/>Skills</NavBarItem>
            <NavBarItem link="academics"><FaUserGraduate/>Academics</NavBarItem>
            <NavBarItem link="experience" ><FaBlackTie/>Experience</NavBarItem>
        </div>
    )
}

export default MenuStack;

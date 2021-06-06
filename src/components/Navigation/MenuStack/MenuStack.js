import React from 'react';
import { ScrollLink } from '../NavBarItem';
// import { MdMail } from 'react-icons/md';
import { FaTools , FaUserAlt , FaUserGraduate , FaBlackTie } from 'react-icons/fa';

import classes from './MenuStack.module.css';

export const MenuStack = (props) => {
    return (
        <div className={classes.MenuStack}>
            <ScrollLink to="about"><FaUserAlt/>About</ScrollLink>
            <ScrollLink to="skills"><FaTools/>Skills</ScrollLink>
            <ScrollLink to="academics"><FaUserGraduate/>Academics</ScrollLink>
            <ScrollLink to="experience"><FaBlackTie/>Experience</ScrollLink>
                 </div>
    )
}

export default MenuStack;

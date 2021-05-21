import React from 'react';
import NavBarItem from '../NavBarItem';
import { MdMail } from 'react-icons/md';
import { FaTools , FaUserAlt , FaHome , FaUserGraduate , FaBlackTie } from 'react-icons/fa';

import classes from './MenuStack.module.css';

export const MenuStack = (props) => {
    return (
        <div className={classes.MenuStack}>
            <NavBarItem link="/" active><FaHome/>Home</NavBarItem>
            <NavBarItem link="/" active><FaUserAlt/>About</NavBarItem>
            <NavBarItem link="/" active><FaTools/>Skills</NavBarItem>
            <NavBarItem link="/" active><FaUserGraduate/>Academics</NavBarItem>
        </div>
    )
}

export default MenuStack;

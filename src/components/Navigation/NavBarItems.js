/* this function will wrap every navbar item */
import React from 'react';
import classes from './navBarItems.module.css';
import NavBarItem from './NavBarItem';
import { MdMail } from 'react-icons/md';
import { FaTools , FaUserAlt , FaHome , FaUserGraduate , FaBlackTie } from 'react-icons/fa';


const NavBarItems = (props) => (
<ul className={classes.navBarItems}>
    <NavBarItem link="/" active><FaHome/>Home</NavBarItem>
    <NavBarItem link="/" active><FaUserAlt/>About</NavBarItem>
    <NavBarItem link="/" active><FaTools/>Skills</NavBarItem>
    <NavBarItem link="/" active><FaUserGraduate/>Academics</NavBarItem>
    <NavBarItem link="/" active><FaBlackTie/>Experience</NavBarItem>
    <NavBarItem link="/" active><MdMail/>Contact Me</NavBarItem>
</ul>
);

export default NavBarItems;


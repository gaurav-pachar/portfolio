/* this function will wrap every navbar item */
import React from 'react';
import classes from './navBarItems.module.css';
import NavBarItem from './NavBarItem';
import { MdMail } from 'react-icons/md';
import { FaTools , FaUserAlt , FaHome , FaUserGraduate , FaBlackTie } from 'react-icons/fa';



const NavBarItems = (props) => (
<ul className={classes.navBarItems}>
    <NavBarItem exact link="home" ><FaHome/>Home</NavBarItem>
    <NavBarItem exact link="about" ><FaUserAlt/>About</NavBarItem>
    <NavBarItem exact link="skills" ><FaTools/>Skills</NavBarItem>
    <NavBarItem exact link="academics" ><FaUserGraduate/>Academics</NavBarItem>
    <NavBarItem exact link="experience" ><FaBlackTie/>Experience</NavBarItem>
    <NavBarItem exact link="/contact" ><MdMail/>Contact Me</NavBarItem>
</ul>
);

export default NavBarItems;


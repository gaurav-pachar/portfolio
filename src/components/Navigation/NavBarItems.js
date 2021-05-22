/* this function will wrap every navbar item */
import React from 'react';
import classes from './navBarItems.module.css';
import NavBarItem from './NavBarItem';
import { MdMail } from 'react-icons/md';
import { FaTools , FaUserAlt , FaHome , FaUserGraduate , FaBlackTie } from 'react-icons/fa';


const NavBarItems = (props) => (
<ul className={classes.navBarItems}>
    <NavBarItem link="/" exact><FaHome/>Home</NavBarItem>
    <NavBarItem link="/about" ><FaUserAlt/>About</NavBarItem>
    <NavBarItem link="/skills" ><FaTools/>Skills</NavBarItem>
    <NavBarItem link="/academics" ><FaUserGraduate/>Academics</NavBarItem>
    <NavBarItem link="/experience" ><FaBlackTie/>Experience</NavBarItem>
    <NavBarItem link="/contact" ><MdMail/>Contact Me</NavBarItem>
</ul>
);

export default NavBarItems;


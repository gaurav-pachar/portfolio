/* this function will wrap every navbar item */
import React from 'react';
import classes from './navBarItems.module.css';
import NavBarItem from './NavBarItem';

const NavBarItems = (props) => (
<ul className={classes.navBarItems}>
    <NavBarItem link="/" active>Home</NavBarItem>
    <NavBarItem link="/" active>About</NavBarItem>
    <NavBarItem link="/" active>Skills</NavBarItem>
    <NavBarItem link="/" active>Academics</NavBarItem>
    <NavBarItem link="/" active>Experience</NavBarItem>
    <NavBarItem link="/" active>Contact Me</NavBarItem>
</ul>
);

export default NavBarItems;


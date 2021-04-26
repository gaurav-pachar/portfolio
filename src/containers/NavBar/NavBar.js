import React from 'react';
import NavBarItems from '../../components/Navigation/NavBarItems';
import classes from './NavBar.module.css'

const NavBar = (props) => (
        <header className={classes.NavBar}>
            <nav>
                <NavBarItems/>
            </nav>
        </header>
);

export default NavBar;
import React from 'react';
import classes from './layout.module.css';
import NavBar from '../NavBar/NavBar';
import Aux from '../../Auxi'

const Layout = (props) => {
   return (
       <Aux>
       <NavBar></NavBar>
       <main classes={classes.layout}>
       {props.children}
       </main>
       </Aux>
   )      
};

export default Layout;
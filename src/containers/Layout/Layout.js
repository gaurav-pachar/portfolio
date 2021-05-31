import React from 'react';
import classes from './layout.module.css';
// import NavBar from '../NavBar/NavBar';
// import Aux from '../../Auxi';
// import MenuStack from '../../components/Navigation/MenuStack/MenuStack';
import Skills from '../../components/skills/skills';
// import Home from '../../components/Home/Home';
import About from '../../components/AboutMe/About';
import Academics from '../../components/Academics/Academics';
import Experience from '../../components/Experince/Experience';
import Home from '../../components/Home/Home';


const Layout = (props) => {
    
   return (
                   
       <div className={classes.layout}>
               <Home/>
               <About/>
               <Skills/>
               <Academics/>
               <Experience/>
                </div>
                   
    )      
};

export default Layout;

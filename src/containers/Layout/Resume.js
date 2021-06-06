import React, {useEffect} from 'react';
import classes from './layout.module.css';
// import NavBar from '../NavBar/NavBar';
// import Aux from '../../Auxi';
// import MenuStack from '../../components/Navigation/MenuStack/MenuStack';
import Skills from '../../components/skills/skills';
// import Home from '../../components/Home/Home';
import About from '../../components/AboutMe/About';
import Academics from '../../components/Academics/Academics';
import Experience from '../../components/Experince/Experience';
import { useDispatch } from 'react-redux'
import { expand, showMenuBtn } from '../../Redux/btnChngSlice';
// import Home from '../../components/Home/Home';
// import { Scroll_Link } from '../../components/Navigation/NavBarItem';
// import NavBarItems from '../../components/Navigation/NavBarItems';
// import { Resume_btn_state } from '../../components/Navigation/NavBarItems';


const Resume = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(expand());
        dispatch(showMenuBtn());
        })

   return (
      
       <div className={classes.layout}>
               <About/>
               <Skills/>
               <Academics/>
               <Experience/>
                </div>
       
    )      
};

export default Resume;

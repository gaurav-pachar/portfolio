/* this function will wrap every navbar item */
import React from 'react';
import classes from './navBarItems.module.css';
import { NavigationLink } from './NavBarItem';
import { MdMail } from 'react-icons/md';
// import { RiPagesFill } from 'react-icons/ri';
// import { FaTools , FaUserAlt , FaHome , FaUserGraduate , FaBlackTie } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { useSelector } from 'react-redux';
// import { minimize, showMenuBtn } from '../../Redux/btnChngSlice';

/* function Resume_btn_state (st){
    console.log('executed');
    console.log(st);
      if (st === 'true')
      {hi = 'yes'}
      else {hi = 'no'}
}
*/

function NavBarItems (props){

    const state = useSelector((state) => state.navBaritemsStateChng.value0);
    
  //  const Resume_minimized = (<NavigationLink link="/resume">
  //                               <RiPagesFill/>
  //                                   Resume
  //                              </NavigationLink>);
  //  
  //  const Resume_expanded = (
  //      <>
  //      <ScrollLink to="about"><FaUserAlt/>About</ScrollLink>
  //      <ScrollLink to="skills"><FaTools/>Skills</ScrollLink>
  //      <ScrollLink to="academics"><FaUserGraduate/>Academics</ScrollLink>
  //      <ScrollLink to="experience"><FaBlackTie/>Experience</ScrollLink>
  //      </>
  //  );
    return (
    
    <div className={classes.navBarItems}>
       <NavigationLink exact link="/portfolio/"><FaHome/>Home</NavigationLink>
       {state}
       <NavigationLink link="/portfolio/contact"><MdMail/>Contact Me</NavigationLink>
     </div>
)};

export default NavBarItems;


/*
clicked={() => dispatch(minimize())}
clicked={() => dispatch(minimize())}
*/
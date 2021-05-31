import React, { useState } from 'react';
import NavBarItems from '../../components/Navigation/NavBarItems';
import classes from './NavBar.module.css';
import NavBarItem from '../../components/Navigation/NavBarItem';
import { MdMail } from 'react-icons/md';
import MenuStack from '../../components/Navigation/MenuStack/MenuStack';
// import { FaTools , FaUserAlt , FaHome , FaUserGraduate , FaBlackTie } from 'react-icons/fa';
// import Aux from '../../Auxi';
// import reactDom from 'react-dom';




const NavBar = (props) => {

    const [showMenu, setshowMenu] = useState(false);
    console.log(showMenu);
    
    return (
    
        <div className={classes.NavBar}>
            <div className={classes.desktop}>
                 <NavBarItems/>
             </div>
             <div>{showMenu ? <MenuStack/> : null}</div>
            <div className={classes.mobile}>
            <NavBarItem >active</NavBarItem>
             <button onClick={() => setshowMenu(!showMenu)}>Menu</button>
             <NavBarItem ><MdMail/></NavBarItem>
           </div>
         </div>
         
    )
};

export default NavBar;

/* 







        */
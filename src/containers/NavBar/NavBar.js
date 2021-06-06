import React from 'react';
import NavBarItems from '../../components/Navigation/NavBarItems';
import classes from './NavBar.module.css';
import { NavigationLink } from '../../components/Navigation/NavBarItem';
import { MdMail } from 'react-icons/md';
import MenuStack from '../../components/Navigation/MenuStack/MenuStack';
import { FaHome } from 'react-icons/fa';
import { RiPagesFill } from 'react-icons/ri';
import { useDispatch , useSelector } from 'react-redux';
import { showMenu } from '../../Redux/btnChngSlice';
import { TiThMenu } from 'react-icons/ti'

// import Aux from '../../Auxi';
// import reactDom from 'react-dom';
/*{ useEffect, useState } */


const NavBar = (props) => {

    const dispatch = useDispatch();
   
    const state = useSelector((state) => state.navBaritemsStateChng.value1);
    const menuState = useSelector((state) => state.navBaritemsStateChng.value2);
 //   const [ResumeBtnState, setResumeBtnState] = useState(false);
   //   const [showMenu, setshowMenu] = useState(false);
    const menuBtn = (<button onClick={() => dispatch(showMenu())}> <TiThMenu/> </button>);
   // useEffect(() => {
   //       setResumeBtnState(true);
   //       console.log('rendered');
   // }, [])
    
    return (
    
        <div className={classes.NavBar}>
            <div className={classes.desktop}>
                 <NavBarItems/>
             </div>
             <div>{menuState ? <MenuStack/> : null}</div>
            <div className={classes.mobile}>
            <NavigationLink exact link="/"><FaHome/></NavigationLink>
            { state ? menuBtn : <NavigationLink link="/resume"><RiPagesFill/></NavigationLink>}
            <NavigationLink link="/contact"><MdMail/></NavigationLink>
           </div>
         </div>
         
    )
};

export default NavBar;

/* 


<NavBarItem >active</NavBarItem>
             <button onClick={() => setshowMenu(!showMenu)}>Menu</button>
             <NavBarItem ><MdMail/></NavBarItem>



             {
            ResumeBtnState ? 
            <button onClick={() => setshowMenu(true)}><RiPagesFill/>Resume</button> : 
            <NavigationLink link="/resume" ><RiPagesFill/>Resume</NavigationLink>
            }



            <div>{showMenu ? <MenuStack/> : null}</div>


clicked={() => dispatch(showMenuBtn())}
clicked={() => dispatch(showMenuBtn())}

        */
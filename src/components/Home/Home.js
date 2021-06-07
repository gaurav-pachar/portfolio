import React, { useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
import classes from './home.module.css';
import { useDispatch } from 'react-redux';
import { hideMenu, hideMenuBtn, minimize } from '../../Redux/btnChngSlice';
import SVG_Components from '../../assets/SVG_Components';
import MyData from '../../assets/MyData';

const Home = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(hideMenu())
        dispatch(hideMenuBtn())
        dispatch(minimize())
    })

    return (
       
        <div className={classes.home} id="home">
            <h1>{MyData.Home.heading}</h1>
            <h2>{MyData.Home.para}</h2>
            <ul><a href={MyData.Home.links.linkedin}>{SVG_Components.LinkedIn}</a>
                <a href={MyData.Home.links.github}>{SVG_Components.github}</a> </ul>
        </div>
        
        
    )
}

export default Home;

/*
<div className={classes.scrolldown}>
          <FaChevronCircleDown/>
        </div>
*/
import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaSkype } from 'react-icons/fa';
// import { NavLink } from 'react-router-dom';
import classes from './home.module.css';
import { useDispatch } from 'react-redux';
import { hideMenu, hideMenuBtn, minimize } from '../../Redux/btnChngSlice';

const Home = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(hideMenu())
        dispatch(hideMenuBtn())
        dispatch(minimize())
    })

    return (
       
        <div className={classes.home} id="home">
            <h1>Hi, I am Gaurav Pachar</h1>
            <h2>If you have arrived here,
            you are probably looking for a web developer.</h2>
            <ul><FaLinkedin/>  <FaGithub/>  <FaSkype/></ul>
        </div>
        
        
    )
}

export default Home

/*
<div className={classes.scrolldown}>
          <FaChevronCircleDown/>
        </div>
*/
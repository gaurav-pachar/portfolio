import React from 'react';
import { FaChevronCircleDown, FaGithub, FaLinkedin, FaSkype } from 'react-icons/fa';
// import { NavLink } from 'react-router-dom';
import classes from './home.module.css';
import { Link } from 'react-scroll';

const Home = (props) => {
    return (
        <>
        <div className={classes.home} id="home">
            <h1>Hi, I am Gaurav Pachar</h1>
            <h2>If you have arrived here,
            you are probably looking for a web developer.</h2>
            <ul><FaLinkedin/>  <FaGithub/>  <FaSkype/></ul>
        </div>
        <div className={classes.scrolldown}>
          <Link to="about" smooth={true} duration={500}><FaChevronCircleDown/></Link>
        </div>
        </>
    )
}

export default Home

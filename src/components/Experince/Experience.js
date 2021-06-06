import React from 'react';
import classes from './experience.module.css';
import image from '../../assets/project1.png';
import { FaGithub } from 'react-icons/fa' ;

const Experience = props => {
    return (
        <div className={classes.experience} id="experience">
            <div className={classes.projectExperience}>
                 <h2>
                 Project Experience 
                 </h2>
                 <a href="https://github.com/gaurav-pachar/portfolio">
                 <img src={image} alt="project 1"/>
                 </a>
                 <a href="https://github.com/gaurav-pachar/portfolio"><p><FaGithub/> portfolio</p></a>

            </div>
            <div className={classes.workExperience}>
                <h2>
                Work Experience
                </h2>
            2016 - 2019:   Teaching at a Leet Coaching Institute 
            </div>
        </div>
    );
};


export default Experience;

import React from 'react';
import classes from './aboutMe.module.css';
import Image from '../../assets/image1.jpeg';

const About = (props) => {
    return (
        <>
        <div className={classes.aboutMe} id="about">
           <img src={Image} alt='my'/>
           <p>Result focused individual with an understanding of MERN Stack and IoT, with the passion to learn and grow, Seeking for a challenging and rewarding opportunity in an organization to utilize my true potential and nurture my excellent analytical and technical skills in IT Software and Hardware Industry.</p>
        </div>
        </>
    );
};


export default About;

import React from 'react';
import classes from './aboutMe.module.css';
import Image from '../../assets/image1.jpeg';
import MyData from '../../assets/MyData';

const About = (props) => {
    return (
        <>
        <div className={classes.aboutMe} id="about">
           <img src={Image} alt='my'/>
           <p>{MyData.About}</p>
        </div>
        </>
    );
};


export default About;

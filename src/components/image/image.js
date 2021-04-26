import React from 'react';
import MyImage from '../../assets/my_image.png';
import classes from './image.module.css';

const Image = () => (
     <div className={classes.myimage}>
         <img src={MyImage} alt="My Image" />
     </div>
);

export default Image;
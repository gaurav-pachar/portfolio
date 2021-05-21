import React from 'react';
import Box from './box/box';
import classes from './skills.module.css';


const skills = (props) => {
    return (
        <div className={classes.skills}>
            <div className={classes.leftside}><Box/></div>
            <div className={classes.rightside}></div>
        </div>
    );
};


export default skills;
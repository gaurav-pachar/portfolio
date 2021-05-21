import React from 'react';
import classes from './box.module.css';
import SVG_Components from '../../../assets/svg_components';

const box = (props) => {
    return (
        <div className={classes.box}>
            <p>Fameworks/libraries/Runtimes:-</p>
            <div className={classes.skills_in_cat}>
              {SVG_Components.ReactJS}{SVG_Components.NodeJS}{SVG_Components.expressJS}
            </div>
            <p>Routing, React Hooks, React CSS modules, react-icons</p>
        </div>
    );
};


export default box;

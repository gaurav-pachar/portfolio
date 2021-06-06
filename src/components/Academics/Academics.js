import React from 'react';
import classes from './academics.module.css';
// import SVG_Components from '../../assets/SVG_Components';
import { VscDebugBreakpointData } from 'react-icons/vsc';

const Academics = (props) => {
    return (
        <div className={classes.academics} id="academics">
            <ul className={classes.description}>
              <li>10th<br/><br/><br/><VscDebugBreakpointData/>2009</li>
              <li>12th<br/>(PCM)<br/><br/><VscDebugBreakpointData/>2011</li>
              <li>Diploma <br/>(Civil Engineering)<br/><br/><VscDebugBreakpointData/>2013</li>
              <li>B.Tech (Electrical Engineering) <br/>
                YMCA University of Science and Technology<br/><br/> <VscDebugBreakpointData/>2016</li> 
            </ul>
            
        </div>
    )
}

export default Academics;


/*   
<ul className={classes.timeline}>
            <li><VscDebugBreakpointData/>2009</li>
            <li><VscDebugBreakpointData/>2011</li>
            <li><VscDebugBreakpointData/>2013</li>
            <li><VscDebugBreakpointData/>2016</li>
            </ul>
*/
import React from 'react';
import classes from './academics.module.css';
// import SVG_Components from '../../assets/SVG_Components';
import { VscDebugBreakpointData } from 'react-icons/vsc';
import MyData from '../../assets/MyData';

const Academics = (props) => {
    return (
      <div className={classes.academics} id="academics">
          
                     <h2>
                   Academics:
                     </h2>
               
               <ul className={classes.description}>
               
                         
                       <li className={classes.heading}>
                      {MyData.Academics.schooling.head}
                                   </li>
                       <li className={classes.info}> 
                            <VscDebugBreakpointData/><br/>
                         {MyData.Academics.schooling.year}
                                     </li>
                                         
                         <br/><br/>
                       
                       <li className={classes.heading}>
                         {MyData.Academics.diploma.head}<br/>
                                      </li>
                         <li className={classes.info}>
                             {MyData.Academics.diploma.info}<br/>
                                <VscDebugBreakpointData/><br/>
                            {MyData.Academics.diploma.year}
                                      </li>
                         
                         <br/><br/>
                         
                         <li className={classes.heading}>
                          {MyData.Academics.graduation.head}
                                      </li>
                         <li className={classes.info}> 
                         {MyData.Academics.graduation.info} <br/>
                                <VscDebugBreakpointData/><br/>
                        {MyData.Academics.graduation.year}</li> 
               
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
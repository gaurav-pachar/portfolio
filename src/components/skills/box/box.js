import React, { useState } from 'react';
import classes from './box.module.css';
// import MySkills from '../../../assets/MySkills';

function Box(props) {
    let [state, setState] = useState('');
    let [skillId, setSkillId] = useState('');

    console.log(props.svgComp);

   let mouseHoverevent = (event) => {
       
       
            props.svgComp.forEach( Skill => {
               if (Skill.SkillId === event.target.id) {
                       setState(Skill.SkillSet);
                       setSkillId(Skill.SkillId + ':');
                    }
               }
            )
    }
    
    return (
        <div className={classes.box}>
            <h4>{props.boxHeading}</h4>
            <div className={classes.skills_in_cat}>
                 {props.svgComp.map(svg => {
            return(<div className={classes.skill} key={svg.SkillId} id={svg.SkillId} onMouseOver={mouseHoverevent}>
                       {svg.SkillSvg}
                         </div>)}
                          )}
                        </div>
                 <h4>{skillId}</h4>
                  <p>{state}</p>
        </div>
    );
};


export default Box;




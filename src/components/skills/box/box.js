import React, { useState } from 'react';
import classes from './box.module.css';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
// import MySkills from '../../../assets/MySkills';

function Box(props) {
    let [Skills, setSkills] = useState('');
    let [skillId, setSkillId] = useState('');
   // console.log(props.svgComp);

   // console.log(props.svgComp);
   
 //  let mouseClickEvent = (event) => {
 //  console.log(event);
 //  props.svgComp.forEach( Skill => {
 //   //  || Skill.SkillId === event.target.viewportElement.id
 //  if (Skill.SkillId === event.target.id) {
 //          setSkills(Skill.SkillSet);
 //          setSkillId(Skill.SkillId + ':');
 //       }
 //  }
 // )
//
 //  }


   let mouseHoverevent = (event) => {
      // console.log(event);
       
       props.svgComp.forEach( Skill => {
        //  || Skill.SkillId === event.target.viewportElement.id
       if (Skill.SkillId === event.target.id) {
               setSkills(Skill.SkillSet);
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
                 <h5>{skillId}</h5>
                  <p>{Skills}</p>
        </div>
    );
};


export default Box;



// target.viewportElement.id
//  <i onClick={mouseClickEvent}>{expandBtnState ? <MdExpandMore/> : <MdExpandLess/>}</i>
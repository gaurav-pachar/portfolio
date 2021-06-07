import React from 'react';
import Box from './box/box';
import classes from './skills.module.css';
import MySkills from '../../assets/MySkills';


const skills = (props) => {
  // console.log(MySkills);
   
    return (
        <div className={classes.skills} id="skills">
            <h3>Skills</h3>
            <div className={classes.leftside}>
                <Box svgComp={[MySkills.Java_Script, MySkills.CSS3, MySkills.HTML5, MySkills.C]} 
                     boxHeading='Languages:'/>
                <Box svgComp={[MySkills.mongoDB, MySkills.GIT, MySkills.VScode, MySkills.Figma]}
                     boxHeading='Software and Program:'/>
                </div>
            <div className={classes.rightside}>
                <Box svgComp={[MySkills.ReactJS, MySkills.NodeJS, MySkills.expressJS]}
                     boxHeading='Runtime/Framework/Libraries:'/>
                <Box svgComp={[MySkills.Sketchup, MySkills.Google_Drive, MySkills.MSoffice]}
                     boxHeading='Other Tools:'/>
            </div>
        </div>
    );
};


export default skills;
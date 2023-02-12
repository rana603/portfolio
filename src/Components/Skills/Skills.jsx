import React, { useContext  } from 'react';
import { DarkModeContext } from '../../Context/Context';
import './Skills.css'
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiHtml5,
  DiCss3,
  DiNpm,
  DiBootstrap,

} from "react-icons/di";
import { SiExpress, SiJava, SiPostman, SiPython, SiRedux } from "react-icons/si";


const Skills = () => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  return (

    <section className='skills section' id='skills'>
      <h2 className='skills_title' style={{ color:darkMode? "#fff":"#000"}}>Skills</h2>
      <h5 className='skills_subtitle'>My Technical Skills</h5>
     

      <div className="tech">

        <div className="tech-icons" style={{ color: darkMode ? "#fff" : "#000" }}>
        
          <  DiJavascript1 /> <h6>JavaScript</h6>
        </div>

        <div className="tech-icons" style={{ color: darkMode ? "#fff" : "#000" }}>
          <DiHtml5 /><h6>Html5</h6>
        </div>

        <div className="tech-icons" style={{ color: darkMode ? "#fff" : "#000" }}>
          <DiCss3 /><h6>CSS3</h6>
        </div>

        <div className="tech-icons" style={{ color: darkMode ? "#fff" : "#000" }}>
          <DiReact /> <h6>React</h6>
        </div>

        <div className="tech-icons" style={{ color: darkMode ? "#fff" : "#000" }}>
          <SiRedux /><h6>Redux</h6>
        </div>

        <div className="tech-icons" style={{ color: darkMode ? "#fff" : "#000" }}>
          <DiMongodb /><h6>MongoDB</h6>
        </div>

        <div className="tech-icons" style={{ color: darkMode ? "#fff" : "#000" }}>
          <DiNodejs /><h6>NodeJS</h6>
        </div>
        <div className="tech-icons" style={{ color: darkMode ? "#fff" : "#000" }}>
          <SiExpress/>
          <h6>ExpressJS</h6>
        </div>
        <div className="tech-icons" style={{ color: darkMode ? "#fff" : "#000" }}>
          <SiJava/> <h6>Java</h6>
        </div>
        <div className="tech-icons" style={{ color: darkMode ? "#fff" : "#000" }}>
          <SiPython/> <h6>Python</h6>
        </div>
        <div className="tech-icons" style={{ color: darkMode ? "#fff" : "#000" }}>
          <SiPostman/> <h6>Postman</h6>
        </div>
        <div className="tech-icons" style={{ color: darkMode ? "#fff" : "#000" }}>
          <DiNpm /><h6>Npm </h6>
        </div>

        <div className="tech-icons" style={{ color: darkMode ? "#fff" : "#000" }}>
          <DiBootstrap /><h6>Bootstrap</h6>
        </div>
        <div className="tech-icons" style={{ color: darkMode ? "#fff" : "#000" }}>
          <DiGit /><h6>Git</h6>
        </div>

      </div>
      {/* </div> */}
    </section>

  );
};

export default Skills;
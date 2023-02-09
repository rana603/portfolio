import React, { useContext } from 'react'
import Work from './Work'
import './Project.css';
import { DarkModeContext } from '../../Context/Context';

function Projects() {
  const[darkMode,setDarkMode]=useContext(DarkModeContext);
  return (
    <section className='work section' id='projects'>
      <h2 className='section_title' style={{ color:darkMode? "#fff":"#000"}}>Projects</h2>
      <h5 className='section_subtitle'>Most Recent Projects</h5>
      <Work/>
    </section>
  )
}

export default Projects

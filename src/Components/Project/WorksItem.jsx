import React, { useContext } from 'react';
import { DarkModeContext } from '../../Context/Context';
import './Project.css';

function WorksItem({ item }) {
    const [darkMode,setDarkMode]=useContext(DarkModeContext);
    return (
        <div className='work_card' key={item.id}  style={{ backgroundColor: darkMode ? "#000" : "#fff" }} >
            <img src={item.image} alt="" className='work_img' />
            <h3 style={{ color: darkMode ? "#fff" : "#000" }}  className='work_title'>{item.title}</h3>
            <p className='work_desc'>{item.desc} </p>
            <p className="projects_desc">
                <b>Tech Stack</b> - {item.Tech}
              </p>
           <div className='work_link'>
            <a href={item.link} className='work_button'><i style={{ color: darkMode ? "#fff" : "#000"  }}  className="bx bx-link"></i></a>
            <a href={item.github} className='work_button'> <i style={{ color: darkMode ? "#fff" : "#000" }}  className="bx bxl-github"></i></a>
            </div>
        </div>
    )
}

export default WorksItem

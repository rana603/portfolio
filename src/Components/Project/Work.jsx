import React, { useContext, useEffect, useState } from 'react'
import { projectsData, projectsNav } from './Data';
import WorksItem from './WorksItem';
import './Project.css';
import { DarkModeContext } from '../../Context/Context';

function Work() {
  const[darkMode,setDarkMode]=useContext(DarkModeContext);
  const [item,setitem]=useState({name:'all'});
  const[projects,setProjects]=useState([]);
  const[active,setActive]=useState(0);

  useEffect(()=>{
    if(item.name=='all'){
      setProjects(projectsData);

    }else{
      const newProjects=projectsData.filter((project)=>{
        return project.category===item.name;
      });
      setProjects(newProjects);
    }
  },[item]);
  const handleClick=(e,index)=>{
    setitem({name:e.target.textContent});
    setActive(index);
  }
  return (
    <div>
      <div className='work_filters' >

        {projectsNav.map((item, index) => {
          return <span style={{ color: darkMode ? "#fff" : "#000" }} 
          onClick={(e)=>{
            handleClick(e,index);
          }}
          className={`${active===index ? 'active-work' :''}work_item`}  key={index}>{item.name}
          </span>
        })}
      </div>
      <div className='work_container container grid' >
        {projects.map((item) => {
          return <WorksItem  item={item} key={item.id} />
        })}

      </div>
    </div>
  )
}

export default Work;

import React, { useContext } from 'react'
import { DarkModeContext } from '../../Context/Context';
import './Style.css'

function Scroll() {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  return (
    <div className='home_scroll'>
      <span className='home_scroll_name' style={{color:darkMode?"#ffff":"#000"}}>Scroll Down</span>
        <a href="#about" className='home_scroll-button'>
        
        <i 
        // className='home_scroll_icon'
         className="fa-solid fa-arrow-down"></i>
        </a>
       
      
    </div>
  )
}

export default Scroll

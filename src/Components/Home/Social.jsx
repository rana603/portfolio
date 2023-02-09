import React from 'react'
import './Style.css'
import { useContext } from 'react';
import { DarkModeContext } from '../../Context/Context';
import { SiLeetcode } from 'react-icons/si';


function Social() {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  return (
    <div className='home_social'>

      <div className='home_social_icon'>{darkMode ?
        <img height={"10px"} width={"35px"} src="https://upload.wikimedia.org/wikipedia/commons/8/8e/LeetCode_Logo_1.png?20190719232508" alt="" srcset="" />
        : <img height={"10px"} width={"30px"}
          src="https://cdn.iconscout.com/icon/free/png-256/leetcode-3628297-3031905.png" alt="" />}

      </div>
      <a href="https://github.com/rana603"
        className='home_social_icon'
        target="_blank">
        <i style={{ color: darkMode ? "#fff" : "#000" }} className="fa-brands fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/gautam-singh-632512164/"
        className='home_social_icon'
        target="_blank">
        <i style={{ color: darkMode ? "#fff" : "#000"  }} className="fa-brands fa-linkedin"></i>
      </a>

    </div>
  )
}

export default Social

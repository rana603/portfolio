import React, { useContext } from 'react'
import { DarkModeContext } from '../../Context/Context'
import { Type } from './Type'

function Data() {
    const[darkMode,setDarkMode]=useContext(DarkModeContext)
    return (
        <>
            <div className="home_data"  style={{ backgroundColor: darkMode ? "#000" : "#fff" }}>
                <h1 className="home_title" style={{color:darkMode?"#ffff":"#000"}}>Hello!<span className="wave">👋🏻</span></h1>
                <h3 style={{color:darkMode?"#A9A9A9":"#000"}}>I am  <span className="home_subtitle" style={{color:darkMode?"#A9A9A9":"#000"}}> Gautam Singh</span> </h3>
                <h3 className="heading_subtitle"style={{color:darkMode?"#ffff":"#808080"}} >
                    {/* ---------Full Stack Developer--------- */}
                 <Type/>
                    </h3>
                <p className='home_description'>slide down for Know more about me  </p>
                <a href="#contact" className='button button--flex'  >say hello   <i class="fa-solid fa-paper-plane"></i></a>
                {/* <button  id="#contact"  className='button button--flex'> Say Hello  <i  class="fa-solid fa-paper-plane"></i></button> */}
            </div>

            {/* <div className="homeLogo">
                <div>
                    <img src="https://media.licdn.com/dms/image/C4D03AQGauwCyQcirHA/profile-displayphoto-shrink_800_800/0/1649357318858?e=2147483647&v=beta&t=9Hp97TwN9VLiLX8Z9_RlxJH5c7AkCtp6tBojlwsAa-M" className="img-fluid myImage" alt="laptop" />

                </div>
            </div> */}

        </>
    )
}

export default Data

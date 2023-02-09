import React, { useContext } from 'react'
import { DarkModeContext } from '../../Context/Context';
import Data from './Data'
import Scroll from './Scroll';
import Social from './Social'
import './Style.css';
import img from './gsr.png';

function Home() {
    const[darkMode,setDarkMode]=useContext(DarkModeContext);
    return (
        <section className="home section" id="home" >
            <div className="home_container grid">
                <div className="home_content grid">
                    <Social />
                    
                    <div className='home_img'>
                        <img  className='home_img' src={img} alt="laptop" />
                    </div>
                    <Data />

                </div>
                <Scroll/>
            </div>
        </section>
    )
}

export default Home

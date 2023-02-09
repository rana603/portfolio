import React, { useState } from 'react';
import  { useContext } from 'react'
import { DarkModeContext } from '../../Context/Context';
import './Qualification.css';

function Qualification() {
    const[darkMode,setDarkMode]=useContext(DarkModeContext);
    const [togle, setTogle] = useState(1);
    const togleTab = (index) => {
        setTogle(index);
    };
    return (
        <section className='qualification ' id='qualification'>
            <h2 className='section_title' style={{ color:darkMode? "#fff":"#000"}}>Qualification</h2>
            <h5 className='section_subtitle'>My personal Journey</h5>
            <div className='qualification_container container'>
                <div className='qualification_tabs'>
                    <div
                    style={{ color:darkMode? "#fff":"#000"}}
                    className={togle === 1
                        ? "qualification_button qualification_active button--flex"
                        : "qualification_button button--flex"}
                        onClick={() => togleTab(1)}><i style={{ color: darkMode ? "#fff" : "#000" }}  class="fa-solid fa-graduation-cap"></i>
                        Education
                    </div>
                    <div 
                    style={{ color:darkMode? "#fff":"#000"}}
                    className={togle === 2
                        ? "qualification_button qualification_active button--flex"
                        : "qualification_button button--flex"}
                        onClick={() => togleTab(2)}>
                            {/* <i class="fa-solid fa-briefcase-blank"></i> */}
                            <i style={{ color: darkMode ? "#fff" : "#000" }} class="fa-solid fa-briefcase"></i> 
                        Experience
                    </div>

                </div>
                <div className='qualification_sections'>
                    <div className={togle === 1 ?
                        "qualification_content qualification_content-active"
                        : "qualification_content"}>
                        {/* qualification_content-active */}
                        <div className='qualification_data'>
                            <div >
                                <h3 className='qualification_title' style={{ color:darkMode? "#fff":"#000"}}>MASAI SCHOOL</h3>
                                <span className='qualification_subtitle'> Full Stack Web Development</span>
                                <span className='qualification_subtitle'>Banglore</span>
                                <div className='qualification_calender'>
                                <i style={{ color: darkMode ? "#fff" : "#000" }}  class="fa-sharp fa-solid fa-calendar-days"></i> june 2022-Present
                                </div>
                            </div>
                            <div>
                                <span className='qualification_rounder'></span>
                                <span className='qualification_line'></span>
                            </div>
                        </div>
                        <div className='qualification_data'>
                            <div></div>
                            <div>
                                <span className='qualification_rounder'></span>
                                <span className='qualification_line'></span>
                            </div>
                            <div >
                                <h3 className='qualification_title' style={{ color:darkMode? "#fff":"#000"}}>IIT Kanpur</h3>
                                <span className='qualification_subtitle'>M.Tech (Chemical Engineering)</span>
                                <span className='qualification_subtitle'>CGPA :6.67</span>
                                <div className='qualification_calender'>
                                <i style={{ color: darkMode ? "#fff" : "#000" }}  class="fa-sharp fa-solid fa-calendar-days"></i>  2020-2022
                                </div>
                            </div>
                            {/* <div>
                                <span className='qualification_rounder'></span>
                                <span className='qualification_line'></span>
                            </div> */}
                        </div>

                        <div className='qualification_data'>
                            {/* <div></div>

                            <div>
                                <span className='qualification_rounder'></span>
                                <span className='qualification_line'></span>
                            </div> */}
                            <div>
                                <h3 className='qualification_title'style={{ color:darkMode? "#fff":"#000"}}>BTKIT Dwarahat</h3>
                                <span className='qualification_subtitle'>B.Tech (Chemical Engineering)</span>
                                <span className='qualification_subtitle'>PERCENTAGE:60%</span>
                                <div className='qualification_calender'>
                                <i style={{ color: darkMode ? "#fff" : "#000" }}  class="fa-sharp fa-solid fa-calendar-days"></i> 2014-18
                                </div>
                            </div>
                            <div>
                                <span className='qualification_rounder'></span>
                                <span className='qualification_line'></span>
                            </div>
                        </div>
                        <div className='qualification_data'>
                            <div></div>
                            <div>
                                <span className='qualification_rounder'></span>
                                <span className='qualification_line'></span>
                            </div>
                            <div>
                                <h3 className='qualification_title'style={{ color:darkMode? "#fff":"#000"}}>GIC Bijity</h3>
                                <span className='qualification_subtitle'>Intermediate</span>
                                <span className='qualification_subtitle'>PERCENTAGE :67.2%</span>
                                <div className='qualification_calender'>
                                <i style={{ color: darkMode ? "#fff" : "#000" }}  class="fa-sharp fa-solid fa-calendar-days"></i>  2013-14
                                </div>
                            </div>
                            {/* <div>
                                <span className='qualification_rounder'></span>
                                <span className='qualification_line'></span>
                            </div> */}

                        </div>
                        <div className='qualification_data'>
                            {/* <div></div> */}
                            {/* <div>
                                <span className='qualification_rounder'></span>
                                <span className='qualification_line'></span>
                            </div> */}
                            <div>
                                <h3 className='qualification_title'style={{ color:darkMode? "#fff":"#000"}}>GIC Bijity</h3>
                                <span className='qualification_subtitle'>High School</span>
                                <span className='qualification_subtitle'>PERCENTAGE :76.6%</span>
                                <div className='qualification_calender'>
                                <i style={{ color: darkMode ? "#fff" : "#000" }}  class="fa-sharp fa-solid fa-calendar-days"></i> 2011-12
                                </div>

                                {/* <div>
                                    <span className='qualification_rounder'></span>
                                    <span className='qualification_line'></span>
                                </div> */}
                            </div>
                            <div>
                                <span className='qualification_rounder'></span>
                                <span className='qualification_line'></span>
                            </div>
                        </div>
                    </div>
                    <div className={togle === 2 ?
                        "qualification_content qualification_content-active"
                        : "qualification_content"}>
                        <div className='qualification_data'>
                            <div>
                                <h3 className='qualification_title'style={{ color:darkMode? "#fff":"#000"}}>The Spark Foundation</h3>
                                <span className='qualification_subtitle'>Web Developer Intern</span>
                                <div className='qualification_calender'>
                                <i style={{ color: darkMode ? "#fff" : "#000" }}  class="fa-sharp fa-solid fa-calendar-days"></i>  june 2022-july 2022
                                </div>
                            </div>
                            <div>
                                <span className='qualification_rounder'></span>
                                <span className='qualification_line'></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification

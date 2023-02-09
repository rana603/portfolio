import React, { useContext, useState } from 'react';
import { DarkModeContext } from '../../Context/Context';
import './Footer.css'

function Footer() {
    const [darkMode, setDarkMode] = useContext(DarkModeContext);
    return (
        <>
            <footer className='footer' id='footer' style={{
                backgroundColor: darkMode ? "#000" : "#fff",
            }}>
                <div className='footer_container container'>
                    <h1 className='footer_title' style={{ color: darkMode ? "#fff" : "#000" }} >Gautam Singh</h1>
                    <ul className='footer_list'>
                        <li>
                            <a href="#about" className='footer_link'>About</a>
                        </li>
                        <li>
                            <a href="#Skill" className='footer_link'>Skill</a>
                        </li>
                        <li>
                            <a href="#project" className='footer_link'>Project</a>
                        </li>
                    </ul>
                    <div className="footer_social">
                        <a href="https://www.linkedin.com/in/gautam-singh-632512164/"
                            className='footer_social_icon'
                            target="_blank">
                            <i style={{ color: darkMode ? "#fff" : "#000" }} className="fa-brands fa-linkedin-in"></i>
                        </a>
                        {/* <a  href="https://leetcode.com/gr365789/"
                        className='footer_social_icon'
                        target="_blank">
                        <img height={"10px"} width={"30px"} src="https://cdn.iconscout.com/icon/free/png-256/leetcode-3628297-3031905.png" alt="" />
                    </a> */}
                        {darkMode ?
                            <a href="https://leetcode.com/gr365789/"
                                className='footer_social_icon'
                                target="_blank"><img height={"10px"} width={"35px"} src="https://upload.wikimedia.org/wikipedia/commons/8/8e/LeetCode_Logo_1.png?20190719232508" alt="" srcset="" />
                            </a> : <a href="https://leetcode.com/gr365789/"
                                className='footer_social_icon'
                                target="_blank"><img height={"10px"} width={"30px"}
                                    src="https://cdn.iconscout.com/icon/free/png-256/leetcode-3628297-3031905.png" alt="" /></a>}
                        <a href="https://github.com/rana603"
                            className='footer_social_icon'
                            target="_blank">
                            <i style={{ color: darkMode ? "#fff" : "#000" }} className="fa-brands fa-github"></i>

                        </a>

                    </div>
                    <span className='footer_copy'>&#169;Copticalcoder. all rights reserved</span>
                </div>
            </footer>

        </>
    )
}

export default Footer

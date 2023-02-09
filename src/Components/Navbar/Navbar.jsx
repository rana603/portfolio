import React, { useContext, useState } from 'react';
import { DarkModeContext } from '../../Context/Context';
import './Navbar.css';

function Navbar() {
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");
    const [darkMode, setDarkMode] = useContext(DarkModeContext);
    return (
        <header className='header' style={{ backgroundColor: darkMode ? "#000" : "#fff" }}>
            <nav className='nav ' >
                <a href="#home" className='nav_logo' style={{ color: darkMode ? "#fff" : "#000" }}>Gautam</a>
                <div className={Toggle ? "nav_menu show-menu" : "nav_menu"} style={{ backgroundColor: darkMode ? "#000" : "#fff" }}>
                    <ul className='nav_list grid'>
                        <li className='nav_item'>
                            <a href=" #home"
                                style={{ color: darkMode ? "#fff" : "#000" }}
                                onClick={() => setActiveNav('#home')}
                                className={activeNav === "#home"
                                    ? "nav_link active-link"
                                    : "nav_link"}>
                                <i style={{ color: darkMode ? "#fff" : "#000" }} id="nav_icon"
                                    className="fa-solid fa-house-user nav_icon"></i>Home
                            </a>
                        </li>
                        <li className='nav_item'>
                            <a href="#about"
                                style={{ color: darkMode ? "#fff" : "#000" }}
                                onClick={() => setActiveNav('#about')}
                                className={
                                    activeNav === "#about"
                                        ? "nav_link active-link"
                                        : "nav_link"}>
                                <i id="nav_icon"
                                    style={{ color: darkMode ? "#fff" : "#000" }}
                                    className="fa-solid fa-user-large nav_icon"></i>About
                            </a>
                        </li>
                        <li className='nav_item'>
                            <a href=" #qualification"
                                style={{ color: darkMode ? "#fff" : "#000" }}
                                onClick={() => setActiveNav('#qualification')}
                                className={
                                    activeNav === "#qualification"
                                        ? "nav_link active-link"
                                        : "nav_link"}>
                                <i id="nav_icon"
                                    style={{ color: darkMode ? "#fff" : "#000" }}
                                    className="fa-solid fa-user-graduate nav_icon"></i>Qualification
                            </a>
                        </li>
                        <li className='nav_item'>
                            <a href=" #skills"
                                style={{ color: darkMode ? "#fff" : "#000" }}
                                onClick={() => setActiveNav('#skills')}
                                className={activeNav === "#skills"
                                    ? "nav_link active-link"
                                    : "nav_link"}>
                                <i id="nav_icon"
                                    style={{ color: darkMode ? "#fff" : "#000" }}
                                    className="fa-solid fa-laptop-code nav_icon"></i>Skills
                            </a>
                        </li>
                        <li className='nav_item'>
                            <a href=" #projects"
                                style={{ color: darkMode ? "#fff" : "#000" }}
                                onClick={() => setActiveNav('#projects')}
                                className={activeNav === "#projects"
                                    ? "nav_link active-link"
                                    : "nav_link"}>
                                <i id="nav_icon"
                                    style={{ color: darkMode ? "#fff" : "#000" }}
                                    className="fa-solid fa-list-check nav_icon"></i>Projects
                            </a>
                        </li>
                        <li className='nav_item'>
                            <a href=" #contact"
                                style={{ color: darkMode ? "#fff" : "#000" }}
                                onClick={() => setActiveNav('#contact')}
                                className={activeNav === "#contact"
                                    ? "nav_link active-link"
                                    : "nav_link"}>
                                <i id="nav_icon"
                                    style={{ color: darkMode ? "#fff" : "#000" }}
                                    className="fa-solid fa-address-book nav_icon"></i>Contacts
                            </a>

                        </li>
                    </ul>
                    <i id="nav_close"
                        style={{ color: darkMode ? "#fff" : "#000" }}
                        className="fa-solid fa-xmark nav_close"

                        onClick={() => showMenu(!Toggle)}
                    ></i>
                </div>
                <div className='nav_toggle'

                    onClick={() => showMenu(!Toggle)}>

                    <i style={{ color: darkMode ? "#fff" : "#000" }} className="fa-solid fa-users-line nav_toggle"></i>


                </div>
                {!darkMode ? (

                    <svg
                        className='dark-mode'
                        width="25px"
                        height="35px"
                        viewBox="0 0 35 35"
                        fill="#888"
                        onClick={() => setDarkMode(true)}
                        data-name="Layer 2"
                        style={{
                            marginRight: "16px",
                            cursor: "pointer",
                            position: "fixed",
                            right: "40px",
                            top: "20px"
                        }}
                        id="Layer_2"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M18.44,34.68a18.22,18.22,0,0,1-2.94-.24,18.18,18.18,0,0,1-15-20.86A18.06,18.06,0,0,1,9.59.63,2.42,2.42,0,0,1,12.2.79a2.39,2.39,0,0,1,1,2.41L11.9,3.1l1.23.22A15.66,15.66,0,0,0,23.34,21h0a15.82,15.82,0,0,0,8.47.53A2.44,2.44,0,0,1,34.47,25,18.18,18.18,0,0,1,18.44,34.68ZM10.67,2.89a15.67,15.67,0,0,0-5,22.77A15.66,15.66,0,0,0,32.18,24a18.49,18.49,0,0,1-9.65-.64A18.18,18.18,0,0,1,10.67,2.89Z" />
                    </svg>
                ) : (
                    <svg
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="25px"
                        fill="#888"
                        onClick={() => {
                            setDarkMode(false);
                        }}
                        style={{
                            marginRight: "16px",
                            cursor: "pointer",
                            position: "fixed",
                            right: "40px",
                            top: "20px"
                        }}
                        height="35px"
                        viewBox="0 0 876 876"
                    >
                        <g>
                            <circle cx="438" cy="438" r="246" />
                            <path
                                d="M420.5,163h35c11.046,0,20-8.954,20-20V20c0-11.046-8.954-20-20-20h-35c-11.046,0-20,8.954-20,20v123
        C400.5,154.046,409.454,163,420.5,163z"
                            />
                            <path
                                d="M713,420.5v35c0,11.046,8.954,20,20,20h123c11.046,0,20-8.954,20-20v-35c0-11.046-8.954-20-20-20H733
        C721.954,400.5,713,409.454,713,420.5z"
                            />
                            <path
                                d="M455.5,876c11.046,0,20-8.954,20-20V733c0-11.046-8.954-20-20-20h-35c-11.046,0-20,8.954-20,20v123
        c0,11.046,8.954,20,20,20H455.5z"
                            />
                            <path
                                d="M20,475.5h123c11.046,0,20-8.954,20-20v-35c0-11.046-8.954-20-20-20H20c-11.046,0-20,8.954-20,20v35
        C0,466.546,8.954,475.5,20,475.5z"
                            />
                            <path
                                d="M644.829,255.92c7.811,7.81,20.474,7.811,28.284,0l86.975-86.974c7.811-7.812,7.811-20.474,0-28.284l-24.749-24.749
        c-7.811-7.811-20.474-7.811-28.284,0l-86.975,86.974c-7.812,7.81-7.812,20.474,0,28.284L644.829,255.92z"
                            />
                            <path
                                d="M735.338,760.087l24.749-24.749c7.811-7.81,7.811-20.474,0-28.284l-86.975-86.974c-7.812-7.811-20.475-7.811-28.284,0
        l-24.749,24.749c-7.812,7.811-7.812,20.474,0,28.284l86.975,86.974C714.865,767.898,727.528,767.898,735.338,760.087z"
                            />
                            <path
                                d="M168.946,760.087l86.975-86.974c7.812-7.811,7.812-20.475,0-28.284l-24.749-24.749c-7.811-7.811-20.474-7.811-28.284,0
        l-86.975,86.974c-7.811,7.812-7.811,20.475,0,28.284l24.749,24.749C148.472,767.898,161.135,767.898,168.946,760.087z"
                            />
                            <path
                                d="M202.887,255.92c7.811,7.811,20.474,7.81,28.284,0l24.749-24.749c7.812-7.81,7.812-20.474,0-28.284l-86.975-86.974
        c-7.811-7.811-20.474-7.811-28.284,0l-24.749,24.749c-7.811,7.81-7.811,20.474,0,28.284L202.887,255.92z"
                            />
                        </g>
                    </svg>
                )}
            </nav>
        </header>

    )
}

export default Navbar

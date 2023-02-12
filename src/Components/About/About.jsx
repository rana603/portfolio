import React, { useContext } from 'react';
import { DarkModeContext } from '../../Context/Context';
import './About.css';
import img from "./gsr.png";

function About() {
    const [darkMode, setDarkMode] = useContext(DarkModeContext);
    return (
        <section className='about section' id='about'>
            <h2 className='sectionn_title ' style={{ color: darkMode ? "#fff" : "#000" }}>About Me</h2>
            <h4 className='section_subtitle'>My Introduction</h4>
            <div className='about_container container grid'>

                <img
                    // src={img}
                    // src="https://camo.githubusercontent.com/61491d59e71fec5c794945fed916a4a682b6c0404fc31f30b08a0d919c558404/68747470733a2f2f696d616765732e73717561726573706163652d63646e2e636f6d2f636f6e74656e742f76312f3537363966633430316236333162616231616464623261622f313534313538303631313632342d5445363451474b524a4738535741495553374e532f6b6531375a77644742546f6464493870446d34386b506f73776c7a6a53564d4d2d53784f703743563539425a772d7a505067646e346a557756634a45315a7657515578776b6d794578676c4e714770304976544a5a616d574c49327a76595748384b332d735f3479737a63703272795449304871544f6161556f68724938504936465879386339505774426c7141566c555335697a7064634958445a71445976707252715a32395077306f2f636f64696e672d667265616b2e676966"
                    src="https://media.tenor.com/qJ5evVs-_uUAAAAC/coding.gif"
                    className="about_img " alt="laptop" />

                <div className='about_data'>

                    <p className='about_description'>Hi folks | Meet me !! <br />
                        {/* I am <span className="purple"> Gautam Singh </span> */}
                        I always try to learn new things about anything and everything.
                        My biggest strength is my self-confidence which keeps me motivated to take any challenge ahead.
                        currently, i am looking forward to working in a
                        challenging role in a growth-oriented organization while gaining valuable
                        work experience in integrating strategies to contribute to the growth and
                        success of the organization.
                    </p>
                    <a className='button button--flex' href="https://drive.google.com/file/d/1LsXL6CwGK4aSXm-yni_jLV4rVzW9BTaM/view?usp=share_link" target="_blank">download CV</a>

                </div>
            </div>

        </section>
    )
}

export default About;

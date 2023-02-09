import React, { useContext } from 'react';
import { DarkModeContext } from '../../Context/Context';
import './About.css';
import img from "./gsr.png";

function About() {
    const[darkMode,setDarkMode]=useContext(DarkModeContext);
    return (
        <section className='about section' id='about'>
        <h2 className='sectionn_title ' style={{ color:darkMode? "#fff":"#000"}}>About Me</h2>
            <h4 className='section_subtitle'>My Introduction</h4>
            <div className='about_container container grid'>

                <img 
                src={img}
                // src="https://media.licdn.com/dms/image/C4D03AQGauwCyQcirHA/profile-displayphoto-shrink_800_800/0/1649357318858?e=2147483647&v=beta&t=9Hp97TwN9VLiLX8Z9_RlxJH5c7AkCtp6tBojlwsAa-M"
                     className="about_img " alt="laptop" />  
               
                    <div className='about_data'>

                        <p className='about_description'>Hi there !! <br />
                            I am <span className="purple"> Gautam Singh </span>
                            a Self-motivated and result-oriented Full stack web developer,
                            {/* with proficiency in MERN stack. Proficient in creating user-centric products 
             using my skills and knowledge.  */}
                            <br />
                            I graduated in Chemical engineering in 2022
                            from IIT Kanpur. After graduation, I have done 30 weeks of 9-9-6 full-time Full stack web development training ,
                            where I got more than 1200 hours of hands-on coding experience, in HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJS, and Mongo technologies.
                            <br />
                            {/* On the other hand, I try to exceed my superior’s expectations with high-quality work. Being a fast learner I quickly pick up knowledge, 
             I am good at team management.
            <br/>           
           Looking forward to working in a 
            challenging role in a growth-oriented organization while gaining valuable
             work experience in integrating strategies to contribute to the growth and
              success of the organization.          */}
                        </p>
                        <a className='button button--flex' href="https://drive.google.com/file/d/1Lw6uNktCFZ9ZL19cGGOkMs-Jrp6o_snv/view?usp=sharing"  target="_blank">download CV</a>

                    </div>
                </div>
          
        </section>
    )
}

export default About;

import React, { useContext, useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { DarkModeContext } from '../../Context/Context';
function Contact() {
    const[darkMode,setDarkMode]=useContext(DarkModeContext);
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nabi0dr', 'template_z8xx39v', form.current, '2XySdtJF3DtWvbTXH')
      .then((result) => {
          console.log(result.text);
          alert("message sent")
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <section  className='contact section' id='contact'>
            <h2 className='section_title' style={{color:darkMode? "#fff":"#000"}}>Get in Touch</h2>
            <span className='section_subtitle'>contact Me</span>
            <div className='contact_container container grid'>
                <div className='contact_content'>
                    <h3 className='contact_title' style={{ color: darkMode ? "#fff" : "#000" }} > talk to me</h3>
                    <div className='contact_info' >
                        <div className='contact_card' style={{ backgroundColor: darkMode ? "#000" : "#fff" ,border:darkMode? "1px solid #fff" :"1px solid #000"}} >
                        <i style={{ color: darkMode ? "#fff" : "#000" }}  class="fa-solid fa-envelope"></i>
                        
                            <h3 className='contact_card-title'>Email</h3>
                            <span className='contact_card-data'>Gautam.rana603@gmail.com</span><br />
                            <a className="contact_button">Write Me</a>
                        </div>
                        <div className='contact_card' style={{ backgroundColor: darkMode ? "#000" : "#fff",border:darkMode? "1px solid #fff" :"1px solid #000" }} >
                        <i style={{ color: darkMode ? "#fff" : "#000" }}   class="fa-brands fa-instagram"></i>
                        {/* <i style={{color}} class="fa-brands fa-instagram"></i> */}
                            <h3 className='contact_card-title'>Instagram</h3>
                            <span className='contact_card-data'><a href="https://www.instagram.com/gautam_rana_603/">gautam_rana_603</a></span><br />
                            <a className="contact_button">Write Me </a>
                        </div>
                        <div className='contact_card' style={{ backgroundColor: darkMode ? "#000" : "#fff" ,border:darkMode? "1px solid #fff" :"1px solid #000" }} >
                        <i style={{ color: darkMode ? "#fff" : "#000" }}   class="fa-brands fa-whatsapp"></i>
                            <h3 className='contact_card-title'>WhatsApp</h3>
                            <span className='contact_card-data'>+919756650603</span><br />
                            <a className="contact_button">Write Me</a>
                        </div>

                    </div>

                </div>
                <div className='contact_content'>
                        <h3 className='contact_title' style={{ color: darkMode ? "#fff" : "#000" }} >Write me Your Project</h3>
                        <form ref={form} onSubmit={sendEmail}
                        className='contact_form' action="">
                            <div className='contact_form-div' style={{ backgroundColor: darkMode ? "#000" : "#fff" }} >
                                <label htmlFor="" className='contact_form-tag' style={{ backgroundColor: darkMode ? "#000" : "#fff" }} > Name </label>
                                <input type="text" name="Name" className='contact_form-input' placeholder='Write your Name'  style={{ backgroundColor: darkMode ? "#000" : "#fff",border:darkMode? "1px solid #fff" :"1px solid #000" }} required />
                            </div>
                            <div className='contact_form-div'>
                                <label htmlFor="" className='contact_form-tag' style={{ backgroundColor: darkMode ? "#000" : "#fff" }} >Email</label>
                                <input type="text" name="Email" className='contact_form-input' placeholder='Write your Email' style={{ backgroundColor: darkMode ? "#000" : "#fff",border:darkMode? "1px solid #fff" :"1px solid #000" }} required />
                            </div>
                            <div className='contact_form-div'>
                                <label htmlFor="" className='contact_form-tag' style={{ backgroundColor: darkMode ? "#000" : "#fff" }} >Project</label>
                                <textarea className='contact_form-inputs'  name="Project"  cols="30" rows="3" placeholder='Write Your Queries' style={{ backgroundColor: darkMode ? "#000" : "#fff",border:darkMode? "1px solid #fff" :"1px solid #000" }}  required></textarea>
                            </div>
                            <button className='button button--flex'> Say Hello <i style={{color:darkMode? "#fff":"#000"}} class="fa-solid fa-hand-wave" ></i></button>
                        </form>
                    </div>

            </div>

        </section>
    )
}

export default Contact

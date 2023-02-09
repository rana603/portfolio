
import { useContext } from 'react';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Scrollup from './Components/Footer/Scrollup';

import Home from './Components/Home/Home';

import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Project/Projects';
import Qualification from './Components/Qualification/Qualification';
import Skills from './Components/Skills/Skills';
import { DarkModeContext } from './Context/Context';




function App() {
  const[darkMode,setDarkMode]=useContext(DarkModeContext)
  return (
   
      <>
     <div style={{
        backgroundColor: darkMode ? "#000" : "#fff",
      }}>
      <Navbar/>
      <main className='main'>
        <Home/>
        <About/>
        <Skills/>
        <Qualification/>
        <Projects/>
        <Contact/>
      </main>
      <Footer/>
      <Scrollup/>
      </div>
      
      </>
      
  
  );
}

export default App;

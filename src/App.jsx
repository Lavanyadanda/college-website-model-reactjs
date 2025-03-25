
import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/navbar/Navbar'
import Hero from './Components/Hero/Hero';
import Program from './Components/programs/Program';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonal from './Components/Testimonals/Testimonal';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Videoplayer from './Components/Videoplayer/Videoplayer';
function App() {
  const [playstate,setPlaystate]=useState(false);

  return (
    <div >
      <Navbar/>
      <Hero/>
      <div className='container'> 
        <Title subtitle=" Our Programs" title="what we offer"/>
       <Program/>
       <About setPlaystate={setPlaystate}/>
       <Title subtitle=" Gallary" title="campus photos"/>
     <Campus/>
     <Title subtitle="tetsimonals" title="what student says"/>
    <Testimonal/>
    <Title subtitle="contact us" title="get in touch with us"/>
     <Contact/>
     <Footer/>
    
      </div>
      {/* <Videoplayer playstate={playstate} setPlaystate={setPlaystate}/> */}
    </div>
  
  );
}

export default App;

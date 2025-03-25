import React from 'react'
import './About.css';
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = ({setPlaystate}) => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} className="about_img"/>
            <img src={play_icon} className="play-icon" onClick={()=>{
              setPlaystate(true)
            }}/>

        </div>
        <div className='about-right'>
            <h3> About university</h3>
            <h4> Nuturing tomorow</h4>
            <p>jkbnmjhgvbnjhgv iuytfgcvb</p>

        </div>
    </div>
  )
}

export default About

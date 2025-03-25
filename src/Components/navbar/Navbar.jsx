import React,{useState,useEffect} from 'react'
import ReactDom from 'react-dom'
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll'; 
import './Navbar.css';
import menu from '../../assets/menu-icon.png'
function Navbar () {
    const [sticky,setSticky]=useState(false);
    useEffect(()=>{window.addEventListener('scroll',()=>{
        window.scrollY>50 ?setSticky(true):setSticky(false);
    })},[]);
    const [mobileMenu ,setMobileMenu]=useState(false);
    const toggleMenu=()=>{
    mobileMenu?setMobileMenu(false):setMobileMenu(true);

    }
  return (
    <div>
      <nav className={`container  ${sticky?'dark-nav': ''}`}> 
        <img src={logo} className='logo' />
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='program' smooth={true} offset={-250} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-250} duration={500}>About us</Link></li>
            <li><Link to='campus' smooth={true} offset={-250} duration={500}>Campus</Link></li>
            <li><Link to='testimonals' smooth={true} offset={-250} duration={500}>Testimonals</Link></li>
            <li><button className='btn'><Link to='contact' smooth={true} offset={-250} duration={500}>Contact Us</Link></button></li>
        </ul>
        <img src={menu} onClick={toggleMenu}className='menu-icon'/>
      </nav>
    </div>
  )
}

export default Navbar

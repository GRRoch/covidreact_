import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri' ;
import logo from '../../assets/newLogo.png';
import './navbar.css';
const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
      <div className="gpt3__navbar-links_logo">
      <img src={logo} alt="logo" />
      </div>
      <div className="gpt3__navbar-links_container">
        <p><a href="#home">Home</a></p>
        <p><a href="#wgpt3">More Information</a></p>
        <p><a href="#possibility">Testing</a></p>
        <p><a href="#features">Vaccinations</a></p>
        <p><a href="#blog">Volunteer</a></p>
        <p><a href="#donations">Donations</a></p>
      </div>
      </div>
      
    </div>
  )
};

export default Navbar
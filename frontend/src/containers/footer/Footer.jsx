import React from 'react';
import './footer.css';
import logo1 from '../../assets/newLogo.png';
import { RiAlignCenter } from 'react-icons/ri';
const Footer = () => {
  return (
    <div id='footer'>
        <div class = "picture2" >
      <img src={logo1} alt="/Logo"/>
      <br />
      <div id='logoText'>
      <p> © 2023 Covid-Answers</p>
      </div>
      <br /><br />
        </div>
          <br/>
        
    </div>
  )
}

export default Footer
import React from 'react';
import './moreInfo.css';
import logo1 from '../../assets/moreInfoBanner.webp';
import logo2 from '../../assets/handWashing.jpg';
import logo3 from '../../assets/maskNew.jpg';
const MoreInfo = () => {
  return (
    
    <div id="More Information">
      <br/>
      <h1>More Information</h1>
        <div class="pictureMoreInformation" >
        <h1>More Information</h1>
      <img src={logo1} alt="Students wearing masks in class raising their hands. /logo"/>
        </div>
      <div class="row">
        <div class="column" >
      <h2>What is Covid-19?</h2>
      <p>Covid-19 is a deadly disease caused by a virus named SARS-CoV-2. It can be contagious and spread quickly depending on how quick the public are able to adapt to precautions. It is primarily transmitted through infected individuals droplets caused by sneezing and coughing. While symptoms may be similar to the common flu, Covid-19 can quickly overcome the body’s immune system leading to death.
      </p>
        </div>
        <div class="column" >
      <h2>How to wash your hands</h2>
      <img src={logo2} alt="infographic explaining how to wash your hands effectly"/>
        </div>
      <div class="column" >
      <h2>Symptoms</h2>
        <p>Fever or chills</p>
        <p>Cough</p>
        <p>Shortness of breath or difficulty breathing</p>
        <p>Fatigue</p>
        <p>Muscle or body aches</p>
        <p>Headache</p>
      </div>
      </div> 
      
    <div class="column">
        <h2>How to protect yourself</h2>
        <p>To protect yourself and others from Covid-19 individuals are recommended to wear a mask in public to protect from infected droplets and reduce spread. Individuals should also wash their hands frequently as well as schedule an appointment for vaccination. In addition, social distancing is recommended to help reduce spread through infected droplets in the air.</p>
          </div>
          <div class="column" >
            <h2>How to wear a mask</h2>
             <img src={logo3} alt="Infographic how to wear a mask properly"/><br/><br/><br/>
            <br/><br/><br/>
            </div>
              <div class="column" >
            <h2>How does it spread?</h2>
            <p>Covid-19 primarily spreads through infected droplets transmitted through the air and surfaces. A common way Covid-19 transmits is through contaminated public surfaces such as handrails, door handles, and even handshakes. When individuals do not wear masks in public they increase their likelihood of exposure through infected droplets produced by infected individuals.</p>
            </div>   
    
          </div>
  )
}

export default MoreInfo
// use padding, margin, box model to keep compt seperate. Investigate divider section  options.
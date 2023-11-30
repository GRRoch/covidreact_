import React from 'react';
import './moreInfo.css';
const MoreInfo = () => {
  return (
    <div id='More Information'>
        <br />
        <h1> More Information</h1>
       <div class = "pictureMoreInformation" >
       <img src={logo1} alt="Students wearing masks in class raising their hands. /logo" />
       </div>
        <div class = "column" >
          <h1>What is Covid-19</h1>
          <p>Covid-19 is a deadly disease caused by a virus named SARS-CoV-2. It can be contagious and spread quickly depending on how quick the public are able to adapt to precautions. It is primarily transmitted through infected individuals droplets caused by sneezing and coughing. While symptoms may be similar to the common flu, Covid-19 can quickly overcome the body’s immune system leading to death.
      </p>
        </div>
        <div class = "column" >
          <h1>How to wash your hands</h1>
          <img src={logo2} alt="infographic explaining how to wash your hands effectly" />
        </div>
        <div class = "column" >
        <h1>Symptoms</h1>
        <p>Fever or chills</p>
        <p>Cough</p>
        <p>Shortness of breath or difficulty breathing</p>
        <p>Fatigue</p>
        <p>Muscle or body aches</p>
        <p>Headache</p>
        </div>


    </div>
  )
}

export default MoreInfo
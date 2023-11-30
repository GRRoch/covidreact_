import React from 'react';
import './vaccinations.css';
import logo1 from '../../assets/volunteerColorfulHands.png';
const Vaccinations = () => {
  return (
    <div id = "Vaccinations">
      <br/>
      <h1>Volunteer</h1>
      <div class = "pictureVolunteer" >
        <img src={logo1} alt="Different colored hands touching white wall. /logo"/>
        </div>
      <div class="row">
        <div class="column">
          <h2>American Red Cross</h2>
          <p>The Red Cross is always in need of blood donors. Blood donations are especially important during the pandemic.</p>
          <a href="https://www.redcross.org/" target="_blank"><button type="button" class="donate-button">Volunteer</button></a>
        </div>

        <div class="column">
          <h2>Meals on Wheels</h2>
          <p>Meals on Wheels provides meals to homebound people, such as those that are immunocompromised during the pandemic. Volunteers can help by cooking, packing, and/or delivering meals.</p>
          <a href="https://www.mealsonwheelsamerica.org/" target="_blank"><button type="button" class="donate-button">Volunteer</button></a>
        </div>

        <div class="column">
          <h2>San Bernardino County Volunteer Hub</h2>
          <p>San Bernardino County is always looking for volunteers to help locally with general support.</p>
          <a href="https://hr.sbcounty.gov/volunteerhub/" target="_blank"><button type="button" class="donate-button">Volunteer</button></a>
        </div>    
      </div>

    </div>
  )
}

export default Vaccinations
// figure out the styling in jsx for buttons
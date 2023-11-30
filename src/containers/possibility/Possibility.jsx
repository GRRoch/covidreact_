import React from 'react';
import './possibility.css';
import logo1 from '../../assets/donateItems.jpg';

const Possibility = () => {
  return (
    <div id ='Donations'>
        <br />
        <h1>Donations</h1>
      <div class = "pictureDonation">
        <img src={logo1} alt="A picture of a box with donation written across among other donation items. /logo"/>
          </div>
      <div class="row">

        <div class="column">
          <h2>Inland Empire Community Foundation</h2>
          <p>A local non-profit organization dedicated to improving the lives of people in the Inland Empire. Has a number of funds established to support the community during COVID-19.</p>
          <a href="https://inlandempire.fcsuite.com/erp/donate/list" target="_blank"><button type="button" class="donate-button">Donate Now</button></a>
        </div>
  
        <div class="column">
          <h2>Feeding America Riverside-San Bernardino</h2>
          <p>Feeding America distributes food to over 400 food banks and pantries in San Bernardino County.</p>
          <a href="https://www.feedingamericaie.org/donate" target="_blank"><button type="button" class="donate-button">Donate Now</button></a>
        </div>
  
        <div class="column">
          <h2>Salvation Army</h2>
          <p>The Inland Empire Division of the Salvation Army provides food distribution, rental assistance, and homeless services to people in need in the Inland Empire.</p>
          <a href="https://give-sdm.salvationarmy.org/give/173402/#!/donation/checkout" target="_blank"><button type="button" class="donate-button">Donate Now</button></a>
        </div>    
  
      </div>
     </div>


  
  )
}

export default Possibility
// figure out styling for jsx
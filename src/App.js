import React from 'react';

import { Footer, MoreInfo, Volunteer, Vaccinations, Testing, Header, Intro, Donations } from './containers';
import { Navbar } from './components';
import './App.css';

const App = () => (
    <div className = "App">
      <div className="gradient__bg">
      <Navbar />
      <Header />
        </div> 
        <div>
        <Intro/>
        <br/><br/><br/>
        </div>
        <div>
          <br/><br/>
        <MoreInfo />
        <br/><br/><br/><br/>
        </div>
        <div>
          <br/>
        <Testing />
        </div>
        <div>
        <Vaccinations />
        </div>
        <div>
        <Volunteer />
        </div>
        <div>
        <Donations />
        </div>
        <div>
        <Footer />
        </div>
    </div>
  );


export default App;
// Use the css to copy those styles into the css file but make sure to create desgnators ex. .pic1 .pic2 ect.
import React from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header, Intro } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';

const App = () => (
    <div className = "App">
      <div className="gradient__bg">
      <Navbar />
      <Header />
        </div> 
        <Intro/>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  );


export default App;
// Use the css to copy those styles into the css file but make sure to create desgnators ex. .pic1 .pic2 ect.
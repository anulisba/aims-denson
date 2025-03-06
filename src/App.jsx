import React, { useState } from 'react';

import './App.css';
import useImageLoader from './hooks/UseImageLoader';
import Loader from './pages/Loader';
import Landing from './pages/landing';

import AIM_LOGO from './assets/images/AIM LOGO.png';
import AboutUsBG from './assets/images/about-us-bg.jpg';
import Uniform from './assets/images/young-boy-getting-back-school.jpg';
import Gym from './assets/images/gym.jpg';
import Sports from './assets/images/sports.jpg';
import BgLanding from './assets/images/bg-landing.jpg';
import Contact from './assets/images/contact.jpg';

// List all image paths
const imageSources = [
  AIM_LOGO,
  AboutUsBG,
  Uniform,
  Gym,
  Sports,
  BgLanding,
  Contact
];

function App() {
  const isLoaded = useImageLoader(imageSources);

  return (
    <div className="App">
      {!isLoaded ? <Loader /> : <Landing />}
    </div>
  );
}

export default App;
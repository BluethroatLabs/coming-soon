import React from 'react';

import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import logo from '../src/assets/1-removebg-preview.png';
import './styles.css';

// import video
import videoBg from '../src/assets/video.mp4';

const googleFormURL = `https://docs.google.com/forms/d/e/1FAIpQLSdjb_Kuu4yQNQMvpDBVe8hzhrkVnIMxn-lGx5Ho1yA9V-bR9g/viewform?usp=sf_link`;

const App = () => {
  return (
    <div className='main'>
        <div className='overlay'></div>
        <video src={videoBg} autoPlay loop muted/>
        <div className='logo'>
            <img src={logo} />
            <h1>Launching Soon</h1>
            <h3>
              Pre-launch offer: Get a free high-level preliminary security review for your protocol when you register 
            </h3>
            <FlipClockCountdown
              className='flip-clock'
              to=
                {new Date().getTime() + Math.round((new Date("2023-01-01").getTime() - new Date().getTime()))}
            />
            <a href={googleFormURL} target='_blank'><button className='btn' >register interest</button></a>
        </div>
    </div>
  );
};

export default App;
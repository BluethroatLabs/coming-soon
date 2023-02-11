import React from 'react';

import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import logo from '../src/assets/1-removebg-preview.png';
import './styles.css';

// import video
import videoBg from '../src/assets/video.mp4';
import Testimonial from './Testimonials';

const googleFormURL = `https://docs.google.com/forms/d/e/1FAIpQLSdjb_Kuu4yQNQMvpDBVe8hzhrkVnIMxn-lGx5Ho1yA9V-bR9g/viewform?usp=sf_link`;
const blogsURL = `https://saxenism.com/`;
const sampleReportURL = `https://github.com/BluethroatLabs/audits/tree/main/canto_name_service`;
const sampleTestCoverage = `https://app.mural.co/t/bluethroatlabs9716/m/bluethroatlabs9716/1671411836393/1b9028e95b72a19eecf4564b34970d4117ed742a?sender=u3b2d7a06464f17420d4f0945`;

const App = () => {
  return (
    <>
    <div className='main'>
    <div className='overlay'></div>
      <video src={videoBg} autoPlay loop muted/>
        <div className='logo'>
            <img src={logo} />
            <h1>Services Offered</h1>
            <h3>
              <ul>
                <li align="left">Designing and implementing your testing infrastructure (DO NOT ASK ME TO USE HARDHAT)</li>
                <li align="left">Smart contract auditing and threat modeling</li>
                <li align="left">Protocol designing and architecture</li>
                <li align="left">High level business and/or technical overviews of protocols</li>
                <li align="left">Training your team on safety driven programming</li>
              </ul>
            </h3>
            <h3>
              For a <b>free</b> high-level preliminary <b>security review</b> plus a (<a href={sampleTestCoverage} target='_blank'>Sample</a>) <b>test coverage chart,</b> <a href="mailto: saxenism.crypto@gmail.com" target="_blank">contact us</a> 
            </h3>
            &nbsp;
            <a href={sampleReportURL} target='_blank'><button className='btn' >sample report</button></a>
            <br />
            <br />
            <h1>Word on the street</h1>
            <hr width="20%" color="#9f9e9e" />
            <Testimonial />
        </div>
    </div>
    </>
  );
};

export default App;
import React from 'react';
import Feature from '../../components/feature/Feature.jsx';
import './whatGPT3.css';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className = 'gpt3__whatgpt3-feature'>
        <Feature title='what is gpt3' text='This can be used as a reusable component that provides a small summary of application abilites. Other abilities will be expanded on below. Just think about all the ways you could use this in an update with an updated color scheme!'/>
      </div>
      <div className = 'gpt3__whatgpt3-heading'>
        <h1 className = 'gradient__text'> The possibilities are beyong your imagination.</h1>
        <p>Explore the library.</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <div className = '.gpt3__features-container_feature-text'>
        <Feature title = 'Ability One' text='This si a short description of what my application can do! Add more whenever you want.'/>
        <Feature title = 'Ability two' text='Adding on to the previous ability, this will make your application robust yada yada filler information palse.'/>
        <Feature title = 'ability three' text='This is your last ability, tell the users what you did well, and make it amazing!'/>
        </div>
      </div>
    </div>
  )
};


export default WhatGPT3;
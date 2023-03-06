import React from 'react';
import Feature from '../../components/feature/Feature.jsx';
import './features.css';

const featuresData = [
  {
  title: 'Ending distrust completely',
  text: 'Adding on to the previous ability, this will make your application robust yada yada filler information palse.'
  },
  {
  title: 'Become something in life',
  text: 'Adding on to the previous ability, this will make your application robust yada yada filler information palse.'
  },
  {
  title: 'It is what it is',
  text: 'Adding on to the previous ability, this will make your application robust yada yada filler information palse.'
  },
  {
  title: 'Let\'s get this over with',
  text: 'Adding on to the previous ability, this will make your application robust yada yada filler information palse.'
  },
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The future is now and you just need to realize it. Step into the future today and make it happen</h1>
        <p>request early access and get started</p>
      </div>
      <div className='gpt3__features-container'>
      {featuresData.map(iteration => (<Feature title = {iteration.title} text= {iteration.text}/>))}
      </div>
    </div>
  )
}

export default Features

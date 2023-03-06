import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
     <div className='gpt3__possibility-image'>
      <img src = {possibilityImage} alt='possibility'/>
     </div>
     <div className='gpt3__possibility-content'>
      <h4>Reqiest ear;u acess top egt started</h4>
      <h1 className='gradient__text'>the possibilities are beyong imagniiaton</h1>
      <p>Adding on to the previous ability, this will make your application robust yada yada filler information palse.Adding on to the previous ability, this will make your application robust yada yada filler information palse.</p>
      <h4>Req early access to get started</h4>
     </div>
    </div>
  )
};


export default Possibility;

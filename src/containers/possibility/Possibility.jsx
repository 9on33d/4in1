import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div>
        <div className="gpt3__possibility-content">
          <h4>Request Early Access to Get Started</h4>
          <h1 className="gradient__text">The possibility are beyond your imagination</h1>
          <p>Yet bet any for travelling assistance in</p>
          <h4>Request Early Access to Get Started</h4>
        </div>
      </div>
    </div>
  )
}

export default Possibility
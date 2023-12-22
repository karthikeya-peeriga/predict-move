import React from 'react';
import "./div3.css";

const Div3 = () => {
  return (
    <div className='div3'>
      {/* First child div */}
      <div className='child-div'>
        <img src={require('../../assets/landingimage3-1.png')} alt="man" />
        <h3>On Demand Learning</h3>
        <p className='whitetext'>This company is the first real-time learning platform dedicated to teaching Technical Analysis for trading Bitcoin and stocks. Gain immediate access to the most sophisticated analysis and trading strategies.Start your path as a profitable trader today</p>
      </div>

      {/* Second child div */}
      <div className='child-div'>
        <img src={require('../../assets/landingimage3-2.png')} alt="calendar" />
        <h3>Live Weekly Trading Lessons</h3>
        <p>As a member you won't be left alone on your learning path. Each week our Coaches host interactive learning streams every Wednesday and Sunday, dedicated to specific techniques and strategies, followed by a thorough Q&A session.</p>
      </div>
    </div>
  );
}

export default Div3;

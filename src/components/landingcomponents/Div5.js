import React from 'react';
import "./div5.module.css";

const Div5 = () => {
  return (
    <div className='div3'>
      {/* First child div */}
      <div className='child-div' style={{ backgroundColor: '#F5F5F5' }}>
        <img src={require('../../assets/landingimage5.png')} alt="man" />
        <h3 style={{color:"#232323"}}>Daily Trading Updates</h3>
        <p className='whitetext' style={{color:"#5D5D5D", fontWeight:"lighter"}}>Every morning our Coach, provides a live analysis on the Bitcoin market, providing detailed insights on how they expect to trade Bitcoin for the trading day ahead. These vital updates are closed with a Q&A session, providing you with the answers you need as a Day Trader in the Bitcoin Market</p>
      </div>

      {/* Second child div */}
      <div className='child-div' style={{ backgroundColor: '#232323' }}>
        <img src={require('../../assets/landingimage5-1.png')} alt="calendar" />
        <h3 style={{color:"#F5F5F5"}}>Live Weekly Trading Lessons</h3>
        <p  style={{color:"#F5F5F5", fontWeight:"lighter"}}>As a member you won't be left alone on your learning path. Each week our Coaches host interactive learning streams every Wednesday and Sunday, dedicated to specific techniques and strategies, followed by a thorough Q&A session.</p>
      </div>
    </div>
  );
}

export default Div5;

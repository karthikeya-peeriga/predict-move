import React from 'react'
import './div2.css'

const Div2 = () => {
  return (
    <div className="dark">
    <div className="img-container">
      <img
        className="asset"
        src={require("../../assets/landingimage2.png")}
        alt="profit"
      />
      <div className="text">
        <p className="title">On Demand Learning Library</p>
        <p className="content">
          Enter at an educational level tailored to you. Whether you're an
          absolute beginner as a trader or looking to advance your current
          results, you will have a learning path focused on your
          requirements as an aspiring trader.
        </p>
        <p className="content">
          As a member, you will never succumb to stale performance, thanks
          to our ever-growing module collection; with new lessons being
          added every month.
        </p>
      </div>
    </div>
  </div>
  )
}

export default Div2
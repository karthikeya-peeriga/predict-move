import React from 'react'
import './div1.css'

const Div1 = () => {
  return (
    <div className='light'>
    <div class="frame">
      <p class="text-wrapper">Level up your trading skills for profitable returns</p>
      <p class="div">
        Dive into the uncharted waters of trading. Unleash your inner fortune hunter and let’s chart a course for the
        land of profit!
      </p>
      <div class="div-2">
        <div class="div-wrapper"><div class="text-wrapper-2">name@email.com</div></div>
        <div class="div-wrapper-2"><div class="text-wrapper-3">Sign up</div></div>
      </div>
    </div>
    <img class="asset" src={require("../../assets/landingimage1.png")} alt='screen' />
     <div className='dark'>
     </div>
    </div>
  )
}

export default Div1;

// "https://c.animaapp.com/6JUPMaJQ/img/asset-2-300x-8-1.png"
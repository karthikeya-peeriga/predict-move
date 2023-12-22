import React from "react";
import NavBar from "./consts/NavBar";
import Div1 from "./landingcomponents/Div1";
import Div2 from "./landingcomponents/Div2";
import Div3 from "./landingcomponents/Div3";
import "./Landing.css";
import "../assets/landingimage1.png";

const Landing = () => {
  return (
    <div>
      {/* Navbar insertion. Already made into a component*/}
      <NavBar color="#232323" />

      {/* first div*/}
      <Div1 />
      <Div2 />
      <Div3 />
      {/* End */}
    </div>
  );
};

export default Landing;

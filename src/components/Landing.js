import React from "react";
import NavBar from "./NavBar";
import Div1 from "./landingcomponents/Div1";
import Div2 from "./landingcomponents/Div2";
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

      {/* End */}
    </div>
  );
};

export default Landing;

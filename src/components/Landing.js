import React from "react";
import NavBar from "./consts/NavBar";
import Div1 from "./landingcomponents/Div1";
import Div2 from "./landingcomponents/Div2";
import Div3 from "./landingcomponents/Div3";
import Div4 from "./landingcomponents/Div4";
import Div5 from "./landingcomponents/Div5";

const Landing = () => {
  return (
    <div>
      {/* Navbar insertion. Already made into a component*/}
      <NavBar color="#232323" />

      {/* first div*/}
      <Div1 />
      <Div2 />
      <Div3 />
      <Div4 />
      <Div5/>
      {/* End */}
    </div>
  );
};

export default Landing;

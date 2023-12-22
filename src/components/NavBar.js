import React from "react";
import './NavBar.css';
function NavBar(props) {
  return (
    <div style={{backgroundColor:props.color}}>
      <nav>
        <div className="logo"><a>PREDICT MOVE</a></div>
        <ul className="nav-links">
            <li><a>Plans</a></li>
            <li><a>Sign In</a></li>
            <li><div className="member"><a>Become a member</a></div></li>
        </ul>
        <i className="fa-solid fa-bars menu"></i>
      </nav>
    </div>
  );
}
export default NavBar;

import React from "react";

function NavBar() {
  return (
    <div>
      <nav>
        <div className="logo">PREDICT MOVE</div>
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

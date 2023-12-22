import React from "react";

function NavBar() {
  return (
    <div>
      <nav>
        <div className="logo">PREDICT MOVE</div>
        <ul className="nav-links">
            <li><a>Plans</a></li>
            <li><a>SignIn</a></li>
            <li><a>Become a member</a></li>
        </ul>
      </nav>
    </div>
  );
}
export default NavBar;

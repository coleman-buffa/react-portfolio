import React from "react";
import "./nav.css";

function Nav() {
  return (
    <ul className="menu menu-hover-lines">
      <li><a href="/">Landing Zone</a></li>
      <li><a href="/bio">Bio</a></li>
      <li><a href="/portfolio">Portfolio</a></li>   
    </ul>
  );
}

export default Nav;

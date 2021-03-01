import React from "react";
import SocialBar from "../components/socialbar/socialbar";
import About from "../components/about/about";
// Add component imports here

function Bio() {
  return (
    <div>
      <About/>
      <SocialBar/>
    </div>
  );
}

export default Bio;
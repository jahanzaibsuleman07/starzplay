import React from "react";

import imgGoogleStore from "./images/storeGoogle.svg";
import imgAppleStore from "./images/storeApple.svg";

const LINK_REL = "noopener";

function AppLogos({ className }) {
  const androidStore = "";
  const iosStore = "";

  return (
    <div className={className}>
      <a href={iosStore} target="_blank" rel={LINK_REL}>
        <img src={imgAppleStore} alt="Apple Store" />
      </a>
      <a href={androidStore} target="_blank" rel={LINK_REL}>
        <img src={imgGoogleStore} alt="Google Play" />
      </a>
    </div>
  );
}

export default AppLogos;

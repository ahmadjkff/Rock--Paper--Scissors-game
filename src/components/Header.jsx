import React from "react";
import logo from "../../images/logo.svg";
import ScoreDisplay from "./ScoreDisplay";

function Header() {
  return (
    <div className="z-10 mb-20 flex items-center justify-between rounded-md border-4 border-HeaderOutline p-3 md:gap-40 lg:gap-80">
      <img src={logo} alt="Game Logo" />
      <ScoreDisplay />
    </div>
  );
}

export default Header;

import React, { useContext } from "react";
import logo from "../../images/logo.svg";
import { GameContext } from "../contexts/GameContext";
function Header() {
  const { state } = useContext(GameContext);
  return (
    <div className="z-10 mb-20 flex items-center justify-between gap-80 rounded-md border-[3px] border-HeaderOutline p-3">
      <img src={logo} alt="" />
      <div className="flex flex-col items-center rounded-md bg-white px-10 py-4">
        <span className="font-semibold tracking-[0.2em] text-ScoreText">
          SCORE
        </span>
        <span className="text-5xl font-extrabold text-HeaderOutline">
          {state.score}
        </span>
      </div>
    </div>
  );
}

export default Header;

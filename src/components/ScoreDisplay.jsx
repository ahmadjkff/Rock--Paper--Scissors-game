import React, { useContext } from "react";
import { GameContext } from "../contexts/GameContext";

function ScoreDisplay() {
  const { state } = useContext(GameContext);

  return (
    <div className="flex flex-col items-center rounded-lg bg-white px-10 py-4 shadow-md">
      <span className="font-semibold tracking-widest text-ScoreText">
        SCORE
      </span>
      <span className="text-5xl font-extrabold text-HeaderOutline">
        {state.score}
      </span>
    </div>
  );
}

export default ScoreDisplay;

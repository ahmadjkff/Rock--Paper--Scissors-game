import React, { useContext } from "react";

import triangle from "../../images/bg-triangle.svg";
import { GameContext } from "../contexts/GameContext";

function PlayGround() {
  const { setState, choices } = useContext(GameContext);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center -space-x-8">
        {choices.map((choice) => (
          <button
            key={choice.name}
            className={`z-20 rounded-full border-[20px] bg-white p-10 text-white transition-all ${choice.styling}`}
            onClick={() =>
              setState((prevState) => ({
                ...prevState,
                playerChoice: choice,
              }))
            }
          >
            <img className="size-16" src={choice.image} alt={choice.name} />
          </button>
        ))}
      </div>
      <img
        className={`absolute translate-y-28`}
        src={triangle}
        alt="triangle"
      />
    </div>
  );
}

export default PlayGround;

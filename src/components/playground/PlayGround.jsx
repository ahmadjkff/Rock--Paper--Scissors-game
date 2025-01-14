import React, { useContext } from "react";
import triangle from "../../../images/bg-triangle.svg";
import { GameContext } from "../../contexts/GameContext";

function PlayGround() {
  const { setState, choices } = useContext(GameContext);

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="flex items-center justify-center sm:-space-x-4 lg:-space-x-8">
        {choices.map((choice) => (
          <button
            key={choice.name}
            className={`z-20 rounded-full bg-white text-white transition-all ${choice.styling} hover:scale-105 sm:border-[12px] sm:p-8 lg:border-[20px] lg:p-10`}
            onClick={() =>
              setState((prevState) => ({
                ...prevState,
                playerChoice: choice,
              }))
            }
            aria-label={`Choose ${choice.name}`}
            role="button"
          >
            <img
              className="sm:size-8 lg:size-16"
              src={choice.image}
              alt={choice.name}
            />
          </button>
        ))}
      </div>
      <img
        className={`absolute sm:top-10 sm:h-60 lg:top-20`}
        src={triangle}
        alt="triangle"
      />
    </div>
  );
}

export default PlayGround;

import React, { useContext, useEffect, useRef } from "react";
import { GameContext } from "../contexts/GameContext";
import { gsap } from "gsap";

function PlayGroundChoices() {
  const { choices, state, setState } = useContext(GameContext);

  const tl = useRef(gsap.timeline());

  // Generate computer choice once
  useEffect(() => {
    if (!state.computerChoice) {
      setState((prev) => ({
        ...prev,
        computerChoice: choices[Math.floor(Math.random() * choices.length)],
      }));
    }
  }, [choices, state.computerChoice, setState]);

  // Trigger animation when computer choice updates
  useEffect(() => {
    if (state.computerChoice) {
      tl.current = gsap.timeline();
      tl.current.fromTo(
        "#playerChoice",
        { x: -700 },
        { x: 0, duration: 2, scale: 1.2, ease: "expo.inOut" },
        0,
      );
      tl.current.fromTo(
        "#computerChoice",
        { x: 700 },
        { x: 0, duration: 2, scale: 1.2, ease: "expo.inOut" },
        0,
      );
    }
  }, [state.computerChoice]); // Now dependent on computerChoice state

  return (
    <div className="flex w-full items-center justify-center space-x-80">
      <div
        className="flex flex-col items-center justify-center gap-10"
        id="playerChoice"
      >
        <span className="text-lg font-semibold tracking-wider text-white">
          YOU PICKED
        </span>
        {state.playerChoice && (
          <div
            key={state.playerChoice.name}
            className={`z-20 rounded-full border-[20px] bg-white p-10 text-white ${state.playerChoice.styling} translate-y-0`}
          >
            <img
              className="size-16"
              src={state.playerChoice.image}
              alt={state.playerChoice.name}
            />
          </div>
        )}
      </div>
      <div
        className="flex flex-col items-center justify-center gap-10"
        id="computerChoice"
      >
        <span className="text-lg font-semibold tracking-wider text-white">
          THE HOUSE PICKED
        </span>
        {state.computerChoice ? (
          <div
            key={state.computerChoice.name}
            className={`z-20 rounded-full border-[20px] bg-white p-10 text-white transition-all ${state.computerChoice.styling} translate-y-0`}
          >
            <img
              className="size-16"
              src={state.computerChoice.image}
              alt={state.computerChoice.name}
            />
          </div>
        ) : (
          <div className="aspect-square w-[168px] rounded-full bg-LinesColor p-10 text-white"></div>
        )}
      </div>
    </div>
  );
}

export default PlayGroundChoices;

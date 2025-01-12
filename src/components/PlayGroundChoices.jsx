import React, { useContext, useEffect, useRef } from "react";
import { GameContext } from "../contexts/GameContext";
import { gsap } from "gsap";

function PlayGroundChoices() {
  const { choices, state, setState, reset } = useContext(GameContext);

  const tl = useRef(gsap.timeline());

  const handlePlayAgain = () => {
    reset();
  };

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
  }, [state.computerChoice]);

  // ✅ Fixed choice style logic with a direct variable instead of useRef

  const computerChoiceStyle =
    state.computerChoice?.name === "rock"
      ? "border-rockGradient hover:border-hoverrockGradient"
      : state.computerChoice?.name === "paper"
        ? "border-paperGradient hover:border-hoverpaperGradient"
        : "border-scissorsGradient hover:border-hoverscissorsGradient";

  const playerChoiceStyle =
    state.playerChoice?.name === "rock"
      ? "border-rockGradient hover:border-hoverrockGradient"
      : state.playerChoice?.name === "paper"
        ? "border-paperGradient hover:border-hoverpaperGradient"
        : "border-scissorsGradient hover:border-hoverscissorsGradient";
  return (
    <div className="mx-[135px] flex w-full items-center justify-center gap-20">
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
            className={`z-20 translate-y-0 rounded-full border-[20px] bg-white p-10 text-white ${playerChoiceStyle}`}
          >
            <img
              className="size-16"
              src={state.playerChoice.image}
              alt={state.playerChoice.name}
            />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-5">
        <span className="text-5xl font-bold text-white">YOU LOSE</span>
        <button
          className="rounded-md bg-white px-8 py-2 text-lg tracking-wider transition-colors duration-150 hover:text-rockGradient"
          onClick={handlePlayAgain}
        >
          PLAY AGAIN
        </button>
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
            className={`rounded-full border-[20px] bg-white p-10 text-white transition-all ${computerChoiceStyle}`}
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

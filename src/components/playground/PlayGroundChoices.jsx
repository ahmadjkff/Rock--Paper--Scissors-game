import React, { useContext, useEffect, useRef } from "react";
import { GameContext } from "../../contexts/GameContext";
import { gsap } from "gsap";

function PlayGroundChoices() {
  const { choices, state, setState, reset } = useContext(GameContext);
  const { playerChoice, computerChoice, result } = state;
  const tl = useRef(gsap.timeline());

  // Helper function for choice styles
  const getChoiceStyle = (choiceName) => {
    const styles = {
      rock: "border-rockGradient hover:border-hoverrockGradient",
      paper: "border-paperGradient hover:border-hoverpaperGradient",
      scissors: "border-scissorsGradient hover:border-hoverscissorsGradient",
    };
    return styles[choiceName] || "";
  };

  // Function to handle game reset
  const handlePlayAgain = () => reset();

  // Randomize computer choice once
  useEffect(() => {
    if (!computerChoice) {
      setState((prev) => ({
        ...prev,
        computerChoice: choices[Math.floor(Math.random() * choices.length)],
      }));
    }
  }, [computerChoice, choices, setState]);

  // Responsive GSAP Animation Effect
  useEffect(() => {
    if (computerChoice) {
      const mm = gsap.matchMedia(); // GSAP responsive animation

      mm.add("(min-width: 768px)", () => {
        // Larger screens animation
        tl.current
          .clear()
          .fromTo(
            "#playerChoice",
            { x: -700, scale: 0.5 },
            { x: 100, duration: 2.5, ease: "bounce.out", scale: 1.5 },
          )
          .fromTo(
            "#computerChoice",
            { x: 700, scale: 0.5 },
            { x: -100, duration: 2.5, ease: "bounce.out", scale: 1.5 },
            0,
          )
          .to(["#playerChoice", "#computerChoice"], {
            x: 0,
            ease: "power1.inOut",
          })
          .fromTo(
            "#result",
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, ease: "power1.inOut" },
            "+=0.1",
          );
      });

      mm.add("(max-width: 767px)", () => {
        // Smaller screens animation (fade in with no movement)
        tl.current
          .clear()
          .fromTo(
            ["#playerChoice", "#computerChoice"],
            { opacity: 0, y: 100 },
            {
              opacity: 1,
              y: 0,
              duration: 1.5,
              ease: "power2.out",
              stagger: 0.3,
            },
          )
          .fromTo(
            "#result",
            { opacity: 0, scale: 0.5 },
            { opacity: 1, scale: 1, ease: "elastic.out(1, 0.5)", duration: 2 },
          );
      });
    }
  }, [computerChoice]);

  return (
    <div className="mx-[135px] flex w-full flex-wrap items-center justify-center gap-20 md:flex-col lg:flex-row">
      {/* Player Choice Section */}
      <div
        className="flex items-center gap-10 sm:flex-col-reverse lg:flex-col"
        id="playerChoice"
      >
        <span className="text-lg font-semibold tracking-wider text-white">
          YOU PICKED
        </span>
        {playerChoice && (
          <div
            key={playerChoice.name}
            className={`z-20 rounded-full bg-white text-white sm:border-[10px] sm:p-5 lg:border-[20px] lg:p-10 ${getChoiceStyle(playerChoice.name)}`}
          >
            <img
              className="sm:size-8 lg:size-16"
              src={playerChoice.image}
              alt={playerChoice.name}
            />
          </div>
        )}
      </div>

      {/* Result Section (Moved down on smaller screens) */}
      <div
        id="result"
        className="z-10 order-3 flex flex-col items-center gap-5 lg:order-none"
      >
        <span className="text-5xl font-bold text-white">{result}</span>
        <button
          className="rounded-md bg-white px-8 py-2 text-lg tracking-wider transition hover:text-rockGradient"
          onClick={handlePlayAgain}
        >
          PLAY AGAIN
        </button>
      </div>

      {/* Computer Choice Section */}
      <div
        className="flex items-center gap-10 sm:flex-col-reverse lg:flex-col"
        id="computerChoice"
      >
        <span className="text-lg font-semibold tracking-wider text-white">
          THE HOUSE PICKED
        </span>
        {computerChoice ? (
          <div
            key={computerChoice.name}
            className={`rounded-full bg-white text-white sm:border-[10px] sm:p-5 lg:border-[20px] lg:p-10 ${getChoiceStyle(computerChoice.name)}`}
          >
            <img
              className="sm:size-8 lg:size-16"
              src={computerChoice.image}
              alt={computerChoice.name}
            />
          </div>
        ) : (
          <div className="aspect-square w-[168px] rounded-full bg-LinesColor p-10"></div>
        )}
      </div>
    </div>
  );
}

export default PlayGroundChoices;

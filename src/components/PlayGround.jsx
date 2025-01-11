import React, { useEffect, useState } from "react";
import rock from "../../images/icon-rock.svg";
import paper from "../../images/icon-paper.svg";
import scissors from "../../images/icon-scissors.svg";
import triangle from "../../images/bg-triangle.svg";

function PlayGround() {
  const [userChoice, setUserChoice] = useState(null);
  const [choices, setChoices] = useState([
    {
      name: "paper",
      image: paper,
      styling: "border-paperGradient hover:border-hoverpaperGradient",
    },
    {
      name: "rock",
      image: rock,
      styling:
        "border-rockGradient translate-y-52 hover:border-hoverrockGradient",
    },
    {
      name: "scissors",
      image: scissors,
      styling: "border-scissorsGradient hover:border-hoverscissorsGradient",
    },
  ]);
  const handleUserChoice = (choice) => {
    setChoices([
      {
        name: choice.name,
        image: choice.image,
        styling: `${choice.styling} duration-700 -translate-x-[calc(100%)] scale-150`,
      },
    ]);

    setUserChoice(choice);
  };
  useEffect(() => {
    console.log(choices);
  }, [choices]);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-20 flex w-screen justify-evenly text-3xl font-bold text-white">
        <p className="-mr-[300px]">You Picked</p>
        <p className="">The House PICKED</p>
      </div>
      <div className="flex items-center justify-center -space-x-8">
        {choices.map((choice) => (
          <button
            key={choice.name}
            className={`z-20 rounded-full border-[20px] bg-white p-10 text-white transition-all ${choice.styling}`}
            onClick={() => handleUserChoice(choice)}
          >
            <img className="size-16" src={choice.image} alt={choice.name} />
          </button>
        ))}
      </div>
      <img
        className={`absolute translate-y-28 ${userChoice ? "opacity-0" : "opacity-100"}`}
        src={triangle}
        alt="triangle"
      />
    </div>
  );
}

export default PlayGround;

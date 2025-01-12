import React, { createContext, useState } from "react";
import rock from "../../images/icon-rock.svg";
import paper from "../../images/icon-paper.svg";
import scissors from "../../images/icon-scissors.svg";

// Create a context
const GameContext = createContext();

// Create a provider component
const GameProvider = ({ children }) => {
  const [state, setState] = useState({
    playerChoice: null,
    computerChoice: null,
    result: null,
  });
  const choices = [
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
  ];

  const reset = () => {
    setState({
      playerChoice: null,
      computerChoice: null,
      result: null,
    });
  };

  const value = {
    state,
    setState,
    choices,
    reset,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export { GameContext, GameProvider };

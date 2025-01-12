import React, { createContext, useEffect, useState } from "react";
import rock from "../../images/icon-rock.svg";
import paper from "../../images/icon-paper.svg";
import scissors from "../../images/icon-scissors.svg";
import getGameResult from "../components/getGameResult";

// Create a context
const GameContext = createContext();

// Create a provider component
const GameProvider = ({ children }) => {
  const [state, setState] = useState({
    playerChoice: null,
    computerChoice: null,
    result: null,
    score: 0,
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
      score: state.score,
    });
  };
  useEffect(() => {
    if (state.playerChoice && state.computerChoice) {
      const result = getGameResult(
        state.playerChoice.name,
        state.computerChoice.name,
      );
      setState((prev) => ({
        ...prev,
        result: result,
      }));
      if (result === "YOU WIN") {
        setState((prev) => ({
          ...prev,
          score: prev.score + 1,
        }));
      }
    }
  }, [state.computerChoice, state.playerChoice]);

  const value = {
    state,
    setState,
    choices,
    reset,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export { GameContext, GameProvider };

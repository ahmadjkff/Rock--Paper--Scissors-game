import React, { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import PlayGround from "./PlayGround";
import PlayGroundChoices from "./PlayGroundChoices";

function PlayGroundManager() {
  const { state } = useContext(GameContext);
  return state.playerChoice === null ? <PlayGround /> : <PlayGroundChoices />;
}

export default PlayGroundManager;

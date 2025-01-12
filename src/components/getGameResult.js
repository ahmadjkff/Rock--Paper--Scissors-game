const getGameResult = (player, computer) => {
  if (player === computer) {
    return "DRAW";
  }

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "YOU WIN";
  }

  return "YOU LOSE";
};

export default getGameResult;

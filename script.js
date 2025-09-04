const result = document.querySelector(".result");
const humanScore = document.querySelector("#human-score");

const machineScore = document.querySelector("#machine-score");

let humanScoreNumber = 0;
let machineScoreNumber = 0;

const GAMER_OPTIONS = {
  
}

const playHuman = (humanChoice) => {
  playTheGame(humanChoice, playMachine());
};

const playMachine = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);

  console.log(randomNumber);

  return choices[randomNumber];
};

const playTheGame = (humanChoice, machine) => {
  console.log("humano: " + humanChoice + " Maquina: " + machine);

  if (humanChoice === machine) {
    result.innerHTML = "Deu Empate";
  } else if (
    (humanChoice === "paper" && machine === "rock") ||
    (humanChoice === "rock" && machine === "scissors") ||
    (humanChoice === "scissor" && machine === "paper")
  ) {
    humanScoreNumber++;
    humanScore.innerHTML = humanScoreNumber;
    result.innerHTML = "Voçê Ganhou";
  } else {
    machineScoreNumber++;
    machineScore.innerHTML = machineScoreNumber;
    result.innerHTML = "Voçê Perdeu Para a Alexa";
  }
};

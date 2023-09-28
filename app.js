const human = document.querySelector(".human-player");
const humanImg = document.querySelector(".human-player img");

const ai = document.querySelector(".ai-player");
const aiImg = document.querySelector(".ai-player img");

const humanOptions = document.querySelectorAll(".human-option");

const instructionText = document.querySelector(".instruction-text");

const hand = ["rock", "paper", "scissors"];

const rock = "./images/rock-real.png";
const paper = "./images/paper-real.png";
const scissors = "./images/scissors-real.png";

let humanScore = 0;
let aiScore = 0;

const scoreText = document.querySelector(".score-text");
function updateScoreText(human, ai) {
  if (human === 0 && ai === 0) {
    instructionText.textContent = "Choose your move to begin";
  }
  if (human === 3) {
    instructionText.textContent = "You won";
    instructionText.style.color = "green";
  }
  if (ai === 3) {
    instructionText.textContent = "You lost";
    instructionText.style.color = "red";
  }
  scoreText.textContent = `Score: ${humanScore}-${aiScore}`;
}
updateScoreText(humanScore, aiScore);

function chooseRandom() {
  // has to return the src for the ai
  const choosenId = hand[Math.floor(Math.random() * hand.length)];
  if (choosenId === "rock") {
    ai.id = rock;
    return rock;
  }
  if (choosenId === "paper") {
    ai.id = paper;
    return paper;
  }
  if (choosenId === "scissors") {
    ai.id = scissors;
    return scissors;
  }
}

function changePlayerImg(id) {
  if (id === "rock") {
    human.id = rock;
    return rock;
  }
  if (id === "paper") {
    human.id = paper;
    return paper;
  }
  if (id === "scissors") {
    human.id = scissors;
    return scissors;
  }
}

for (let option of humanOptions) {
  option.addEventListener("click", () => action(option.id));
}

function action(id) {
  if (humanScore === 3 || aiScore === 3) {
    humanScore = 0;
    aiScore = 0;
    instructionText.textContent = "Playing...";
    instructionText.style.color = "black";
  }
  aiImg.src = chooseRandom();
  humanImg.src = changePlayerImg(id);
  compareHands(human.id, ai.id);
}

function compareHands(human, ai) {
  if (human === ai) {
    console.log("draw");
  }
  if (human === rock && ai === scissors) {
    console.log("won");
    humanScore += 1;
    updateScoreText(humanScore, aiScore);
  }
  if (human === rock && ai === paper) {
    console.log("lost");
    aiScore += 1;
    updateScoreText(humanScore, aiScore);
  }
  if (human === paper && ai === scissors) {
    console.log("lost");
    aiScore += 1;
    updateScoreText(humanScore, aiScore);
  }
  if (human === paper && ai === rock) {
    console.log("won");
    humanScore += 1;
    updateScoreText(humanScore, aiScore);
  }
  if (human === scissors && ai === rock) {
    console.log("lost");
    aiScore += 1;
    updateScoreText(humanScore, aiScore);
  }
  if (human === scissors && ai === paper) {
    console.log("won");
    humanScore += 1;
    updateScoreText(humanScore, aiScore);
  }
}

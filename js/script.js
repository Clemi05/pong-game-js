/* Imports */
import Ball from "./Ball.js";
import Paddle from "./Paddle.js";

/* Variables */
const ball = new Ball(document.getElementById("ball"));
const playerPaddle = new Paddle(document.getElementById("player-paddle"));
const computerPaddle = new Paddle(document.getElementById("computer-paddle"));
const playerScoreElement = document.getElementById("player-score");
const computerScoreElement = document.getElementById("computer-score");

let lastTime;

function update(time) {
  if (lastTime != null) {
    const delta = time - lastTime;
    // ball.update(delta);
    computerPaddle.update(delta, ball.y);

    if (isLose()) handleLose();
  }

  lastTime = time;
  window.requestAnimationFrame(update);
}

function isLose() {
  const rect = ball.rect();
  return rect.right >= window.innerWidth || rect.left <= 0;
}

function handleLose() {
  const rect = ball.rect();
  if (rect.right >= window.innerWidth) {
    playerScoreElement.textContent = parseInt(playerScoreElement.textContent) + 1;
  } else {
    computerScoreElement.textContent = parseInt(computerScoreElement.textContent) + 1;
  }

  ball.reset();
  computerPaddle.reset();
}

document.addEventListener("mousemove", event => {
  // Convert to percentage
  playerPaddle.position = (event.y / window.innerHeight) * 100;
})

window.requestAnimationFrame(update);

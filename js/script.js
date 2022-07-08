/* Imports */
import Ball from "./Ball.js";

const ball = new Ball(document.getElementById("ball"));

let lastTime;

function update(time) {
  if (lastTime != null) {
    const delta = time - lastTime;
    ball.update(delta);
  }

  lastTime = time;
  window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update);

/* Restart at 12:00min */

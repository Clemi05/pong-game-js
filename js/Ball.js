/* Variables */
const INITIAL_VELOCITY = 0.025;
const VELOCITY_INCREASE = 0.00001;

export default class Ball {
  constructor(ballElement ) {
    this.ballElement = ballElement;
    this.reset();
  }

  /* Getter and Setter of x */
  get x() {
    return parseFloat(getComputedStyle(this.ballElement).getPropertyValue("--x"));
  }

  set x(value) {
    this.ballElement.style.setProperty("--x", value);
  }

  /* Getter and Setter of y*/
  get y() {
    return parseFloat(getComputedStyle(this.ballElement).getPropertyValue("--y"));
  }

  set y(value) {
    this.ballElement.style.setProperty("--y", value);
  }

  rect() {
    return this.ballElement.getBoundingClientRect();
  }

  /* Method that headle the direction of the ball */
  reset() {
    this.x = 50;
    this.y = 50;
    this.direction = { x: 0 };
    while (Math.abs(this.direction.x <= 0.2) || Math.abs(this.direction.x >= 0.9)) {
      const heading = randomNumberBetween(0, 2 * Math.PI);
      this.direction = { x: Math.cos(heading), y: Math.sin(heading) };
    }
    this.velocity = INITIAL_VELOCITY;
  }

  /* Method that handle velocity and the bouncing against the wall of the ball */
  update(delta) {
    this.x += this.direction.x * this.velocity * delta;
    this.y += this.direction.y * this.velocity * delta;
    this.velocity += VELOCITY_INCREASE * delta;
    const rect = this.rect();

    if (rect.bottom >= window.innerHeight || rect.top <= 0) {
      this.direction.y *= -1;
    }

    // if (rect.right >= window.innerWidth || rect.left <= 0) {
    //   this.direction.x *= -1;
    // }
  }
}

function randomNumberBetween(min, max) {
  return Math.random() * (max - min) + min;
}

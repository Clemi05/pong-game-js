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

  /* Method that headle the direction of the ball */
  reset() {
    this.x = 50;
    this.y = 50;
    this.direction = { x: 0 };
    while (Math.abs(this.direction.x <= 0.2) || Math.abs(this.direction.x >= 0.9)) {
      const heading = randomNumberBetween(0, 2 * Math.PI);
      this.direction = { x: Math.cos(heading), y: Math.sin(heading) };
    }
  }

  update(delta) {
    this.x = 5;
    this.y = 15;
  }
}

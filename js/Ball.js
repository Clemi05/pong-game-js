export default class Ball {
  constructor(ballElement ) {
    this.ballElement = ballElement;
  }

  /* Getter */
  get x() {
    return parseFloat(getComputedStyle(this.ballElement).getPropertyValue("--x"));
  }

  /* Setter */
  set x(value) {
    this.ballElement.style.setProperty("--x", value);
  }

  update(delta) {
    this.x = 5;
  }
}

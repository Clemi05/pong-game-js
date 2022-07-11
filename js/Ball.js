export default class Ball {
  constructor(ballElement ) {
    this.ballElement = ballElement;
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

  update(delta) {
    this.x = 5;
    this.y = 15;
  }
}

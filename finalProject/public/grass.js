var Grass = class Grass extends Organism {
  constructor(x, y) {
    super(x, y, 1);
    this.multiplyCount = 0;
    this.multiplyRange = 8;
    this.speed = myUniverse.weather.count;
  }
  live() {
    this.multiplyCount += this.speed;
    if (this.multiplyCount >= this.multiplyRange) {
      this.multiplyCount = 0;
      this.reproduce();
    }
  }
}

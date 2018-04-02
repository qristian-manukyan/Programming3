var Grass = class Grass extends Organism {
  constructor(x, y) {
    super(x, y, 1);
    this.count = 0;
    this.range = 8;
    this.speed = 4;
  }
  live() {
    this.count += this.speed;
    if (this.count == this.range) {
      this.count = 0;
      this.reproduce();
    }
  }
}

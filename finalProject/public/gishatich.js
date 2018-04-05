var Gishatich = class Gishatich extends Animal {
  constructor(x, y) {
    super(x, y, 3, [2]);
    this.count = 0;
    this.range = 4;
    this.speed = 1;
  }
  move() {
    this.count += this.speed;
    if (this.count >= this.range) {
      this.count = 0;
      super.move();
    }
  }
}

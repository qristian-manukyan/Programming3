var Amenaker = class Amenaker extends Animal {
  constructor(x, y) {
    super(x, y, 4, [2, 3, 1]);
    this.count = 0;
  }
  move() {
    this.count += 1;
    if (this.count == 3) {
      this.count = 0;
      super.move();
    }
  }
}

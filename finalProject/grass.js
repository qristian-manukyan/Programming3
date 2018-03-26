class Grass extends Organism {
  constructor(x, y) {
    super(x, y, 1, grassArr);
    this.multiplyCount = 0;
    this.multiplyRange = 4;
  }
  onReproduction(newX, newY) {
    this.array.push(new Grass(newX, newY));
  }
  evolve() {
    this.reproductionSpeed = window.weather;
    if (this.multiplyCount < this.multiplyRange) {
      this.multiplyCount += this.reproductionSpeed;
      return;
    }
    this.multiplyCount = 0;
    this.reproduce();
  }
}

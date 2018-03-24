class Grass extends Organism {
  constructor(x, y) {
    super(x, y, 1, function(newGrassX, newGrassY) {
      grassArr.push(new Grass(newGrassX, newGrassY));
    });
    this.multiplyCount = 0;
    this.multiplyRange = 4;
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

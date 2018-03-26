class Xotaker extends Animal {
  constructor(x, y) {
    super(x, y, 2, xotakerArr, random([0, 1]), [1], [grassArr]);
  }
  onReproduction(newX, newY) {
    var partnerCoords = random(this.chooseCell(this.index));
    var partner;
    for (var i in this.array) {
      if (this.array[i].x == partnerCoords[0] && this.array[i].y == partnerCoords[1]) {
        partner = this.array[i];
        if (partner.gender == 1) {
          return true;
        }
      }
    }
    this.array.push(new Xotaker(newX, newY));
  }
  evolve() {
    if (!this.eat()) {
      if(!this.reproduce()) {
        this.move();
      }
    }
  }
}
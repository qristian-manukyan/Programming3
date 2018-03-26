class Organism {
    constructor(x, y, index, array) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.array = array;
        this.directions = [];
    }
    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x + 1, this.y],
            [this.x + 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x - 1, this.y + 1],
            [this.x - 1, this.y],
        ];
    }
    chooseCell(ch) {
        this.getNewDirections();
        var found = [];
        for (var i = 0; i < this.directions.length; i++) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (matrix[y] && matrix[y][x] == ch) {
                found.push(this.directions[i]);
            }
        }
        return found;
    }
    reproduce() {
        if (this.gender && this.gender != 0) {
            return false;
        }
        if (this.energy < 3) {
            return false;
        }
        var cell = random(this.chooseCell(0));
        if (cell) {
            var x = cell[0];
            var y = cell[1];
            matrix[y][x] = this.index;
            return this.onReproduction(x, y);
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in this.array) {
            if (this.array[i].x == this.x && this.array[i].y == this.y) {
                this.array.splice(i, 1);
                return true;
            }
        }
    }
}
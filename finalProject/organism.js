class Organism {
    constructor(x, y, index, onReproduction) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.onReproduction = onReproduction;
        this.directions = this.getDirections();
    }
    getDirections() {
        return [
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
        var cell = random(this.chooseCell(0));
        if (cell) {
            var x = cell[0];
            var y = cell[1];
            matrix[y][x] = this.index;
            this.onReproduction(x, y);
        }
    }
}
var socket = io.connect('http://localhost:3000');

function setup() {
    createCanvas(480, 480);
    background('#ccc');
    socket.on('display circle', displayCircle);
}

function displayCircle(coords) {
    fill(0, 0, 255);
    ellipse(coords[0], coords[1], 25, 25);
}

function drawCircle() {
    socket.emit('draw circle', [mouseX, mouseY]);
}

function mouseDragged() {
    drawCircle();
}
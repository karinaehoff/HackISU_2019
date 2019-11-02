function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB);
  background(230, 230, 232);
  strokeWeight(2);
  noLoop();
}

var angle = 0.0; // Use var for global variables; let doesn't work.

function draw() {
  //let angle = 0.0;
  for (let x = 0; x < width; x++) {
    let n = noise(angle) * 75.0;
    let y = height/2 + (sin(angle) * 35.0);
    point(x, y + n);
    angle += PI/40.0;
    x += 5;
  }
}

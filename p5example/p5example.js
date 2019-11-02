function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB);
  background(230, 230, 232);
  strokeWeight(2);
}

let angle = 0.0;
let x = 0;
let y = 50 + (sin(angle) * 35.0);

function draw() {
  if (x < width) {
    point(x, y);
    angle += PI/40.0;
    x += 5;
  } else {
    background(0);
    noLoop();
  }
}

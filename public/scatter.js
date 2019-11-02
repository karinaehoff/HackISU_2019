/* Scatter (particle emission) */

var particleArray = [];

var numberOfParticles = 500;

function Particle(x, y) {
  this.dir = createVector(0, 0);
  this.vel = createVector(0, 0);
  this.pos = createVector(x, y);
  
  this.move = function() {
    this.dir.x+=random(-1, 1);
    this.dir.y+=random(-1, 1);
    this.vel = this.dir.copy();
    this.vel.mult(0.5);
    this.pos.add(this.vel);
  };
  
  this.display = function(r) {
    ellipse(this.pos.x, this.pos.y, r, r);
  };
};

function setup() {
  createCanvas(windowWidth, 100);
  background(21, 119, 135);
  
  for (var i = 0; i < numberOfParticles; i++) {
    particleArray[i] = new Particle(random(0, width), random(0, height));
  };
};


function draw() {
  noStroke();
  
  for (var i = 0; i < numberOfParticles; i++) {
    var radius = map(i, 0, numberOfParticles, 1, 2);
    var alpha = map(i, 0, numberOfParticles, 0, 250);
    
    fill(255, alpha);
    particleArray[i].move();
    particleArray[i].display(radius);
    
  };
};
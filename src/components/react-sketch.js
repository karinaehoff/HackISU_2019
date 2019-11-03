export default function Sketch(p) {
    let particleArray = [];

    let numberOfParticles = 500;

    p.Particle = function (x, y) {
        this.dir = p.createVector(0, 0);
        this.vel = p.createVector(0, 0);
        this.pos = p.createVector(x, y);
        
        this.move = function() {
            this.dir.x+=p.random(-1, 1);
            this.dir.y+=p.random(-1, 1);
            this.vel = this.dir.copy();
            this.vel.mult(0.5);
            this.pos.add(this.vel);
        };
        
        this.display = function(r) {
            p.ellipse(this.pos.x, this.pos.y, r, r);
        };
    };

    p.setup = function() {
        p.createCanvas(window.innerWidth, 100);
        p.background(21, 119, 135);
        
        for (var i = 0; i < numberOfParticles; i++) {
            particleArray[i] = new p.Particle(p.random(0, p.width), p.random(0, p.height));
        };
    };


    p.draw = function() {
        p.noStroke();
        
        for (var i = 0; i < numberOfParticles; i++) {
            var radius = p.map(i, 0, numberOfParticles, 1, 2);
            var alpha = p.map(i, 0, numberOfParticles, 0, 250);
            
            p.fill(255, alpha);
            particleArray[i].move();
            particleArray[i].display(radius);
            
        };
    };
}
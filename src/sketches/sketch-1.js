export default function(s) {
    s.state = {};

    s.setup = () => {
        s.createCanvas(700, 100);
        console.log('::: sketch-1 has been initialized');
    };

    s.draw = () => {
        // Where do these functions originate from?
        s.background(21, 119, 135); // Dark Aqua
        s.ellipse(s.width/2, s.height/2, 100);
    }
}
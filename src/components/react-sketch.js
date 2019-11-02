import React from 'react';

class Sketch extends React.Component {
    constructor(props) {
        super(props);
        var canvasHeight = 100;
        this.state = { x: window.innerWidth/2, y: canvasHeight, size: 40};
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }
    
    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY,
            size: event.clientX/event.clientY
        });
    }

    render() {
        return (
            <svg width={window.innerWidth} height="100" onMouseMove={this.handleMouseMove}>
                <circle cx={this.state.x} cy={this.state.y} r={this.state.size} stroke="black" fill="white"/>
            </svg>
        )
    }
}

export default Sketch;
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import P5Wrapper from 'react-p5-wrapper';

import Sketch from './react-sketch.js';

class Base extends React.Component {
    render() {
        return (
            <div className="base">
                <Col id="sideNav">
                    <h1 id="siteTitle" href="#home">hoff.</h1>
                </Col>
                <Col id="mainPage">
                    <Row id="animationZone">
                        <p>Animation zone.</p>
                    </Row>
                    <Row>
                        <P5Wrapper sketch={Sketch} />
                    </Row>
                    <Row id="mainContent">
                        <p>main content here.</p>
                    </Row>
                    
                </Col>
            </div>
        )
    };
}

export default Base;
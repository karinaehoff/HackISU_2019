import React, { Fragment } from 'react';

export default function SketchWrapper(props) {
    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
    });

    React.useEffect(() => {
        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            });
        }
        window.addEventListener('resize', handleResize);
        console.log(`Current window: ${dimensions.width}x${dimensions.height}`)
    });

    return (
        <Fragment>{props.children}</Fragment>
    );
};
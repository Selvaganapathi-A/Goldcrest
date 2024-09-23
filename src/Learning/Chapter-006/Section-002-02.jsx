import React from 'react';

class HookMouse01 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
        };
    }

    logMouseListener = (e) => {
        this.setState(() => {
            return {
                x: e.clientX,
                y: e.clientY,
            };
        });
    };

    componentDidMount() {
        window.addEventListener('mousedown', this.logMouseListener);
        console.log('mouse Listener added');
    }

    componentWillUnmount() {
        window.removeEventListener('mousedown', this.logMouseListener);
        console.log('mouse Listener removed');
    }

    render() {
        return (
            <>
                <h6>Mouse 01</h6>
                <p>
                    x - {this.state.x} : y - {this.state.y}
                </p>
            </>
        );
    }
}

function HookMouse02() {
    const [x, setX] = React.useState(0);
    const [y, setY] = React.useState(0);

    const logMouseListener = (e) => {
        setX(e.clientX);
        setY(e.clientY);
        console.log('mouse down for event 2 at ', (e.clientX, e.clientY));
    };

    React.useEffect(
        () => {
            window.addEventListener('mousedown', logMouseListener);
            console.log('mouse listener -2 added');
            return () => {
                // cleanup operations like remove event listeners, component
                // unmount to servers are performed here
                window.removeEventListener('mousedown', logMouseListener);
                console.log('mouse listener -2 removed');
            };
        },
        // when empty array passed, useEffect run only once.
        []
    );

    return (
        <>
            <h6>Mouse 02</h6>
            <p>
                x - {x} : y - {y}
            </p>
        </>
    );
}

function MouseHook(props) {
    const [componentState01, setComponent01] = React.useState(false);
    const [componentState02, setComponent02] = React.useState(false);

    const toggleComponentState01 = (e) => {
        setComponent01((prev) => !prev);
    };
    const toggleComponentState02 = (e) => {
        setComponent02((prev) => !prev);
    };

    return (
        <>
            <h5>Mouse Listener</h5>
            <div className="note">
                <p>Run Side-effects Once.</p>
            </div>
            {componentState01 ? <HookMouse01 /> : null}
            <button type="button" onClick={toggleComponentState01}>
                Mouse Listener 1
            </button>
            {componentState02 ? <HookMouse02 /> : null}
            <button type="button" onClick={toggleComponentState02}>
                Mouse Listener 2
            </button>
        </>
    );
}

export { MouseHook };

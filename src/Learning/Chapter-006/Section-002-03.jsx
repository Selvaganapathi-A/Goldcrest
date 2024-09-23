import React from 'react';

function randomNumber() {
    return Math.floor(Math.random() * 100);
}

class Component001 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
        };
    }

    changeX = (e) => {
        this.setState((prev) => {
            return { ...prev, x: randomNumber() };
        });
    };

    changeY = (e) => {
        this.setState((prev) => {
            return { ...prev, y: randomNumber() };
        });
    };

    componentDidUpdate(nextProps, nextState) {
        if (nextState.x != this.state.x) {
            console.log(this.state, nextProps, nextState);
        }
    }

    render() {
        return (
            <>
                <h6>Component001</h6>
                <p>
                    X - {this.state.x} : Y - {this.state.y}
                </p>
                <button type="button" onClick={this.changeX}>
                    Change X
                </button>
                <button type="button" onClick={this.changeY}>
                    Change Y
                </button>
            </>
        );
    }
}

function Component002() {
    const [x, setX] = React.useState(0);
    const [y, setY] = React.useState(0);

    const changeX = (e) => {
        setX(() => randomNumber());
    };

    const changeY = (e) => {
        setY(() => randomNumber());
    };

    React.useEffect(
        () => {
            console.log({ x: x, y: y });
        },
        [x]
        // only when x updates or changes...
    );

    return (
        <>
            <h6>Component002</h6>
            <p>
                X - {x} : Y - {y}
            </p>
            <button type="button" onClick={changeX}>
                Change X
            </button>
            <button type="button" onClick={changeY}>
                Change Y
            </button>
        </>
    );
}

function Clicker(props) {
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
            <h5>Clicker</h5>
            <div className="note">
                <p>Conditionaly Run Effects.</p>
            </div>
            {componentState01 ? <Component001 /> : null}
            <button type="button" onClick={toggleComponentState01}>
                Clicker 1
            </button>
            {componentState02 ? <Component002 /> : null}
            <button type="button" onClick={toggleComponentState02}>
                Clicker 2
            </button>
        </>
    );
}

export { Clicker };

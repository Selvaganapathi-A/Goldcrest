import React, { useEffect, useState } from 'react';

class Timer01 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
        };
        this.intervel = null;
    }
    componentDidMount() {
        this.intervel = setInterval(() => {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    seconds: prevState.seconds + 1,
                };
            });
        }, 1000);
    }
    componentDidUpdate() {
        console.log('t1 updated.');
    }
    componentWillUnmount() {
        // cleanup operations here
        clearInterval(this.intervel);
        console.log('t1 removed.');
    }

    render() {
        return (
            <>
                <h6>Timer - 1</h6>
                <p>{this.state.seconds} Seconds since Added</p>
            </>
        );
    }
}

function Timer02(props) {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        let intervel = setInterval(() => {
            setSeconds((prev) => prev + 1);
            console.log('t2 updated');
        }, 1000);

        return () => {
            // perform cleanup operations here
            console.log('t2 removed');
            clearInterval(intervel);
        };
    }, []);
    return (
        <>
            <h6>Timer - 2</h6>
            <p>{seconds} Seconds since Added</p>
        </>
    );
}

function Timer() {
    const [t1, setT1] = useState(false);
    const [t2, setT2] = useState(false);

    const toggleT1 = (e) => {
        setT1((prev) => !prev);
    };
    const toggleT2 = (e) => {
        setT2((prev) => !prev);
    };

    return (
        <>
            <h5>Timer</h5>
            <div className="note">
                <p>Use Effect Examples.</p>
            </div>
            {t1 ? <Timer01 /> : null}
            <button type="button" onClick={toggleT1}>
                Toggle Timer 1
            </button>
            {t2 ? <Timer02 /> : null}
            <button type="button" onClick={toggleT2}>
                Toggle Timer 2
            </button>
        </>
    );
}

export { Timer };

import React from 'react';
// this component raise error if isinfinite is true

class PropsError extends React.Component {
    render() {
        if (this.props.isInfinite) {
            throw new Error("I don't have infinity Render.");
        } else {
            return <p>Props Component</p>;
        }
    }
}
// this component raise error during event handling

class EventError extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 5,
        };
    }
    handleClick = () => {
        try {
            this.setState((prev) => {
                if (prev.count <= 0) {
                    throw new Error('Negative indexes not permitted.');
                }
                return {
                    count: prev.count - 1,
                };
            });
        } catch (error) {
            this.setState({ error });
        }
    };
    render() {
        return (
            <>
                <p>Lives {this.state.count}</p>
                <button type="button" onClick={this.handleClick}>
                    Count
                </button>
            </>
        );
    }
}

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        };
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error: error,
        };
    }
    componentDidCatch(error, info) {
        console.log('Error Produced in child Component.');
        console.log(info);
        console.log(error);
        console.log(error.message);
    }
    render() {
        if (this.state.hasError) {
            return <p>Some of the Child Component Producing Error.</p>;
        }
        return (
            <>
                <PropsError isInfinite={true} />
                {/* <PropsError isInfinite={true} /> */}
                <EventError></EventError>
            </>
        );
    }
}

export { ErrorBoundary };
/*
* getDerivedStateFromError()
! static getDerivedStateFromError(error)
This lifecycle is invoked after an error has been thrown by a
    descendant component. It receives the error that was thrown
    as a parameter and should return a value to update state.
Note
    getDerivedStateFromError() is called during the “render”
    phase, so side-effects are not permitted. For those use
    cases, use componentDidCatch() instead.
* componentDidCatch()
! componentDidCatch(error, info)
This lifecycle is invoked after an error has been thrown by a
    descendant component. It receives two parameters:
error - The error that was thrown.
info - An object with a componentStack key containing information about which component threw the error.
componentDidCatch() is called during the “commit” phase, so
side-effects are permitted.
*/

import React from 'react';
import './Error Boundary.scss';

Error.stackTraceLimit = 1;

class ErrorCatcher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            fault: {
                error: null,
                info: null,
            },
        };
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            fault: {
                error: error,
            },
        };
    }

    componentDidCatch(error, info) {
        console.log(info);
        console.error(error);

        this.setState((prev) => {
            return {
                ...prev,
                fault: {
                    error: error,
                    info: info,
                },
            };
        });
    }

    render() {
        return (
            <>
                {this.state.hasError ? (
                    <>
                        <h3 className="error title">
                            Error {' : '}
                            {this.state.fault.error.message}
                        </h3>
                        <p className="error message">
                            {this.state.fault.error.stack}
                        </p>
                    </>
                ) : (
                    this.props.children
                )}
            </>
        );
    }
}

export { ErrorCatcher };

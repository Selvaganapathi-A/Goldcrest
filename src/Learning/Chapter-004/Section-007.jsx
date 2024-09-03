import React from 'react';

/*
Share Function and state via props
*/

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    incrementCount = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    };

    render() {
        return <>{this.props.render(this.state.count, this.incrementCount)}</>;
    }
}

//

class ClickCounter extends React.Component {
    render() {
        return (
            <>
                <button type="button" onClick={this.props?.incrementCount}>
                    Button Clicked {this.props?.count}
                </button>
            </>
        );
    }
}

//

class HoverCounter extends React.Component {
    render() {
        return (
            <>
                <h3 onMouseEnter={this.props?.incrementCount}>
                    Hovered over {this.props?.count}
                </h3>
            </>
        );
    }
}

//

export function DisplayC4S7() {
    return (
        <>
            <p>`Render Pattern` to share functionality across component</p>
            <br />
            <Counter
                render={(count, incrementCount) => (
                    <ClickCounter
                        count={count}
                        incrementCount={incrementCount}
                    />
                )}
            />
            <Counter
                render={(count, incrementCount) => {
                    return (
                        <HoverCounter
                            count={count}
                            incrementCount={incrementCount}
                        />
                    );
                }}
            />
        </>
    );
}

import React from 'react';


/*
Share Function and state by higher order function
*/



function NameAndValue({ value, name }) {
    return (
        <>
            <p> Name : {name}</p>
            <p> Value = {value}</p>
        </>
    );
}

const EnhancedComponent = (OriginalComponent, incrementBy = 1) => {
    return class NewComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                value: 0,
            };
        }

        incrementCount = () => {
            this.setState((prevState) => ({
                value: prevState.value + incrementBy,
            }));
        };

        render() {
            return (
                <OriginalComponent
                    name={this.props?.name}
                    count={this.incrementCount}
                    value={this.state.value}
                    // remember to pass args to child components in HOC
                    {...this.props}
                />
            );
        }
    };
};

class ClickCounter extends React.Component {
    render() {
        return (
            <>
                <h4>Click Counter</h4>
                <NameAndValue name={this.props.name} value={this.props.value} />
                <button type="button" onClick={this.props?.count}>
                    Click to Count
                </button>

            </>
        );
    }
}

class HoverCounter extends React.Component {
    render() {
        return (
            <>
                <h4 onMouseEnter={this?.props?.count}>Hover Counter</h4>
                <NameAndValue name={this.props.name} value={this.props.value} />
            </>
        );
    }
}

export function DisplayC4S6() {
    let EnhancedClick = EnhancedComponent(ClickCounter, 4);
    let EnhancedHover = EnhancedComponent(HoverCounter, 13);
    return (
        <>
            <EnhancedClick name="Jarvis" age="24" sex="hetero" />
            <EnhancedHover
                name="Ultron"
                age="24"
                sex="undefined"
                lover="love"
            />
        </>
    );
}

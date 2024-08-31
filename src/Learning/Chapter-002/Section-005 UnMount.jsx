import React from 'react';

class Child extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillUnmount() {
        console.log('Child Will be unmounted!');
        return true;
    }
    render() {
        return (
            <>
                <h5>Child Component</h5>
            </>
        );
    }
}

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showChild: true,
            color: 'red',
            shape: 'square',
            status: 'liquid',
        };
    }
    handleButtonClick = () => {
        this.setState((prevState) => {
            return {
                showChild: !prevState.showChild,
                color: prevState.showChild ? 'pink' : 'red',
            };
        });
    };
    render() {
        console.log(this.state);
        return (
            <>
                {this.state.showChild && <Child />}
                <button type="button" onClick={this.handleButtonClick}>
                    Click Me to add child!
                </button>
            </>
        );
    }
}
const parent = React.memo(Parent);

export { parent as Parent };

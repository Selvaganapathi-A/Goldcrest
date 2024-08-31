import React from 'react';
{
    /* <ul>
{Object.entries(this.props).map(([k, v]) => (
    <li key={k}>
        {k} : {v}
    </li>
))}
</ul> */
}

class FunctionCall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            compName: 'child',
        };
    }
    render() {
        return (
            <>
                <h5>Function Call</h5>
                <button type="button" onClick={this.props.functionCall}>
                    Greet Parent
                </button>
            </>
        );
    }
}

class FunctionCallWithArgs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            compName: 'child',
        };
    }
    render() {
        return (
            <>
                <h5>Function Call With Args</h5>
                <button
                    type="button"
                    onClick={() => {
                        this.props.functionCall(
                            this.props.name,
                            this.props.age
                        );
                    }}
                >
                    Greet Parent
                </button>
            </>
        );
    }
}

class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            compName: 'Parent',
        };
        this.greet = this.greet.bind(this);
        this.greetWithArgs = this.greetWithArgs.bind(this);
    }
    //without args
    greet() {
        console.log(`welcome ${this.state.compName}`);
    }
    // with args to function
    greetWithArgs(name, age) {
        console.log(`I'm ${name}, age ${age} call to ${this.state.compName}`);
    }
    render() {
        return (
            <>
                <FunctionCall functionCall={this.greet} />
                <FunctionCallWithArgs
                    functionCall={this.greetWithArgs}
                    name="Gayathri"
                    age="25"
                />
                <FunctionCallWithArgs
                    functionCall={this.greetWithArgs}
                    name="Meera"
                    age="19"
                />
            </>
        );
    }
}

class DisplayForS3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                <ParentComponent />
            </>
        );
    }
}

export { DisplayForS3 };

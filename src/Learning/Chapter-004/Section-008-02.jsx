import React, { useContext } from 'react';

import {
    ThemeContext,
    ThemeProvider,
    ThemeConsumer,
} from './Section-008 context.jsx';

class PartB extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <div>
                <p>PartB</p>
                <PartC />
            </div>
        );
    }
}

class PartC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <p>PartC</p>
                <ThemeContext.Consumer>
                    {(value) => <p>{value}</p>}
                </ThemeContext.Consumer>
            </div>
        );
    }
}

export { PartB, PartC };

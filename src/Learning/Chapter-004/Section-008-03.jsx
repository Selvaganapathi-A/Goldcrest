import {
    ThemeContext,
    ThemeConsumer,
} from './Section-008 context.jsx';

import React from 'react';

class PartD extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <p>PartD</p>
                <PartE />
            </div>
        );
    }
}

class PartE extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        // add context to component class
        console.log(this.context);
        return (
            <div>
                <p>PartE</p>
                <PartF />
            </div>
        );
    }
}

class PartF extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <p>PartF</p>
                {/* access component via consumer */}
                <ThemeConsumer>
                    {(value) => <p>{value}</p>}
                </ThemeConsumer>
            </div>
        );
    }
}

PartE.contextType = ThemeContext;

export { PartD, PartE, PartF };

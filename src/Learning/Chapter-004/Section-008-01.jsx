import React from 'react';

import {
    ThemeContext,
    ThemeProvider,
    ThemeConsumer,
} from './Section-008 context.jsx';

class PartA extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log(
            ThemeContext.Consumer.value
        );

        return (
            <div>
                <p>PartA</p>
                <ThemeConsumer>{(name) => <p>{name}</p>}</ThemeConsumer>
            </div>
        );
    }
}

export { PartA };

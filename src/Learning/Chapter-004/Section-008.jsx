import { PartA } from './Section-008-01';
import { PartB, PartC } from './Section-008-02';
import { PartD, PartE, PartF } from './Section-008-03';

import { CompA } from './Section-008-04.jsx';

import { ThemeProvider } from './Section-008 context.jsx';

import React from 'react';

import './Section-008.scss';

class DisplayC4S8 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <p>
                    Context lets components pass information deep down without
                    explicitly passing props down to the required components.
                </p>
                <br />
                <ThemeProvider value="Light">
                    <div id="container">
                        <PartA />
                        <PartB />
                        <PartD />
                        <CompA />
                    </div>
                </ThemeProvider>
            </>
        );
    }
}

export { DisplayC4S8 };

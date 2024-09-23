import React, { useContext, useState } from 'react';

import './Section-003.scss';

import { ErrorCatcher } from './Error Boundary.jsx';

const theme = React.createContext();

function ChildComponentC() {
    let { style, setStyle } = React.useContext(theme);
    const handleClick = (e) => {
        setStyle((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <div>
            <h6>ChildComponentC</h6>
            <button type="button" onClick={handleClick}>
                Click Me
            </button>
        </div>
    );
}

function ChildComponentB() {
    return (
        <div>
            <h6>ChildComponentB</h6>
            <ChildComponentC />
        </div>
    );
}

function ChildComponentA() {
    const { style } = useContext(theme);
    return (
        <div>
            <h6>ChildComponentA</h6>
            <ChildComponentB />
            <p>{style}</p>
        </div>
    );
}

function ParentComponent() {
    const [style, setStyle] = useState('dark');

    return (
        <div>
            <p>Parent Component</p>
            <div className={`themed-component ${style} `}>
                <theme.Provider value={{ style, setStyle }}>
                    <ChildComponentA />
                </theme.Provider>
            </div>
        </div>
    );
}

class DisplayS03 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <ErrorCatcher>
                    <h5>DisplayS03</h5>
                    <ParentComponent />
                </ErrorCatcher>
            </>
        );
    }
}

export { DisplayS03 };

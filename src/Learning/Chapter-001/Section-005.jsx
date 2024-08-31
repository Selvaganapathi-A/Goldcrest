import { useState } from 'react';

import './Section-005.scss';
const lightOn = {
    backgroundColor: 'gray',
};
const lightOff = {
    backgroundColor: 'fuchsia',
};

function Light({ state }) {
    return <div className="light" style={state ? lightOn : lightOff}></div>;
}

function handleButton(e, changeState) {
    changeState((prevState) => !prevState);
}

function EventManager() {
    const [state, setState] = useState(true);
    return (
        <>
            <button type="button" onClick={(e) => handleButton(e, setState)}>
                Click to toggle !
            </button>
            <Light state={state} />
        </>
    );
}

export { EventManager };

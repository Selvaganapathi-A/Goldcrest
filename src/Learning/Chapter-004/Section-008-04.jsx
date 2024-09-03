import { UserContext, ThemeContext } from './Section-008 context.jsx';
import React from 'react';

export function CompA() {
    return (
        <div className="funcComp">
            <p>Functional Component A</p>
            <CompB />
        </div>
    );
}

function CompB() {
    return (
        <div className="funcComp">
            <p>Functional Component B</p>
            <CompC />
        </div>
    );
}

function CompC() {
    const user = React.useContext(UserContext);
    const theme = React.useContext(ThemeContext);
    return (
        <div className="funcComp">
            <p>Functional Component C</p>
            <p>Theme : {theme}</p>
            <p>User : {user}</p>
        </div>
    );
}

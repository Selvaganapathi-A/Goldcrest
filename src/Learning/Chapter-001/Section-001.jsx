// default :- export one per module

import React from 'react';

import './Section-001.scss';

class Lexus extends React.Component {
    render() {
        return <p>Toyoto Lexus</p>;
    }
}
const Lamborghini = () => {
    return <p> Lamborghini! </p>;
};
const Ferrari = React.createElement(
    'p',
    { className: 'car' },
    'Ferrari - The Slowest Car in Road with Speed Bumps'
);
// default import

export default function Fiat() {
    return <p> Fiat Car! </p>;
}
// named import

export { Lamborghini, Ferrari, Lexus };

import { useState } from 'react';
import React from 'react';

class AgeOfUltron extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 15,
        };
    }

    setAge = (e) => {
        this.setState(
            () => {
                return { age: e.target.value };
            },
            () => console.log('current age', this.state.age)
        );
    };

    render() {
        return (
            <>
                <h4>Class Component</h4>
                <h5>Ultron</h5>
                <p>Age of ultron {this.state.age} Years</p>
                <input
                    type="number"
                    name="age1"
                    id="age1"
                    onChange={this.setAge}
                    placeholder="Age"
                    value={this.state.age}
                />
            </>
        );
    }
}

function AgeOfUnity() {
    const [age, setAge] = useState(17);

    return (
        <>
            <h4>Functional Component</h4>
            <h5>Unity {age}</h5>
            <input
                type="number"
                name="age"
                id="age"
                value={age}
                onChange={(e) => {
                    setAge(e.target.value);
                }}
                placeholder="Age"
            />
        </>
    );
}

export function DisplayS01() {
    return (
        <>
            <AgeOfUnity />
            <AgeOfUltron />
        </>
    );
}

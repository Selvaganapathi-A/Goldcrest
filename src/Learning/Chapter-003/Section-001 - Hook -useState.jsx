import React, { useState, useEffect, Fragment } from 'react';

function Text() {
    const [myName, setName] = useState({ username: 'Meera', color: '#ff7f00' });
    const handleInputs = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setName({ ...myName, [name]: value });
    };
    useEffect(() => {
        console.log('State Changed.', myName);
    }, [myName]);
    let style = {
        backgroundColor: myName.color,
    };
    return (
        <Fragment>
            <p>Handling multiple events with single event handler</p>
            <input
                type="text"
                name="username"
                value={myName.username}
                onChange={handleInputs}
            />
            <input
                type="color"
                name="color"
                id="color"
                value={myName.color}
                onChange={handleInputs}
            />
            <div style={style}>
                <p>{myName.username}</p>
                <p>{myName.color}</p>
            </div>
        </Fragment>
    );
}

class Sting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }
    changeCount = () => {
        this.setState(
            (prevState) => ({
                count: prevState.count + 1,
            }),
            () => {
                console.log('after update', this.state.count);
            }
        );
    };
    incrementFive = () => {
        this.changeCount();
        this.changeCount();
        this.changeCount();
        this.changeCount();
        this.changeCount();
    };
    render() {
        return (
            <>
                <p>Managing state in class component</p>
                <p>Button Clicked {this.state.count} times.</p>
                <button type="button" onClick={this.incrementFive}>
                    Count
                </button>
            </>
        );
    }
}

export function Window() {
    return (
        <>
            <Text />
            <Sting />
        </>
    );
}

import React from 'react';

class Event_Method_001 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Welcome',
        };
    }
    eventHandler(e) {
        // this is undefined
        console.log(this);
    }
    //not desired due to performance implications
    render() {
        return (
            <>
                <p>Method 1</p>
                <p>binding this to event handler.</p>
                <p>{this.state.message}</p>
                <button onClick={this.eventHandler} type="button">
                    Cast Spell
                </button>
            </>
        );
    }
}
// better than first method

class Event_Method_002 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Welcome',
        };
    }
    eventHandler(e) {
        console.log(this);
        this.setState(() => ({
            message: 'Goodbye',
        }));
    }
    render() {
        return (
            <>
                <p>Method 2</p>
                <p>binding this to event handler.</p>
                <p>{this.state.message}</p>
                <button onClick={this.eventHandler.bind(this)} type="button">
                    Cast Spell
                </button>
            </>
        );
    }
}
// desired way

class Event_Method_003 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Welcome',
        };
    }
    eventHandler(e) {
        console.log(this);
        // this.setState(() => ({
        //     message: 'Goodbye',
        // }));
    }
    render() {
        return (
            <>
                <p>Method 3</p>
                <p>binding this to event handler.</p>
                <p>{this.state.message}</p>
                <button onClick={() => this.eventHandler()} type="button">
                    Cast Spell
                </button>
            </>
        );
    }
}

class Event_Method_004 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Welcome',
        };
        // desired way to bind `this` in event binding
        this.eventHandler = this.eventHandler.bind(this);
    }
    eventHandler(e) {
        console.log(this);
        this.setState(() => ({
            message: 'Goodbye',
        }));
    }
    render() {
        return (
            <>
                <p>Method 4</p>
                <p>binding this to event handler.</p>
                <p>{this.state.message}</p>
                <button onClick={this.eventHandler} type="button">
                    Cast Spell
                </button>
            </>
        );
    }
}
// new way

class Event_Method_005 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Welcome',
        };
        // desired way to bind `this` in event binding
        this.eventHandler = this.eventHandler.bind(this);
    }
    eventHandler = (e) => {
        console.log(this);
        this.setState(() => ({
            message: 'Goodbye',
        }));
    };
    render() {
        return (
            <>
                <p>Method 5</p>
                <p>binding this to event handler.</p>
                <p>{this.state.message}</p>
                <button onClick={this.eventHandler} type="button">
                    Cast Spell
                </button>
            </>
        );
    }
}

class Wizard extends React.Component {
    render() {
        return (
            <>
                <Event_Method_001 />
                <Event_Method_002 />
                <Event_Method_003 />
                <Event_Method_004 />
                <Event_Method_005 />
                {/* <Event_Method_002 /> */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae atque id tempore mollitia accusantium iure asperiores nam culpa quibusdam officiis. Repellat eligendi quaerat vitae eum ipsa exercitationem officiis quidem reiciendis! Quia, optio.</p>
            </>
        );
    }
}

export { Wizard };

import React from 'react';

import './Section-004.scss';

class DisplayC4S4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ref: React.createRef(),
        };
        this.clickHandler = this.clickHandler.bind(this);

        //
        //
        //

        this.callbackRef = null;

        this.setCallbackRef = (element) => {
            this.callbackRef = element;
        };
    }

    render() {
        return (
            <>
                <form action="" id="simple-signin">
                    <div>
                        <label htmlFor="username-form">Username</label>
                        <input
                            type="text"
                            name="username"
                            id="username-form"
                            ref={this.state.ref}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            minLength={8}
                            maxLength={16}
                            autoComplete="code-to-authorize"
                            ref={this.setCallbackRef}
                        />
                    </div>
                    <br />
                    <button id="ik" type="button" onClick={this.clickHandler}>
                        Click Me! 😁
                    </button>
                </form>
            </>
        );
    }

    componentDidMount() {
        this.state.ref.current.focus();
    }

    clickHandler() {
        console.log(this.state.ref.current.value);
        console.log(this.callbackRef.value);
    }
}

export { DisplayC4S4 };

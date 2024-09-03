import React from 'react';

import './Section-005.scss';

// passing  refs through child components
const SomeComponent = React.forwardRef(({ name, skill }, ref) => {
    return (
        <>
            <input type="text" ref={ref} id='oop' name='oopk'/>
            <p>
                {name} knows {skill}.
            </p>
            <p>ooo - {ref?.current?.value}</p>
        </>
    );
});

// Passing Refs to Child Component

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    focusInput = () => {
        this?.ref?.current?.focus();
    };

    render() {
        return (
            <>
                <label htmlFor="pizza">Do you like pizza?</label>
                <input type="text" name="Pizza" id="pizza" ref={this.ref} />
            </>
        );
    }
}

class FocusInput extends React.Component {
    constructor(props) {
        super(props);
        this.componentRef = React.createRef();
    }

    clickHandler = () => {
        this.componentRef.current.focusInput();
    };

    render() {
        return (
            <>
                <Input ref={this.componentRef} />
                <button type="button" onClick={this.clickHandler}>
                    Focus Input
                </button>
            </>
        );
    }
}

//
class DisplayC4S5 extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    handler = () => {
        console.log(this.ref.current.value);
        // this.ref.current.value = 'Oil Theif';
    };

    render() {
        return (
            <>
                <p>Passing Refs to child React Component</p>
                <FocusInput />
                <br />
                <br />
                <br />
                <br />
                <p>accessing child component via ref (Forward Ref)</p>
                <SomeComponent ref={this.ref} name="Guna" skill="Vue" />
                <button type="button" onClick={this.handler}>
                    Click
                </button>
            </>
        );
    }
}

export { DisplayC4S5 };

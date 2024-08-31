import React from 'react';

export class DisplayC4S1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'K Nanthini',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        console.log('properties', props);
        console.log('state', state);
        return props;
    }

    render() {
        return (
            <>
                <h5>Form</h5>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                    />
                </div>
            </>
        );
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    // non react elements

    handleInputChange(event) {
        this.setState({
            username: event.target.value,
        });
    }
}

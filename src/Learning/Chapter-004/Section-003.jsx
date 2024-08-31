import React from 'react';
import ReactMemoComponent from './Section-003-001.jsx';

class DisplayC4S3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Gokila',
            age: '23',
        };
    }

    render() {
        return (
            <>
                <ReactMemoComponent
                    name={this.state?.name}
                    age={this.state?.age}
                />
            </>
        );
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState(
                (prevstate) => ({
                    name: 'meera',
                    age: 17,
                }),

                () => {
                    console.log('parent updated.', this.state);
                }
            );
        }, 5000);
    }
}

export { DisplayC4S3 };

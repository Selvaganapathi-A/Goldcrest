import axios from 'axios';
import React from 'react';

class SendToAPI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userdata: {},
            error: '',
            message: '',
        };
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState(() => {
            return {
                userdata: {
                    ...this.state.userdata,
                    [name]: value,
                },
            };
        });
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        // throw new Error('Not Implemented Yet.');
        axios
            .post(
                'https://jsonplaceholder.typicode.com/posts',
                this.state.userdata
            )
            .then((response) => {
                console.log(response);
                return response.data;
            })
            .then((data) => {
                this.setState(
                    () => ({ message: 'data saved with id ' + data.id }),
                    () => {
                        console.log(this.state, data);
                    }
                );
            })
            .catch((error) => {
                this.setState(
                    () => ({ error: 'Unable to send data to server.' }),
                    () => {
                        console.log(error);
                    }
                );
            });
    };

    render() {
        return (
            <>
                <p>SendToAPI</p>
                <br />
                <form onSubmit={this.handleFormSubmit} method="post">
                    <label htmlFor="title">
                        Title :
                        <input
                            type="text"
                            name="title"
                            id="title"
                            onChange={this.handleInputChange}
                            value={this.state.userdata.title}
                        />
                    </label>
                    <br />
                    <label htmlFor="body">
                        Body :
                        <input
                            type="text"
                            name="body"
                            id="body"
                            onChange={this.handleInputChange}
                            value={this.state.userdata.body}
                        />
                    </label>
                    <br />
                    <label htmlFor="userId">
                        userId :
                        <input
                            type="text"
                            name="userId"
                            id="userId"
                            onChange={this.handleInputChange}
                            value={this.state.userdata.userId}
                        />
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>

                {this.state.error ? <p>{this.state.error}</p> : null}
                {this.state.message ? <p>{this.state.message}</p> : null}
            </>
        );
    }
}

export function DisplayC05S02() {
    return (
        <>
            <p>DisplayC05S02</p>
            <br />
            <SendToAPI />
        </>
    );
}

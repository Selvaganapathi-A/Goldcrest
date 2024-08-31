import React from 'react';

class WelcomeToSite extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Welcome to Site.',
            buttonHidden: false,
        };
    }
    handleClick = () => {
        this.setState({
            message: 'Thanks for Subscribe.',
            buttonHidden: true,
        });
    };
    render() {
        return (
            <div>
                <p className="title">{this.state.message}</p>
                <button
                    type="button"
                    onClick={this.handleClick}
                    hidden={this.state.buttonHidden}
                >
                    Subscribe
                </button>
            </div>
        );
    }
}
let me = React.memo(WelcomeToSite);

export { me as WelcomeToSite };

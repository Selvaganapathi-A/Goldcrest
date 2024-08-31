import React from 'react';

function M1({ signedIn }) {
    let message;
    if (signedIn) {
        message = <p>Welcome User </p>;
    } else {
        message = <p>Welcome Guest</p>;
    }
    return <>{message}</>;
}

function M2({ signedIn }) {
    return <>{signedIn ? <p>Welcome User</p> : <p>Welcome Guest</p>}</>;
}

function M3({ signedIn }) {
    return <>{signedIn && <p>Welcome User</p>}</>;
}

class DisplayForS4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                <M1 signedIn={false} />
                <M1 signedIn={true} />
                <br />
                <M2 signedIn={false} />
                <M2 signedIn={true} />
                <br />
                <M3 signedIn={false} />
                <M3 signedIn={true} />
            </>
        );
    }
}

export { DisplayForS4 };

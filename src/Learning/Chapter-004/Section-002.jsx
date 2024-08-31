import { PureComponent, Component } from 'react';

class PureComp extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <p>in Pure Component</p>
                <p>{this.props.name}</p>
            </>
        );
    }

    componentDidUpdate() {
        console.log('Pure Component Update');
    }
}

class RegComp extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidUpdate() {
        console.log('Regular Component Update');
    }

    render() {
        return (
            <>
                <p>in Regular Component</p>
                <p>{this.props.name}</p>
            </>
        );
    }
}

class ParentComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Latha',
            intervelID: null,
            executed: 0,
        };
    }

    render() {
        return (
            <>
                <p>I'm Parent</p>
                <RegComp name={this.state.name} />
                <PureComp name={this.state.name} />
            </>
        );
    }

    componentDidMount() {
        setInterval(() => {
            if (this.state.intervelID != null) {
                clearInterval(this.state.intervelID);
            }
            this.setState({ name: 'lavanya' });
        }, 1500);
        console.log('parent Component Mount');
    }

    componentDidUpdate() {
        console.log('parent Component Update');
    }
}

export class DisplayC4S2 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <p>Regular Component & Pure Component</p>
                <ParentComp />
            </>
        );
    }
}

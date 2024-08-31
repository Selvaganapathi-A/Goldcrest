import axios from 'axios';

import React from 'react';

import './Section-004.scss';

import { List } from '../Chapter-001/Section-004 List';

class DellTowerPC extends React.Component {
    origin = 'wakanda';
    constructor(props) {
        super(props);
        this.state = {
            color: 'red',
            price: '$ 0.00',
            products: [],
        };
        console.log('constructer');
    }
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
        return { ...state, ...props };
    }
    componentDidMount() {
        console.log('componentDidMount');
        let url =
            'https://dummyjson.com/products?limit=20&skip=0&select=title,price';
        axios
            .get(url)
            .then(
                (val) => val.data,
                (err) => console.error(err)
            )
            .then((data) => {
                this.setState({ products: data.products });
            });
        // fetch(url)
        //     .then((response) => response.json())
        //     .then((json) => console.log(json));
        return true;
    }
    render() {
        console.log('render', this.state, this.props);
        return (
            <>
                <h4>Dell Tower PC</h4>
                <List title="My Products" products={this.state.products} />
                <div>
                    {Object.entries(this.props).map(([key, value]) => {
                        return (
                            <div key={key}>
                                <span className="key"> {key} </span> :
                                <span className="value"> {value} </span>
                            </div>
                        );
                    })}
                </div>
            </>
        );
    }
    shouldComponentUpdate(nextprops, nextstate) {
        console.log('shouldComponentUpdate', nextprops, nextstate);
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate', prevProps, prevState);
        return {
            manufaturer: 'Pandora Systems',
        };
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState, snapshot);
        return true;
    }
}

export { DellTowerPC };
/*
~ ---------------------------------------------------------- ~
An update can be caused by changes to props or state. These
    methods are called in the following order when a component
    is being re-rendered:
* 1. static getDerivedStateFromProps()
! static getDerivedStateFromProps(props, state)
getDerivedStateFromProps is invoked right before calling the
    render method, both on the initial mount and on subsequent
    updates. It should return an object to update the state, or
    null to update nothing.
If you need to perform a side effect (for example, data fetching
    or an animation) in response to a change in props, use
    componentDidUpdate lifecycle instead.
If you want to re-compute some data only when a prop changes,
    use a memoization helper instead.
If you want to “reset” some state when a prop changes, consider
    either making a component fully controlled or fully
    uncontrolled with a key instead.
~ ---------------------------------------------------------- ~
* 2. shouldComponentUpdate()
! shouldComponentUpdate(nextProps, nextState)
to let React know if a component’s output is not affected by the
    current change in state or props. The default behavior is to
    re-render on every state change, and in the vast majority of
    cases you should rely on the default behavior.
this method is invoked before rendering when new props or state
    are being received. Defaults to `true`. This method is not
    called for the initial render or when `forceUpdate()` is
    used.
~ ---------------------------------------------------------- ~
* 3. render()
~ ---------------------------------------------------------- ~
* 4. getSnapshotBeforeUpdate()
! getSnapshotBeforeUpdate(prevProps, prevState)
this method is invoked right before the most recently rendered
    output is committed to e.g. the DOM. It enables your
    component to capture some information from the DOM (e.g.
    scroll position) before it is potentially changed. Any value
    returned by this lifecycle method will be passed as a
    parameter to `componentDidUpdate()`.
    Note :
    If the getSnapshotBeforeUpdate() method is present, you
        should also include the componentDidUpdate() method,
        otherwise you will get an error.
~ ---------------------------------------------------------- ~
* 5. componentDidUpdate()
! componentDidUpdate(prevProps, prevState, snapshot)
 is invoked immediately after updating occurs. This method is
    not called for the initial render.
Note :
    componentDidUpdate() will not be invoked if
    shouldComponentUpdate() returns `false`.
~ ---------------------------------------------------------- ~
 */

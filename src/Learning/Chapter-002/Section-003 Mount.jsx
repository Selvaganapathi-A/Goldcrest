import axios from 'axios';

import React from 'react';

import { List } from '../Chapter-001/Section-004 List';

class Computer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: 'hp',
            products: [],
        };
        console.log('constructer');
    }
    render() {
        console.log('render', this.state, this.props);
        return (
            <div>
                <List title="My Products" products={this.state.products} />
                <div>{this.props.children}</div>
            </div>
        );
    }
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
        return { ...state, ...props };
    }
    componentDidMount() {
        console.log('componentDidMount');
        let url =
            'https://dummyjson.com/products?limit=10&skip=0&select=title,price';
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
}
/*
These methods are called in the following order when an instance of a component is being created and inserted into the DOM:
1. constructor()
~ ------------------------------------------------------------- ~
2. static getDerivedStateFromProps()
this method is invoked right before calling the render method,
both on the initial mount and on subsequent updates. It should
return an object to update the state, or null to update nothing.
If you need to perform a side effect (for example, data fetching
    or an animation) in response to a change in props, use
    componentDidUpdate lifecycle instead.
If you want to re-compute some data only when a prop changes,
    use a memoization helper instead.
If you want to “reset” some state when a prop changes, consider
    either making a component fully controlled or fully
    uncontrolled with a key instead.
~ ------------------------------------------------------------- ~
3. render()
~ ------------------------------------------------------------- ~
4. componentDidMount()
componentDidMount() is invoked immediately after a component is
    mounted (inserted into the tree). Initialization that
    requires DOM nodes should go here. If you need to load data
    from a remote endpoint, this is a good place to instantiate
    the network request.
~ ------------------------------------------------------------- ~
*/

export { Computer };

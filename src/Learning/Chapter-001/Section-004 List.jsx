/* eslint-disable react/prop-types */

import './Section-004.scss';

function ListItem({ product }) {
    return (
        <li className="list-item">
            <span>{product.id}</span>
            <span>{product.title}</span>
            <span>{product.price}</span>
        </li>
    );
}

export function List({ title, products }) {
    return (
        <>
            <h4>{title}</h4>
            <ul>
                {products.map((product) => (
                    <ListItem key={product.id} product={product}></ListItem>
                ))}
            </ul>
        </>
    );
}

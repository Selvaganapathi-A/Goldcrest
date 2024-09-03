import React from 'react';

import Car, { Ferrari, Lamborghini, Lexus } from './Section-001';

import { Animal } from './Section-002';

import { Banker } from './Section-003';

import { EventManager } from './Section-005';

import { List } from './Section-004 List';

const products = [
    {
        id: 1,
        title: 'Boxed Blender',
        price: 39.99,
    },
    {
        id: 2,
        title: 'Carbon Steel Wok',
        price: 29.99,
    },
    {
        id: 3,
        title: 'Chopping Board',
        price: 12.99,
    },
    {
        id: 4,
        title: 'Citrus Squeezer Yellow',
        price: 8.99,
    },
    {
        id: 5,
        title: 'Egg Slicer',
        price: 6.99,
    },
    {
        id: 6,
        title: 'Electric Stove',
        price: 49.99,
    },
    {
        id: 7,
        title: 'Fine Mesh Strainer',
        price: 9.99,
    },
    {
        id: 8,
        title: 'Fork',
        price: 3.99,
    },
    {
        id: 9,
        title: 'Glass',
        price: 4.99,
    },
    {
        id: 10,
        title: 'Grater Black',
        price: 10.99,
    },
];

function Main_001() {
    return (
        <>
            <h2> Chapter 1 </h2>
            <h3>Section 1</h3>
            <hr className="small" />
            <Lamborghini />
            <Car />
            <Lexus />
            {Ferrari}
            <hr className="small" />
            <h3>Section 2 - Props</h3>
            <Animal />
            <hr className="small" />
            <h3>Section 3 - Conditions</h3>
            <Banker />
            <hr className="small" />
            <h3>Section 4 - List</h3>
            <List title="electronics" products={products} />
            <hr className="small" />
            <h3>Section 5 - Events</h3>
            <EventManager />
        </>
    );
}

export default React.memo(Main_001);

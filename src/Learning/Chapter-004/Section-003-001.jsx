import React, { memo } from 'react';

function ReactMemoComponent({ name, age }) {
    console.log(name, age, new Date().toLocaleDateString());
    return (
        <>
            <p>Name : {name}</p>
            <p>Age : {age}</p>
        </>
    );
}

export default memo(ReactMemoComponent);

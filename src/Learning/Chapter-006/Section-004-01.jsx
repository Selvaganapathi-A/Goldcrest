import React, { useReducer } from 'react';

const initialValue = 0;

const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'increment-5':
            return state + 5;
        case 'decrement':
            return state - 1;
        case 'decrement-5':
            return state - 5;
        case 'reset':
            return 0;
        default:
            throw new Error('Action Not Implemented.');
    }
};

export function Demo01() {
    const [state, dispatch] = useReducer(reducer, initialValue);

    return (
        <>
            <h6>Counter</h6>
            <p>Value : {state}</p>
            <div className="inputs">
                <button
                    type="button"
                    onClick={(e) => {
                        dispatch('decrement-5');
                    }}
                >
                    - 5
                </button>
                <button
                    type="button"
                    onClick={(e) => {
                        dispatch('decrement');
                    }}
                >
                    - 1
                </button>
                <button
                    type="button"
                    onClick={(e) => {
                        dispatch('increment');
                    }}
                >
                    + 1
                </button>
                <button
                    type="button"
                    onClick={(e) => {
                        dispatch('increment-5');
                    }}
                >
                    + 5
                </button>
                <button
                    type="button"
                    onClick={(e) => {
                        dispatch('reset');
                    }}
                >
                    reset
                </button>
            </div>
        </>
    );
}

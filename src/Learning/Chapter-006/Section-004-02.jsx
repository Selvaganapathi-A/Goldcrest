import React, { useReducer, useRef, useState } from 'react';

const processTodos = (state, action) => {
    if (action.type === 'add') {
        if (action.value) {
            return [{ id: state.length, value: action.value }, ...state];
        }
        return state;
    } else {
        throw new Error('Not Implemented Yet.');
    }
};

function initialTodos() {
    const todoArray = [];
    for (let i = 0; i < 5; i++) {
        todoArray.push({
            id: i,
            value: "Venom's Den - " + (i + 1),
        });
    }

    return todoArray;
}

export function Demo02() {
    const [todos, dispatch] = useReducer(processTodos, 'John', initialTodos);

    const ref = React.createRef();

    const addTodo = (e) => {
        dispatch({ type: 'add', value: ref.current.value });
        ref.current.value = '';
    };

    return (
        <>
            <h6>Todos</h6>
            <input type="text" name="todo" id="todo" ref={ref} />
            <button type="button" onClick={addTodo}>
                Add
            </button>
            <div>
                <ul>
                    {todos.map(({ id, value }) => {
                        return <li key={id}> {value} </li>;
                    })}
                </ul>
            </div>
        </>
    );
}

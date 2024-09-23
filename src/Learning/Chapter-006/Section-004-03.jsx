import React, { act, useReducer, useRef, useState } from 'react';

/*

state {
draft : '',

todoList : [
                {
                    id : 8,
                    title : 'Daily Task'
                    description: 'a description about it'
                }
            ]

}

 */

const processTodos = (state, action) => {
    let last_visits;
    last_visits = localStorage.getItem('visited');
    if (localStorage.getItem('visited') === null) last_visits = 1;

    localStorage.setItem('visited', +last_visits + 1);

    console.log(last_visits);

    switch (action.type) {
        case 'changeTitle':
            return {
                ...state,
                draftTitle: action.draftTitle,
            };
        case 'changeDescription':
            return { ...state, draftDescription: action.draftDescription };
        case 'add':
            if (!state.draftDescription || !state.draftTitle) {
                return state;
            } else {
                return {
                    todoList: [
                        {
                            id: state.todoList.length,
                            title: state.draftTitle,
                            description: state.draftDescription,
                        },
                        ...state.todoList,
                    ],
                    draftTitle: '',
                    draftDescription: '',
                };
            }
        default:
            throw new Error('dispatch method not defined.', action.type);
    }
};

function initializer({ name, age }) {
    const array = [];
    for (let i = 1; i <= 5; i++) {
        array.push({
            id: i - 1,
            title: name + ' ' + age + ' ' + "'s task - " + i,
            description: 'description about this task.',
        });
    }

    return {
        todoList: array,
        draftTitle: '',
        draftDescription: '',
    };
}

export function Demo03({ name, age = 21 }) {
    const [state, dispatch] = useReducer(
        processTodos,
        { name: name, age: age },
        initializer
    );

    const show = (e) => {
        dispatch({ type: 'add', value: e.target.value });
    };

    return (
        <>
            <h4>Todos of {name}</h4>

            <fieldset className="getter">
                <legend>Create Todo</legend>
                <input
                    type="text"
                    name="todo"
                    id="todo"
                    value={state.draftTitle}
                    onChange={(e) => {
                        dispatch({
                            type: 'changeTitle',
                            draftTitle: e.target.value,
                        });
                    }}
                />
                <textarea
                    name="description"
                    id="task-desc"
                    value={state.draftDescription}
                    onChange={(e) =>
                        dispatch({
                            type: 'changeDescription',
                            draftDescription: e.target.value,
                        })
                    }
                ></textarea>
                <button
                    type="button"
                    onClick={(e) => dispatch({ type: 'add' })}
                >
                    Add
                </button>
            </fieldset>

            <ul className="tasks">
                {state.todoList.map(({ id, title, description }) => {
                    return (
                        <li key={id} className="task" data-id={id}>
                            <div className="title">{title}</div>
                            <p className="description">{description}</p>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

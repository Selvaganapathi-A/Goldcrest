import React from 'react';

export function Title(props) {
    console.log('Title');

    return (
        <>
            <h4>{props.title}</h4>
        </>
    );
}

export function Count(props) {
    console.log('Count', props.description);
    return (
        <>
            <span className="value">
                {props.description} {props.value}
            </span>
        </>
    );
}

export function MyButton(props) {
    console.log('Mybutton', props.text);
    return (
        <>
            <button type="button" onClick={props.handler}>
                {props.text}
            </button>
        </>
    );
}

export default {
    Title: React.memo(Title),
    MyButton: React.memo(MyButton),
    Count: React.memo(Count),
};




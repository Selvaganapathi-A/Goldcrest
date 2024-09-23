import React, { useCallback, memo, useState, useMemo } from 'react';

function RunReallyLong(value) {
    let i = 0;

    while (i < 1000000000) {
        i = i + 1;
    }

    console.log(value);
    return value * 2;
}

export function S2() {
    const [s1, setS1] = useState(0);
    const [s2, setS2] = useState(0);
    const [s3, setS3] = useState(0);

    const action_01 = useMemo(
        (e) => {
            RunReallyLong('button 1');
            setS1((prev) => prev + 1);
        },
        [s3]
    );

    const action_02 = (e) => {
        RunReallyLong('button 2');
        setS2((prev) => prev + 1);
    };

    return (
        <div>
            <h4>S0502</h4>

            <button type="button" onClick={action_01}>
                Button 1 - {s1} - {s3}
            </button>
            <button type="button" onClick={action_02}>
                Button 2 - {s2}
            </button>
        </div>
    );
}

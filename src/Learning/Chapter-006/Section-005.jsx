import { useCallback, useState } from 'react';

import s51 from './Section-005-01.jsx';

import { S2 } from './Section-005-02.jsx';

function DisplayS05({ props }) {
    const [age, setAge] = useState(17);
    const [salary, setSalary] = useState(10000);

    const increseAge = useCallback(
        (e) => {
            setAge((prev) => prev + 1);
            console.log('change age');
        },
        [age]
    );
    const increseSalary = useCallback(
        (e) => {
            setSalary((prev) => prev + 2500);
            console.log('change salary');
        },
        [salary]
    );

    console.log('Parent');

    return (
        <>
            <div className="component">
                <s51.Title title={'MyApp'} />
                <s51.Count description="Age" value={age} />
                <s51.MyButton handler={increseAge} text={'Increment Age'} />
                <br />
                <s51.Count description="Salary" value={salary} />
                <s51.MyButton
                    handler={increseSalary}
                    text={'Increment Salary'}
                />
                <div className="note">`Use Callback` caches function</div>
            </div>
            <hr className="small" />
            <div className="component">
                <S2 />
                <div className="note">`Use Memo` caches result</div>
            </div>
        </>
    );
}

export { DisplayS05 };

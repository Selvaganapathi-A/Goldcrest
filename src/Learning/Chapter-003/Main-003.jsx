import { Window } from './Section-001 - Hook -useState';

import { Wizard } from "./Section-002 binding 'this'";

import { DisplayForS3 } from './Section-003';

import { DisplayForS4 } from './Section-004';

import { DisplayForS5 } from './Section-005';

export default function Main_003() {
    return (
        <>
            <h2>Chapter 3</h2>
            <hr />
            <h3>Section 1 - State Management</h3>
            <Window />
            <hr className="small" />
            <h3>Section 2 - Events</h3>
            <Wizard />
            <hr className="small" />
            <h3>Section 3 - Passing function to child.</h3>
            <DisplayForS3 />
            <hr className="small" />
            <h3>Section 4 - Conditional Rendering.</h3>
            <DisplayForS4 />
            <hr className="small" />
            <h3>Section 4 - Styled Component.</h3>
            <DisplayForS5 />
            <hr className="small" />
        </>
    );
}

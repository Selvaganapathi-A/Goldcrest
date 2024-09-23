import { ErrorCatcher } from './Error Boundary.jsx';

import { Timer } from './Section-002-01.jsx';
import { MouseHook } from './Section-002-02.jsx';
import { Clicker } from './Section-002-03.jsx';

export function DisplayS02() {
    return (
        <ErrorCatcher>
            <Timer />
            <hr className="small" />
            <MouseHook />
            <hr className="small" />
            <Clicker />
            <hr className="small" />
        </ErrorCatcher>
    );
}

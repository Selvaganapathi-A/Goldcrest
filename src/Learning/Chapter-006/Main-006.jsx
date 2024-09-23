import { DisplayS01 } from './Section-001.jsx';
import { DisplayS02 } from './Section-002.jsx';
import { DisplayS03 } from './Section-003.jsx';
import { DisplayS04 } from './Section-004.jsx';
import { DisplayS05 } from './Section-005.jsx';

export default function Main_006() {
    return (
        <>
            <h2>Chapter 6 - Hooks </h2>
            <br />
            <hr className="peacock" />

            <h3>Section 1 - useState Hook </h3>
            <DisplayS01 />
            <hr className="peacock" />

            <h3>Section 2 - useEffect hook </h3>
            <DisplayS02 />
            <hr className="peacock" />

            <h3>Section 3 - useContext hook </h3>
            <DisplayS03 />
            <hr className="peacock" />

            <h3>Seciont 4 - useReducer Hook </h3>
            <DisplayS04 />
            <hr className="peacock" />

            <h3>Section 5 - useCallback Hook </h3>
            <DisplayS05 />
            <hr className="peacock" />
        </>
    );
}

import { DisplayC4S1 } from './Section-001.jsx';
import { DisplayC4S2 } from './Section-002.jsx';
import { DisplayC4S3 } from './Section-003.jsx';

export default function Main_004() {
    return (
        <>
            <h2>Chapter 4</h2>
            <hr />

            <h3>Section 1</h3>
            <DisplayC4S1 />
            <hr className="small" />

            <h3>Section 2 - Regular Component vs PureComponent</h3>
            {/* <DisplayC4S2 /> */}
            <p>
                <small>Uncomment component and see results in console.</small>
            </p>
            <hr className="small" />

            <h3>Section 3 - Memoized Component </h3>
            <DisplayC4S3 />
            <hr className="small" />
        </>
    );
}

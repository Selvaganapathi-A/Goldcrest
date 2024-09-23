import './Main-005.scss';

import { DisplayC05S01 } from './Section-001.jsx';

import { DisplayC05S02 } from './Section-002.jsx';

export default function Main_005() {
    return (
        <div className="Main_005">
            <h2 className="gradient-text center-text">Chapter 5</h2>
            <hr />



            <h3>Section 1 - Fetch Data from API</h3>
            <DisplayC05S01 />

           

            <h3>Section 2 - Post Data to API</h3>
            <DisplayC05S02 />
        </div>
    );
}

import React from 'react';
import './Section-004.scss';
import { ErrorCatcher } from './Error Boundary.jsx';

import { Demo01 } from './Section-004-01.jsx';
import { Demo02 } from './Section-004-02.jsx';
import { Demo03 } from './Section-004-03.jsx';
import { Demo04 } from './Section-004-04.jsx';
//
//
//

class DisplayS04 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <ErrorCatcher>
                    <hr />
                    <div className="component">
                        <Demo04 />
                    </div>
                    <hr />
                    <div className="component">
                        <Demo01 />
                        <p className="note">Simple Use Reducer</p>
                    </div>
                    <div className="component">
                        <Demo02 />
                        <p className="note">Complex State Handling</p>
                    </div>
                    <div className="component">
                        <Demo03 name={'Meera'} />
                    </div>
                    <div className="component">
                        <Demo03 name={'John'} age={50} />
                    </div>
                </ErrorCatcher>
            </>
        );
    }
}

export { DisplayS04 };

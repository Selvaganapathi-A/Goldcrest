import './script.js';

import { lazy } from 'react';

const Main_001 = lazy(() =>
    import('../Learning/Chapter-001/Main-001.jsx').then(
        console.log('m1 loaded')
    )
);
const Main_002 = lazy(() =>
    import('../Learning/Chapter-002/Main-002.jsx').then(
        console.log('m2 loaded')
    )
);
const Main_003 = lazy(() =>
    import('../Learning/Chapter-003/Main-003.jsx').then(
        console.log('m3 loaded')
    )
);
const Main_004 = lazy(() =>
    import('../Learning/Chapter-004/Main-004.jsx').then(
        console.log('m4 loaded')
    )
);
const Main_005 = lazy(() =>
    import('../Learning/Chapter-005/Main-005.jsx').then(
        console.log('m5 loaded')
    )
);
const Main_006 = lazy(() =>
    import('../Learning/Chapter-006/Main-006.jsx').then(
        console.log('m6 loaded')
    )
);
const Main_007 = lazy(() =>
    import('../Learning/Chapter-007/Main-007.jsx').then(
        console.log('m7 loaded')
    )
);
const Main_008 = lazy(() =>
    import('../Learning/Chapter-008/Main-008.jsx').then(
        console.log('m8 loaded')
    )
);
const Main_009 = lazy(() =>
    import('../Learning/Chapter-009/Main-009.jsx').then(
        console.log('m9 loaded')
    )
);
const Main_010 = lazy(() =>
    import('../Learning/Chapter-010/Main-010.jsx').then(
        console.log('m10 loaded')
    )
);

// import Main_001 from '../Learning/Chapter-001/Main-001.jsx';

// import Main_002 from '../Learning/Chapter-002/Main-002.jsx';

// import Main_003 from '../Learning/Chapter-003/Main-003.jsx';

// import Main_004 from '../Learning/Chapter-004/Main-004.jsx';

// import Main_005 from '../Learning/Chapter-005/Main-005.jsx';

// import Main_006 from '../Learning/Chapter-006/Main-006.jsx';

// import Main_007 from '../Learning/Chapter-007/Main-007.jsx';

// import Main_008 from '../Learning/Chapter-008/Main-008.jsx';

// import Main_009 from '../Learning/Chapter-009/Main-009.jsx';

// import Main_010 from '../Learning/Chapter-010/Main-010.jsx';

export function Home() {
    return (
        <>
            {/*

            <Main_010 />
            <Main_009 />
            <Main_008 />
            <Main_007 />

            */}

            <Main_006 />

            {/*
            <Main_005 />
            <Main_004 />
            <Main_003 />
            <Main_002 />
            <Main_001 />

            */}
        </>
    );
}

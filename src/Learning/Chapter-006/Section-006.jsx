import React, { Suspense } from 'react';

export function Loading({ props }) {
    return <></>;
}

const Section006 = () => {
    return <Suspense fallback={<Loading />}></Suspense>;
};

export default Section006;

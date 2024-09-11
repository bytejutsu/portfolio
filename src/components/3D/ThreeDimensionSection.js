import React, { Suspense } from 'react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function ThreeDimensionSection() {
    return (
        <section className="bg-primary min-h-screen min-w-screen w-full h-full flex justify-center items-center">
            <Suspense fallback={<></>}>
                <Spline scene="https://prod.spline.design/TvzfpTKUk7GC36GI/scene.splinecode" />
            </Suspense>
        </section>
    );
}

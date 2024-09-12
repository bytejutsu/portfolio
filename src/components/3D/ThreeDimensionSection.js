import React, { Suspense } from 'react';
import getAssetPath from "@/utils/getAssetPath";

const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function ThreeDimensionSection() {
    return (
        <section className="bg-black min-h-screen min-w-screen w-full h-full flex justify-center items-center">
            <Suspense fallback={<></>}>
                <Spline scene={getAssetPath('./robot_arm.spline')} />
            </Suspense>
        </section>
    );
}

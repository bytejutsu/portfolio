"use client";

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const LottieAnimation = ({src}) => {
    return (
        <DotLottieReact
            src={src}
            loop
            autoplay
        />
    );
};

export default LottieAnimation;

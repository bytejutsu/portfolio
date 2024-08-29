"use client";

import {useGlitch} from "react-powerglitch";

function Glitch() {
    const glitch = useGlitch();

    return (
        <h1 className="font-bold text-7xl" ref={glitch.ref}>Data-ART_</h1>
    );
}

export default Glitch;
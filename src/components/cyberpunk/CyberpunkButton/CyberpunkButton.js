import React, { useMemo } from 'react';
import styles from './CyberpunkButton.module.css';

const CyberpunkButton = ({ cutoutCorners = ["top-right", "bottom-left"], buttonStyles = {}, children, ...restProps }) => {
    const buttonStyle = useMemo(() => {
        const size = "0.65rem"; // Size of the cutouts

        const coordinates = {
            "top-left": cutoutCorners.includes("top-left")
                ? `0% ${size}, ${size} 0%`
                : "0% 0%",
            "top-right": cutoutCorners.includes("top-right")
                ? `calc(100% - ${size}) 0%, 100% ${size}`
                : `100% 0%`,
            "bottom-right": cutoutCorners.includes("bottom-right")
                ? `100% calc(100% - ${size}), calc(100% - ${size}) 100%`
                : "100% 100%",
            "bottom-left": cutoutCorners.includes("bottom-left")
                ? `${size} 100%, 0% calc(100% - ${size})`
                : `0% 100%`,
        };

        const clipPath = `polygon(${coordinates["top-left"]},${coordinates["top-right"]},${coordinates["bottom-right"]},${coordinates["bottom-left"]})`;

        return {
            clipPath,
            ...buttonStyles,
        };
    }, [cutoutCorners, buttonStyles]);

    return (
        <button style={buttonStyle} className={styles.cyberpunkButton} {...restProps}>
            {children}
        </button>
    );
};

export default CyberpunkButton;

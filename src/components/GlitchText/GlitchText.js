import styles from './GlitchText.module.css';

const GlitchText = () => {
    return (
        <div>
            <p className={styles.glitch}>
                <span aria-hidden="true">DATA-ART_</span>
                DATA-ART_
                <span aria-hidden="true">DATA-ART_</span>
            </p>
        </div>
    );
};

export default GlitchText;

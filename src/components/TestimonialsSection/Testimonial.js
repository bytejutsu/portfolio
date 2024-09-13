import styles from './Testimonial.module.css';

const Testimonial = ({name, position, company, content}) => {
    return (
        <div className={styles.wrapper}>
            <div className={`font-extrabold ${styles.title}`}>
                {name} <small className="text-lg font-light font-mono">{position} - <span className="font-bold text-sm text-gray-800 font-sans2">{company}</span></small>
            </div>
            <div className={styles.description}>
                <p className="font-bold">
                    {content}
                </p>
            </div>
        </div>
    );
};

export default Testimonial;

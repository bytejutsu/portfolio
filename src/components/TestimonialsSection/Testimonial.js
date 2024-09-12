import styles from './Testimonial.module.css';

const Testimonial = ({name, position, company, content}) => {
    return (
        <div className={styles.wrapper}>
            <div className={`font-extrabold ${styles.title}`}>
                {name} <small className="text-xl font-light">{position} - <span className="font-bold">{company}</span></small>
            </div>
            <div className={styles.description}>
                <p className="font-semibold">
                    {content}
                </p>
            </div>
        </div>
    );
};

export default Testimonial;

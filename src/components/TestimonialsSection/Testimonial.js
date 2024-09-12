import styles from './Testimonial.module.css';

const Testimonial = ({content}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                Work <small>Hard</small> Play <small>Hard</small>
            </div>
            <div className={styles.description}>
                <p>
                    {content}
                </p>
            </div>
        </div>
    );
};

export default Testimonial;

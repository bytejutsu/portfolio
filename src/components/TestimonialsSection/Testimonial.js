import styles from './Testimonial.module.css';

const Testimonial = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                Work <small>Hard</small> Play <small>Hard</small>
            </div>
            <div className={styles.description}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus odio adipisci ducimus? Impedit est dolore maxime unde repudiandae blanditiis veritatis accusamus, in fugit excepturi optio aperiam officia eius, omnis numquam omnis numquam. omnis numquam.
                </p>
            </div>
        </div>
    );
};

export default Testimonial;

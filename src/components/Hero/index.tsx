import styles from './Hero.module.scss';

export const Hero = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Hello, I&apos;m Jakub.</h2>
            <p className={styles.description}>
                A passionate front-end developer that likes to learn new things. Currently I&apos;m a IT technical
                school graduate, looking to get my first job.
            </p>
        </div>
    );
};

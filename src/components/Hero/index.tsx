import styles from './Hero.module.scss';

export const Hero = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Hello, I&apos;m Jakub.</h2>
            <p className={styles.description}>
                A passionate Full Stack Developer who likes to learn new things. In love with JavaScript and Rust.
                Currently, I&apos;m building blockchain apps at Invariant.
            </p>
        </div>
    );
};

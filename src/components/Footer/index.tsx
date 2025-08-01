import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <div className={styles.container}>
            <p>
                &copy; <span className={styles.copyright}>Copyright 2025.</span> Jakub Zielonka
            </p>
        </div>
    );
};

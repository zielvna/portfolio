import styles from './Achievement.module.scss';

type Props = {
    title: React.ReactNode;
    date: string;
    content: string;
};

export const Achievement = ({ title, date, content }: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p className={styles.title}>{title}</p>
                <p>{date}</p>
            </div>
            <p className={styles.body}>{content}</p>
        </div>
    );
};

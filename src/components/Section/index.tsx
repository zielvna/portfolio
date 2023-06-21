import styles from './Section.module.scss';

type Props = {
    title: string;
    id: string;
    children: React.ReactNode;
};

export const Section = ({ title, id, children }: Props) => {
    return (
        <div id={id}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.body}>{children}</div>
        </div>
    );
};

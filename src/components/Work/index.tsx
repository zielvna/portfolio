import { Fragment } from 'react';
import styles from './Work.module.scss';

type Props = {
    title: React.ReactNode;
    company: string;
    period: string;
    tasks: string[];
};

export const Work = ({ title, company, period, tasks }: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p className={styles.title}>{title}</p>
                <p>
                    {company} ({period})
                </p>
            </div>
            <p className={styles.body}>
                {tasks.map((task) => (
                    <Fragment key={task}>
                        - {task}
                        <br />
                    </Fragment>
                ))}
            </p>
        </div>
    );
};

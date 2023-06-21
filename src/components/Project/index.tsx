import { Link, LinkGroup } from '../LinkGroup';
import styles from './Project.module.scss';

type Props = {
    name: string;
    description: string;
    githubLink: string;
    liveLink?: string;
    technologies: string;
    image: string;
};

export const Project = ({ name, description, githubLink, liveLink, technologies, image }: Props) => {
    const links: Link[] = [{ name: 'gitHub', to: githubLink }];

    if (liveLink) {
        links.push({ name: 'external', to: liveLink });
    }

    return (
        <div className={styles.container}>
            <div className={styles.body}>
                <div className={styles.info}>
                    <div>
                        <p className={styles.name}>{name}</p>
                        <p className={styles.description}>{description}</p>
                        <div className={styles.linkContainer}>
                            <LinkGroup links={links} />
                        </div>
                    </div>
                    <p className={styles.technologies}>{technologies}</p>
                </div>
            </div>
            <img className={styles.image} src={image} alt={`${name} application preview.`} />
        </div>
    );
};

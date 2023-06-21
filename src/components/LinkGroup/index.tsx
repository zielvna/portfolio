import { RiExternalLinkLine, RiGithubFill, RiLinkedinFill, RiStackOverflowFill } from 'react-icons/ri';
import { Link } from '../Link';
import styles from './LinkGroup.module.scss';

export type Link = { name: keyof typeof icons; to: string };

type Props = {
    links: Link[];
};

const icons = {
    gitHub: <RiGithubFill className={styles.icon} />,
    stackOverflow: <RiStackOverflowFill className={styles.icon} />,
    linkedIn: <RiLinkedinFill className={styles.icon} />,
    external: <RiExternalLinkLine className={styles.icon} />,
};

export const LinkGroup = ({ links }: Props) => (
    <div className={styles.container}>
        {links.map(({ name, to }) => (
            <Link key={name} to={to} scheme="icon">
                {icons[name]}
            </Link>
        ))}
    </div>
);

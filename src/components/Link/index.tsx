import styles from './Link.module.scss';

const schemas = {
    small: styles.small,
    big: styles.big,
    icon: styles.icon,
} as const;

type Props = {
    children: React.ReactNode;
    to: string;
    scheme?: keyof typeof schemas;
};

export const Link = ({ children, to, scheme = 'small' }: Props) => {
    return (
        <a className={schemas[scheme]} href={to} target={to.startsWith('#') ? '_self' : '_blank'} rel="noreferrer">
            {children}
        </a>
    );
};

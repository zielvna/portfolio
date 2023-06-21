import { Link, LinkGroup } from '../../components/LinkGroup';
import { Section } from '../../components/Section';
import styles from './Contact.module.scss';

const contacts = [
    {
        name: 'E-mail:',
        description: 'zielvna@gmail.com',
    },
];

const links: Link[] = [
    { name: 'gitHub', to: 'https://github.com/zielvna' },
    { name: 'linkedIn', to: 'https://www.linkedin.com/in/zielvna/' },
    { name: 'stackOverflow', to: 'https://stackoverflow.com/users/18704753/zielvna' },
];

export const ContactSection = () => {
    return (
        <Section title="Contact" id="contact">
            {contacts.map(({ name, description }) => (
                <p key={name}>{`${name} ${description}`}</p>
            ))}
            <div className={styles.linkGroupContainer}>
                <LinkGroup links={links} />
            </div>
        </Section>
    );
};

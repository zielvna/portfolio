import { Link, LinkGroup } from '../../components/LinkGroup';
import { Section } from '../../components/Section';
import styles from './AboutMe.module.scss';

const links: Link[] = [
    { name: 'gitHub', to: 'https://github.com/zielvna' },
    { name: 'linkedIn', to: 'https://www.linkedin.com/in/zielvna/' },
    { name: 'stackOverflow', to: 'https://stackoverflow.com/users/18704753/zielvna' },
];

export const AboutMeSection = () => (
    <Section title="About me" id="about-me">
        <p className={styles.description}>
            My journey with websites started in 2015 when I was in 6th grade. At that time I learned basic things like
            HTML and CSS. In the next couple of years, I learned a lot about JavaScript and Node (in the meantime I
            touched a little of C#). Then I had to make a choice between frontend and backend. I decided to go with the
            first option because I love to build websites (but I&apos;m not ending with my backend path!) and here I am
            now.
            <br />
            <br /> I think it&apos;s important to always learn new things, always be curious and pursue your passion.
        </p>
        <div className={styles.linkGroupContainer}>
            <LinkGroup links={links} />
        </div>
    </Section>
);

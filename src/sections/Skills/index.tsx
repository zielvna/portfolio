import { Section } from '../../components/Section';
import styles from './Skills.module.scss';

export const SkillsSection = () => {
    const skills = [
        { name: 'Languages', technologies: 'HTML, CSS, SASS, JavaScript, TypeScript, Node.js, Rust' },
        {
            name: 'Frameworks & Libraries',
            technologies:
                'React, Next, Express.js, React Native, Expo, Electron, Jest, Testing Library, Cypress, Redux, React Query, Styled Components, Tailwind, Storybook, Socket.io, CSS Modules',
        },
        { name: 'Tools', technologies: 'Git, GitHub Actions, Docker, Webpack, Yarn, ESLint, Figma' },
        {
            name: 'Databases & Other',
            technologies: 'MySQL, MongoDB, PostgreSQL, Firebase, Supabase, Strapi, Vercel, Netlify',
        },
        {
            name: 'Blockchain',
            technologies: 'Polkadot, Substrate, ink!, Aleph Zero, Odra, Casper',
        },
    ];

    const getList = () => {
        return skills.map(({ name, technologies }) => (
            <li key={name}>
                <p>
                    - <span className={styles.title}>{name}</span>
                    {technologies.length ? ` (${technologies})` : ''}
                </p>
            </li>
        ));
    };

    return (
        <Section title="Skills" id="skills">
            <p>Technologies I&apos;m familiar with:</p>
            <ul>{getList()}</ul>
        </Section>
    );
};

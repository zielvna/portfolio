import { Section } from '../../components/Section';
import styles from './Skills.module.scss';

export const SkillsSection = () => {
    const skills = [
        {
            name: 'Languages',
            technologies: 'HTML, CSS, SASS, JavaScript, TypeScript, Node.js, Rust, Solidity, Smart Contract Languages',
        },
        {
            name: 'Frameworks & Libraries',
            technologies:
                'React, Next, Express.js, Fastify, NestJS, React Native, Expo, Electron, Jest, Testing Library, Cypress, Redux, Zustand, React Query, Styled Components, Tailwind, Storybook, Socket.io, CSS Modules, MUI',
        },
        {
            name: 'Tools',
            technologies: 'Linux, Bash, Git, GitHub Actions, Docker, Vite, Webpack, Yarn, ESLint, Figma, Cargo, VPS',
        },
        {
            name: 'Databases & Other',
            technologies: 'MySQL, MongoDB, PostgreSQL, Redis, Firebase, Supabase, Strapi, Vercel, Netlify',
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

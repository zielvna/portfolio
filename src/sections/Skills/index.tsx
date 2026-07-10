import { Section } from '../../components/Section';
import styles from './Skills.module.scss';

export const SkillsSection = () => {
    const skills = [
        {
            name: 'Languages',
            technologies:
                'HTML, CSS, SASS, JavaScript, TypeScript, Node.js, Rust, Bash, Terraform, Solidity, Smart Contract Languages',
        },
        {
            name: 'Frameworks & Libraries',
            technologies:
                'React, Next, Express.js, Fastify, NestJS, React Native, Expo, Electron, Socket.io, Drizzle, TypeORM, Jest, Testing Library, Cypress, Playwright, Puppeteer, Vitest, Redux, Zustand, React Query, Styled Components, Tailwind, Shadcn/ui, Radix UI, Storybook, CSS Modules',
        },
        {
            name: 'Tools',
            technologies: 'Claude, Cursor, Linux, Git, GitHub Actions, Docker, Vite, Webpack, Figma, Jira, Turborepo',
        },
        {
            name: 'Databases & Other',
            technologies:
                'MySQL, MongoDB, PostgreSQL, SQLite, Redis, AWS, DigitalOcean, Firebase, Supabase, Strapi, Vercel, Netlify',
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

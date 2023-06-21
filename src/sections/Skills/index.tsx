import { Section } from '../../components/Section';
import styles from './Skills.module.scss';

export const SkillsSection = () => {
    const skills = [
        { name: 'HTML', technologies: '' },
        { name: 'CSS', technologies: 'SCSS, CSS Modules, Styled components, Tailwind' },
        { name: 'JavaScript', technologies: 'React, Next, Redux, React Hook Form, React Native, Expo, Electron' },
        { name: 'TypeScript', technologies: '' },
        { name: 'Tools', technologies: 'NPM, Yarn, Eslint, Git, Github Actions, Figma, Postman, VSC' },
        { name: 'Other', technologies: 'Firebase, Vercel' },
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
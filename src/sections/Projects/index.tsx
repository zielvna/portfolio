import { Project } from '../../components/Project';
import { Section } from '../../components/Section';
import styles from './Projects.module.scss';

export const ProjectsSection = () => {
    const projects = [
        {
            name: 'Pizzaplace',
            description:
                'A pizzeria management app. By doing this project I learnt how to test front-end and back-end and how to communicate between client and server.',
            githubLink: 'https://github.com/zielvna/pizzaplace',
            technologies: 'Next, Express, MongoDB, TypeScript, Jest',
        },
        {
            name: 'Photogram',
            description:
                'A photo-based social media app. By doing this project I learnt how to handle communication with server, how to upload images and a lot of new stuff about TypeScript.',
            githubLink: 'https://github.com/zielvna/photogram',
            liveLink: 'https://photogram-zielvna.vercel.app/',
            technologies: 'Next, TypeScript, Firebase, Tailwind, React Hook Form, Vercel',
        },
        {
            name: 'Caloriatu',
            description:
                'A mobile app to track calories. By doing this project I learnt how to develop mobile apps, how they work and how to store data.',
            githubLink: 'https://github.com/zielvna/caloriatu',
            technologies: 'React Native, Expo, Styled Components, Redux',
        },
        {
            name: 'Screenshoter',
            description:
                'A screenshot app for all platforms. By doing this project I learnt how to develop desktop apps and how to use CI/CD tools.',
            githubLink: 'https://github.com/zielvna/screenshoter',
            technologies: 'Electron, GitHub Actions',
        },
        {
            name: 'Portfolio',
            description:
                'An app about me and all my projects. By doing this project I got more proficient in TypeScript & SASS and CSS Modules.',
            githubLink: 'https://github.com/zielvna/portfolio/',
            liveLink: '/',
            technologies: 'React, TypeScript, CSS Modules, SASS, Netlify',
        },
    ];

    return (
        <Section title="Projects" id="projects">
            <div className={styles.container}>
                {projects.map((project) => (
                    <Project key={project.name} {...project} />
                ))}
            </div>
        </Section>
    );
};

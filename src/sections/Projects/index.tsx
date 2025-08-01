import { Project } from '../../components/Project';
import { Section } from '../../components/Section';
import styles from './Projects.module.scss';

export const ProjectsSection = () => {
    const projects = [
        {
            name: 'ALPH Trade',
            description:
                'Crypto synthetic perpetual futures exchange. I made this project during "Why So Serious" Alephium Hackathon. By doing this project I learnt how perpetual futures exchange works, math behind it and how to organize a complete project from scratch.',
            githubLink: 'https://github.com/zielvna/alph-trade',
            liveLink: 'https://alph-trade.vercel.app/',
            technologies: 'Next.js, Jest, Smart Contracts, Math',
        },
        {
            name: 'Serwer',
            description:
                'Simplest web framework for Rust. By doing this project I learnt how the HTTP protocol works under the hood and practical experience with low-level multithreading.',
            githubLink: 'https://github.com/zielvna/serwer',
            liveLink: 'https://serwerframework.vercel.app/',
            technologies: 'Rust, GitHub Actions, HTTP, Multithreading',
        },
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

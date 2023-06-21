import { Project } from '../../components/Project';
import { Section } from '../../components/Section';

export const ProjectsSection = () => {
    const projects = [
        {
            name: 'Photogram',
            description:
                'A photo-based social media app. By doing this project I learnt how to handle communication with server, how to upload images and a lot of new stuff about TypeScript.',
            githubLink: 'https://github.com/zielvna/photogram',
            liveLink: 'https://photogram-zielvna.vercel.app/',
            technologies: 'Next, TypeScript, Firebase, Tailwind, React Hook Form, Vercel',
            image: 'https://via.placeholder.com/432x288',
        },
        {
            name: 'Caloriatu',
            description:
                'A mobile app to track calories. By doing this project I learnt how to develop mobile apps, how they work and how to store data.',
            githubLink: 'https://github.com/zielvna/caloriatu',
            technologies: 'React Native, Expo, Styled Components, Redux',
            image: 'https://via.placeholder.com/432x288',
        },
        {
            name: 'Screenshoter',
            description:
                'A screenshot app for all platforms. By doing this project I learnt how to develop desktop apps and how to use CI/CD tools.',
            githubLink: 'https://github.com/zielvna/screenshoter',
            technologies: 'Electron, GitHub Actions',
            image: 'https://via.placeholder.com/432x288',
        },
    ];

    return (
        <Section title="Projects" id="projects">
            {projects.map((project) => (
                <Project key={project.name} {...project} />
            ))}
        </Section>
    );
};

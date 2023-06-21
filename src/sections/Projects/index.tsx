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
            image: 'https://github.com/zielvna/portfolio/assets/102986585/4d339bb8-71c6-4b10-800c-fa5a84eb4964',
        },
        {
            name: 'Caloriatu',
            description:
                'A mobile app to track calories. By doing this project I learnt how to develop mobile apps, how they work and how to store data.',
            githubLink: 'https://github.com/zielvna/caloriatu',
            technologies: 'React Native, Expo, Styled Components, Redux',
            image: 'https://github.com/zielvna/portfolio/assets/102986585/906766bc-e6b6-403b-89a5-ad37728f2e99',
        },
        {
            name: 'Screenshoter',
            description:
                'A screenshot app for all platforms. By doing this project I learnt how to develop desktop apps and how to use CI/CD tools.',
            githubLink: 'https://github.com/zielvna/screenshoter',
            technologies: 'Electron, GitHub Actions',
            image: 'https://github.com/zielvna/portfolio/assets/102986585/a942f4ef-6b78-4c87-addb-45aa09054a6d',
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

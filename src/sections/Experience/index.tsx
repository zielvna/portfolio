import { Section } from '../../components/Section';
import { Work } from '../../components/Work';

export const ExperienceSection = () => {
    const works = [
        {
            title: 'Mid Full-stack Developer',
            company: 'Selleo',
            period: '09.2025 - Present',
            tasks: [
                'Developing front-end applications with React, Next and modern UI libraries',
                'Building and maintaining scalable back-end services with Node.js and various frameworks/databases',
                'Designing and integrating APIs to support full-stack applications',
                'Writing and maintaining unit, integration and end-to-end tests to ensure code quality and stability',
                'Collaborating with cross-functional teams to deliver high-quality web solutions',
            ],
        },
        {
            title: 'Junior Full-stack Developer',
            company: 'Invariant',
            period: '08.2023 - 09.2025',
            tasks: [
                'Building Web3 front-end applications using React, Next and modern libraries',
                'Creating scalable back-end services with Node.js and various frameworks and databases',
                'Developing blockchain applications and smart contracts in Rust, Solidity and other technologies',
                'Analyzing and optimizing complex math to ensure performance, security and stability',
                'Researching blockchain architecture and smart contracts to support development decisions',
            ],
        },
    ];

    return (
        <Section title="Experience" id="experience">
            {works.map((work) => (
                <Work key={work.company} {...work} />
            ))}
        </Section>
    );
};

import { Section } from '../../components/Section';
import { Work } from '../../components/Work';

export const ExperienceSection = () => {
    const works = [
        {
            title: 'Full-stack Developer',
            company: 'Invariant Labs',
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

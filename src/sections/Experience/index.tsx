import { Section } from '../../components/Section';
import { Work } from '../../components/Work';

export const ExperienceSection = () => {
    const works = [
        {
            title: 'Mid Full-stack Developer',
            company: 'Selleo',
            period: '09.2025 - 08.2026',
            tasks: [
                'Built and scaled web apps using React, Next.js, TypeScript, and Node.js, focusing on high performance and clean architecture',
                'Designed REST APIs and optimized PostgreSQL query performance for high-throughput services',
                'Maintained end-to-end testing coverage (Jest, Playwright, Vitest) and automated CI/CD pipelines with Docker & GitHub Actions',
            ],
        },
        {
            title: 'Junior Full-stack Developer',
            company: 'Invariant',
            period: '08.2023 - 09.2025',
            tasks: [
                'Developed complex web interfaces in React/Next.js for real-time financial and trading workflows',
                'Engineered core services and smart contracts in Rust & Solidity, optimizing for execution speed, security, and low latency',
                'Implemented and refined complex mathematical models for automated market makers (AMMs) and financial protocols',
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

import { Section } from '../../components/Section';
import { Work } from '../../components/Work';

export const ExperienceSection = () => {
    const works = [
        {
            title: 'Full Stack Developer',
            company: 'Invariant',
            period: 'August 2023 - Present',
            tasks: [
                ' Developing performant financial blockchain applications (CLAMMs) in Rust',
                'Building Web3 Front End applications in React and TypeScript',
                'Analyzing and optimizing complex math to ensure security and stability',
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

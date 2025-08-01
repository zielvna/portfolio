import { Section } from '../../components/Section';
import { Achievement } from '../../components/Achievement';

export const AchievementsSection = () => {
    const achievements = [
        {
            title: 'Alephium Hackathon #1 Pioneers - 1st place',
            date: '03.2024',
            content:
                'Built a concentrated liquidity decentralized exchange (CLAMM DEX) with the Invariant Labs team. We won first place.',
        },
        {
            title: 'Total Eclipse Challenge - 1st place',
            date: '09.2024',
            content:
                'Created a full range tokenizer enabling liquidity tokenization for CLAMM DEXes. Worked with the Invariant Labs team and secured first place.',
        },
        {
            title: 'Alephium Hackathon 1.5: "Why So Serious" - 1st place',
            date: '10.2024',
            content:
                'Designed and developed a crypto synthetic perpetual futures exchange from scratch. The project won first place.',
        },
    ];

    return (
        <Section title="Achievements" id="achievements">
            {achievements.map((work) => (
                <Achievement key={work.title} {...work} />
            ))}
        </Section>
    );
};

import { Section } from '../../components/Section';
import { Achievement } from '../../components/Achievement';

export const AchievementsSection = () => {
    const achievements = [
        {
            title: 'Alephium Hackathon #1 Pioneers - 1st place',
            date: '03.2024',
            content:
                'Secured 1st place among 105 participants (18 qualified submissions). Co-developed an automated market maker (AMM) decentralized exchange, building high-throughput core financial logic in a fast-paced environment.',
        },
        {
            title: 'Total Eclipse Challenge - 1st place',
            date: '09.2024',
            content:
                'Won 1st place in a global developer hackathon ($50k total prize pool). Designed and implemented a financial tokenization tool from scratch, enabling full-range liquidity management for decentralized trading protocols.',
        },
        {
            title: 'Alephium Hackathon 1.5 Why so serious - 1st place',
            date: '10.2024',
            content:
                'Built a full-stack synthetic derivatives platform from scratch, winning 1st place out of 23 submitted projects. Engineered real-time data streaming and complex financial calculation pipelines.',
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

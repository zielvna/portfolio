import './App.scss';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Wrapper } from './components/Wrapper';
import { AboutMeSection } from './sections/AboutMe';
import { AchievementsSection } from './sections/Achievements';
import { ContactSection } from './sections/Contact';
import { ExperienceSection } from './sections/Experience';
import { ProjectsSection } from './sections/Projects';
import { SkillsSection } from './sections/Skills';

export const App = () => (
    <Wrapper>
        <Header />
        <Hero />
        <AboutMeSection />
        <ExperienceSection />
        <SkillsSection />
        <AchievementsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
    </Wrapper>
);

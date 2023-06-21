import './App.scss';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Wrapper } from './components/Wrapper';
import { AboutMeSection } from './sections/AboutMe';
import { ContactSection } from './sections/Contact';
import { ProjectsSection } from './sections/Projects';
import { SkillsSection } from './sections/Skills';

export const App = () => (
    <Wrapper>
        <Header />
        <Hero />
        <AboutMeSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
    </Wrapper>
);

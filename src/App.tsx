import { siteConfig } from './data/portfolio';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Writing from './components/Writing';
import OpenSource from './components/OpenSource';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="site-wrapper">
      <Navbar
        name={siteConfig.name}
        role={siteConfig.role}
        resumeUrl={siteConfig.resumeUrl}
      />
      <main>
        <Hero
          name={siteConfig.name}
          role={siteConfig.role}
          location={siteConfig.location}
          headline={siteConfig.headline}
          subheadline={siteConfig.subheadline}
          availabilityLabel={siteConfig.availabilityLabel}
          resumeUrl={siteConfig.resumeUrl}
          email={siteConfig.email}
          quickStats={siteConfig.quickStats}
        />
        <div className="container">
          <About paragraphs={siteConfig.aboutParagraphs} />
          <Projects projects={siteConfig.projects} />
          <Skills
            skillGroups={siteConfig.skillGroups}
            interests={siteConfig.interests}
          />
          <Education education={siteConfig.education} />
          <Writing entries={siteConfig.writing} />
          <OpenSource
            githubUrl={
              siteConfig.socialLinks.find((l) => l.label === 'GitHub')?.url || '#'
            }
          />
          <Contact
            socialLinks={siteConfig.socialLinks}
            email={siteConfig.email}
            resumeUrl={siteConfig.resumeUrl}
          />
        </div>
      </main>
      <Footer name={siteConfig.name} tagline={siteConfig.footerTagline} />
    </div>
  );
}

export default App;

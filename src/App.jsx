import { useState, useCallback } from 'react';
import LoadingScreen from './components/ui/LoadingScreen';
import CustomCursor from './components/ui/CustomCursor';
import Navbar from './components/ui/Navbar';
import ParticleBackground from './components/3d/ParticleBackground';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';
import Footer from './components/ui/Footer';

/**
 * App — Root component, orchestrates loading + main portfolio layout
 */
function App() {
  const [loaded, setLoaded] = useState(false);

  const handleLoadComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {/* SEO meta is in index.html */}

      {/* Custom cursor (desktop only) */}
      <CustomCursor />

      {/* Cinematic loading screen */}
      {!loaded && <LoadingScreen onComplete={handleLoadComplete} />}

      {/* Main portfolio */}
      {loaded && (
        <div style={{ position: 'relative', minHeight: '100vh' }}>
          {/* Global 3D particle background — fixed behind everything */}
          <ParticleBackground />

          {/* Navigation */}
          <Navbar />

          {/* Sections */}
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Achievements />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;

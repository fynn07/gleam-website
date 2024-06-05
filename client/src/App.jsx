import React, { useState, useEffect, useRef } from 'react';
import Landing from './components/Landing';
import NavBar from './components/NavBar';
import About from './components/About';
import Music from './components/Music';

function App() {
  const [landingOpacity, setLandingOpacity] = useState(1);
  const [aboutOpacity, setAboutOpacity] = useState(1);
  const [musicOpacity, setMusicOpacity] = useState(1);

  const landingRef = useRef(null);
  const aboutRef = useRef(null);
  const musicRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const landingPosition = landingRef.current.getBoundingClientRect().top;
      const aboutPosition = aboutRef.current.getBoundingClientRect().top;
      const musicPosition = musicRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Calculate distance from center of viewport
      const landingDistanceFromCenter = Math.abs(windowHeight / 10 - landingPosition * 1.2);
      const aboutDistanceFromCenter = Math.abs(windowHeight / 10 - aboutPosition * 1.2);
      const musicDistanceFromCenter = Math.abs(windowHeight / 10 - musicPosition * 1.2);

      // Calculate opacity based on distance from center
      const maxDistance = windowHeight / 2;
      setLandingOpacity(1 - landingDistanceFromCenter / maxDistance);
      setAboutOpacity(1 - aboutDistanceFromCenter / maxDistance);
      setMusicOpacity(1 - musicDistanceFromCenter / maxDistance);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <div
        className="fixed top-0 left-0 w-screen h-screen z-0"
        style={{
          backgroundImage: 'url(src/assets/gleam_background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
        }}
      />
      <div className='px-40 py-5'>
        <NavBar />
        <div style={{ opacity: landingOpacity}} ref={landingRef}>
          <Landing />
        </div>
        <div style={{ opacity: aboutOpacity }} ref={aboutRef}>
          <About />
        </div>
        <div style={{ opacity: musicOpacity }} ref={musicRef}>
        <Music />
        </div>
      </div>
    </div>
  );
}

export default App;

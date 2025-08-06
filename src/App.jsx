import './index.css';
import { useState } from 'react';
import MinimapNavbar from "./components/MinimapNavbar";
import Welcome from "./components/Welcome";
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <>
      {showWelcome && <Welcome onEnter={() => setShowWelcome(false)} />}

      <div className="relative min-h-screen w-full overflow-x-hidden bg-black" id="dashboard">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover z-10 blur-md opacity-80"
        >
          <source src="/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Foreground Content */}
        <div className="relative z-10">
          <MinimapNavbar />
          <div className="px-4 md:px-6 lg:px-20 text-white">
            <section id="home"><Home /></section>
            <section id="about"><About /></section>
            <section id="projects"><Projects /></section>
            <section id="contact"><Contact /></section>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

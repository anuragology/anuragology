import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Courses from './components/Courses';
import SocialMedia from './components/SocialMedia';
import VideoSection from './components/VideoSection';
import Contact from './components/Contact';
import SpaceShooter from './components/SpaceShooter';
import Footer from './components/Footer';
import ProjectPage from './pages/ProjectPage';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL || '/'}>
      <div className="bg-black min-h-screen">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Experience />
                <Portfolio />
                <Courses />
                <SocialMedia />
                <VideoSection />
                <Contact />
                <SpaceShooter />
              </>
            }
          />
          <Route path="/projects/:projectId" element={<ProjectPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

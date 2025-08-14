import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';

function App() {
  const [showAdmin, setShowAdmin] = useState(false);

  useEffect(() => {
    // Check if URL path is /admin
    if (window.location.pathname === '/admin') {
      setShowAdmin(true);
    }
  }, []);

  if (showAdmin) {
    return <AdminPanel />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
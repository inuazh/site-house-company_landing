import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/Services';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import { ThemeProvider } from './theme/ThemeProvider';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <div style={{ minHeight: '100vh', background: 'var(--color-bg)', color: 'var(--color-text)' }}>
          <Header />
          <div style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '32px 16px 0 16px',
            flexGrow: 1,
            minHeight: 'calc(100vh - 120px)',
            boxSizing: 'border-box'
          }}>
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contacts" element={<Contacts />} />
              </Routes>
            </main>
          </div>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;

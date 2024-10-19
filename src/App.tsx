import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Homepage';
import ServicesPage from './pages/Servicespages';
import ContactPage from './pages/ContactPage';
import RegisterPage from './pages/RegisterPage';
import TestPage from './pages/TestPage';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css'; 

function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <TransitionGroup>
          <CSSTransition
            key={location.key} 
            classNames="fade"  
            timeout={300}      
          >
            <div>
              <Routes location={location}>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/test" element={<TestPage />} />
              </Routes>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </main>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

const HomePage: React.FC = () => (
  <div>
    <Hero />
    <Services />
    <Testimonials />
  </div>
);

export default HomePage;
import React from 'react';
import Services from '../components/Services';

const ServicesPage: React.FC = () => (
  <div className="pt-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl text-center font-extrabold text-gray-900 mb-8">Nuestros Servicios</h1>
      <p className="text-xl text-center text-gray-600 mb-12">
        En Servimax, ofrecemos una amplia gama de servicios diseñados para satisfacer todas sus necesidades de administración de propiedades y más. Explore nuestras ofertas a continuación.
      </p>
    </div>
    <Services />
  </div>
);

export default ServicesPage;

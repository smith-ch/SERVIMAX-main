import React from 'react';
import Services from '../components/Services';

const ServicesPage: React.FC = () => (
  <div className="pt-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Nuestros Servicios</h1>
      <p className="text-xl text-gray-600 mb-12">
        En SERVIMAX, ofrecemos una amplia gama de servicios diseñados para satisfacer todas sus necesidades de administración de propiedades y más. Explore nuestras ofertas a continuación.
      </p>

      {/* Recuadro azul */}
      <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg mb-12">
        <h2 className="text-2xl font-bold mb-4">Servicios integrales para su tranquilidad</h2>
        <p className="mb-4">
          SERVIMAX ofrece soluciones completas en administración de propiedades, construcción y logística. 
          Optimizamos sus recursos con eficiencia y profesionalismo.
        </p>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
          Contáctenos
        </button>
      </div>

    </div>
    <Services />
  </div>
);

export default ServicesPage;

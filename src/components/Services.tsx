import React from 'react';
import { Building2, Brush, Briefcase, TruckIcon, PiggyBank, Shield } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  { name: 'Administración de Propiedades', icon: Building2, description: 'Gestión completa de propiedades residenciales y comerciales.', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' },
  { name: 'Limpieza y Mantenimiento', icon: Brush, description: 'Servicios de limpieza profunda y mantenimiento preventivo.', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' },
  { name: 'Gestión de Alquileres', icon: Briefcase, description: 'Maximice el potencial de su propiedad con nuestra experiencia.', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' },
  { name: 'Suministros de Construcción', icon: TruckIcon, description: 'Materiales de construcción de alta calidad y servicios de colocación.', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' },
  { name: 'Consultoría Financiera', icon: PiggyBank, description: 'Estrategias financieras eficientes para su negocio.', image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' },
  { name: 'Seguridad', icon: Shield, description: 'Sistemas de seguridad avanzados y servicios de vigilancia.', image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' },
];

const Services: React.FC = () => (
  <section id="services" className="py-12 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Nuestros Servicios</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  </section>
);

export default Services;
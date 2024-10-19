import React from 'react';

const testimonials = [
  {
    name: 'María González',
    role: 'Propietaria',
    content: 'SERVIMAX ha transformado la gestión de mis propiedades. Su equipo es eficiente y confiable.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Carlos Rodríguez',
    role: 'Gerente de Construcción',
    content: 'Los servicios de suministro y logística de SERVIMAX son incomparables. Han mejorado significativamente nuestra eficiencia.',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

const Testimonials: React.FC = () => (
  <section id="testimonials" className="py-12 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Lo que dicen nuestros clientes</h2>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-50 rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <img className="h-12 w-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-700 italic">"{testimonial.content}"</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
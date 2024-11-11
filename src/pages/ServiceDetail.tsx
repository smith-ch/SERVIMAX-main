import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail: React.FC = () => {
    const { serviceId } = useParams<{ serviceId: string }>();

    // Servicios predefinidos en un Map para optimizar la búsqueda
    const services = new Map([
        [
            'administracion-de-propiedades',
            {
                name: 'Administración de Propiedades',
                icon: 'Building2',
                description: 'Gestión completa de propiedades residenciales y comerciales.',
                image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            }
        ],
        [
            'limpieza-y-mantenimiento',
            {
                name: 'Limpieza y Mantenimiento',
                icon: 'Brush',
                description: 'Servicios de limpieza profunda y mantenimiento preventivo.',
                image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            }
        ],
        [
            'gestion-de-alquileres',
            {
                name: 'Gestión de Alquileres',
                icon: 'Briefcase',
                description: 'Maximice el potencial de su propiedad con nuestra experiencia.',
                image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            }
        ],
        [
            'suministros-de-construccion',
            {
                name: 'Suministros de Construcción',
                icon: 'TruckIcon',
                description: 'Materiales de construcción de alta calidad y servicios de colocación.',
                image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            }
        ],
        [
            'consultoria-financiera',
            {
                name: 'Consultoría Financiera',
                icon: 'PiggyBank',
                description: 'Estrategias financieras eficientes para su negocio.',
                image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            }
        ],
        [
            'seguridad',
            {
                name: 'Seguridad',
                icon: 'Shield',
                description: 'Sistemas de seguridad avanzados y servicios de vigilancia.',
                image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            }
        ]
    ]);

    // Obtiene el servicio según el serviceId
    const serviceDetails = services.get(serviceId|| '') || { name: "Servicio no encontrado", description: "Detalles no disponibles", image: "" };

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="w-full md:w-1/2">
                        {/* Imagen del servicio */}
                        <img
                            src={serviceDetails.image}
                            alt={serviceDetails.name}
                            className="w-full h-64 object-cover rounded-lg mb-6 md:mb-0"
                        />
                    </div>
                    <div className="w-full md:w-1/2 md:pl-8">
                        <h2 className="text-3xl font-bold text-gray-900">{serviceDetails.name}</h2>
                        <p className="text-xl text-gray-700 mt-4">{serviceDetails.description}</p>

                        {/* Características */}
                        <div className="mt-8">
                            <h3 className="text-2xl font-semibold text-gray-900">Características:</h3>
                            <ul className="list-disc pl-6 text-gray-700">
                                <li>Servicio personalizado</li>
                                <li>Alta calidad garantizada</li>
                                <li>Atención profesional</li>
                                {/* Puedes agregar más características según sea necesario */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;

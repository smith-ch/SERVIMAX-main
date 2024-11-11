import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Services from '../components/Services';



const ServicesPage: React.FC = () => {
    const [expandedService, setExpandedService] = useState<string | null>(null);

    const toggleServiceDetails = (service: string) => {
        setExpandedService(prev => (prev === service ? null : service));
    };

    return (
        <div className="pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl text-center font-extrabold text-gray-900 mb-8">Nuestros Servicios</h1>
                <p className="text-xl text-center text-gray-600 mb-12">
                    En Servimax, ofrecemos una amplia gama de servicios diseñados para satisfacer todas sus necesidades de administración de propiedades y más. Explore nuestras ofertas a continuación.
                </p>
            </div>

            {/* Sección de Servicios */}
            <Services />

            {/* Sección de Tarifario */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-12 bg-gray-100 rounded-lg shadow">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Tarifario por Servicio Requerido</h2>
                <p className="text-lg text-center text-gray-700 mb-6">
                    Consulte nuestras tarifas para cada uno de nuestros servicios. Si necesita más información, no dude en ponerse en contacto con nosotros.
                </p>

                {/* Lista de Servicios con formato estilo Amazon */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Servicio de Administración de Propiedades */}
                    <div onClick={() => toggleServiceDetails('administracion')} className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl">
                        <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Administración de Propiedades" className="w-full h-48 object-cover rounded-lg mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900">Administración de Propiedades</h3>
                        <p className="text-gray-700 mt-2">Gestión completa de propiedades residenciales y comerciales.</p>
                        <p className="text-lg font-semibold text-gray-900 mt-2">$120/mes</p>
                        <div className="flex gap-4 mt-4">
                            <Link to="/contact" className="bg-yellow-400 text-gray-900 py-2 px-4 rounded-lg font-semibold">Ordenar ahora</Link>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold">Requerir información</button>
                        </div>
                        {expandedService === 'administracion' && (
                            <div className="mt-4 text-gray-700">
                                <p><strong>Detalles:</strong> Ofrecemos gestión completa de propiedades residenciales y comerciales.</p>
                                <p><strong>Características adicionales:</strong> Gestión de inquilinos, mantenimiento, cobro de rentas.</p>
                            </div>
                        )}
                    </div>

                    {/* Servicio de Limpieza y Mantenimiento */}
                    <div onClick={() => toggleServiceDetails('limpieza')} className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl">
                        <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Limpieza y Mantenimiento" className="w-full h-48 object-cover rounded-lg mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900">Limpieza y Mantenimiento</h3>
                        <p className="text-gray-700 mt-2">Servicios de limpieza profunda y mantenimiento preventivo.</p>
                        <p className="text-lg font-semibold text-gray-900 mt-2">$80/mes</p>
                        <div className="flex gap-4 mt-4">
                            <Link to="/contact" className="bg-yellow-400 text-gray-900 py-2 px-4 rounded-lg font-semibold">Ordenar ahora</Link>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold">Requerir información</button>
                        </div>
                        {expandedService === 'limpieza' && (
                            <div className="mt-4 text-gray-700">
                                <p><strong>Detalles:</strong> Incluye limpieza regular, reparaciones menores y mantenimiento preventivo de instalaciones.</p>
                                <p><strong>Características adicionales:</strong> Servicio de plomería, electricidad, mantenimiento de jardines.</p>
                            </div>
                        )}
                    </div>

                    {/* Servicio de Gestión de Alquileres */}
                    <div onClick={() => toggleServiceDetails('alquileres')} className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl">
                        <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Gestión de Alquileres" className="w-full h-48 object-cover rounded-lg mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900">Gestión de Alquileres</h3>
                        <p className="text-gray-700 mt-2">Maximice el potencial de su propiedad con nuestra experiencia.</p>
                        <p className="text-lg font-semibold text-gray-900 mt-2">$150/mes</p>
                        <div className="flex gap-4 mt-4">
                            <Link to="/contact" className="bg-yellow-400 text-gray-900 py-2 px-4 rounded-lg font-semibold">Ordenar ahora</Link>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold">Requerir información</button>
                        </div>
                        {expandedService === 'alquileres' && (
                            <div className="mt-4 text-gray-700">
                                <p><strong>Detalles:</strong> Gestión completa de alquileres, incluyendo búsqueda de inquilinos y administración de contratos.</p>
                                <p><strong>Características adicionales:</strong> Análisis de mercado, ajuste de rentas, gestión de pagos.</p>
                            </div>
                        )}
                    </div>

                    {/* Servicio de Suministros de Construcción */}
                    <div onClick={() => toggleServiceDetails('construccion')} className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl">
                        <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Suministros de Construcción" className="w-full h-48 object-cover rounded-lg mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900">Suministros de Construcción</h3>
                        <p className="text-gray-700 mt-2">Materiales de construcción de alta calidad y servicios de colocación.</p>
                        <p className="text-lg font-semibold text-gray-900 mt-2">Desde $200</p>
                        <div className="flex gap-4 mt-4">
                            <Link to="/contact" className="bg-yellow-400 text-gray-900 py-2 px-4 rounded-lg font-semibold">Ordenar ahora</Link>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold">Requerir información</button>
                        </div>
                        {expandedService === 'construccion' && (
                            <div className="mt-4 text-gray-700">
                                <p><strong>Detalles:</strong> Materiales de alta calidad y servicios especializados en construcción.</p>
                                <p><strong>Características adicionales:</strong> Entrega a domicilio, asesoría en obra, soporte post-venta.</p>
                            </div>
                        )}
                    </div>

                    {/* Servicio de Consultoría Financiera */}
                    <div onClick={() => toggleServiceDetails('financiera')} className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl">
                        <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Consultoría Financiera" className="w-full h-48 object-cover rounded-lg mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900">Consultoría Financiera</h3>
                        <p className="text-gray-700 mt-2">Asesoría para mejorar el rendimiento financiero de su propiedad.</p>
                        <p className="text-lg font-semibold text-gray-900 mt-2">$100/mes</p>
                        <div className="flex gap-4 mt-4">
                            <Link to="/contact" className="bg-yellow-400 text-gray-900 py-2 px-4 rounded-lg font-semibold">Ordenar ahora</Link>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold">Requerir información</button>
                        </div>
                        {expandedService === 'financiera' && (
                            <div className="mt-4 text-gray-700">
                                <p><strong>Detalles:</strong> Servicios de asesoría para optimización de ingresos y reducción de costos.</p>
                                <p><strong>Características adicionales:</strong> Planificación de presupuesto, análisis de costos, informes mensuales.</p>
                            </div>

                        )}
                    </div>
                    {/* Servicio de Seguridad */}
                    <div onClick={() => toggleServiceDetails('seguridad')} className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl">
                        <img src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Seguridad" className="w-full h-48 object-cover rounded-lg mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900">Seguridad</h3>
                        <p className="text-gray-700 mt-2">Soluciones de seguridad personalizadas para proteger sus propiedades y bienes.</p>
                        <p className="text-lg font-semibold text-gray-900 mt-2">$130/mes</p>
                        <div className="flex gap-4 mt-4">
                            <Link to="/contact" className="bg-yellow-400 text-gray-900 py-2 px-4 rounded-lg font-semibold">Ordenar ahora</Link>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold">Requerir información</button>
                        </div>
                        {expandedService === 'seguridad' && (
                            <div className="mt-4 text-gray-700">
                                <p><strong>Detalles:</strong> Servicios de vigilancia, instalación de cámaras y sistemas de alarmas.</p>
                                <p><strong>Características adicionales:</strong> Monitoreo 24/7, respuesta rápida ante emergencias, soporte técnico continuo.</p>
                            </div>
                        )}
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ServicesPage;

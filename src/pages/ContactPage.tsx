import React from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const ContactPage: React.FC = () => (
    <div className="pt-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Contáctenos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-gray-600 mb-6">
              Estamos aquí para ayudarle. No dude en ponerse en contacto con nosotros para cualquier consulta o solicitud.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="h-6 w-6 text-blue-500 mr-2" />
                <span>+1 849-460-8077</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-6 w-6 text-blue-500 mr-2" />
                <span>sngservimax@gmail.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-6 w-6 text-blue-500 mr-2" />
                <span>Calle Cayena, Provincia La Altagracia, Municipio Bávaro, Punta Cana, República Dominicana.</span>
              </li>
            </ul>
          </div>

          {/* Formulario de Contacto */}
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Nombre
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Su nombre" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Su email" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Mensaje
              </label>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Su mensaje" rows={4}></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>

        {/* Apartado de "Ordenar Ahora" */}
        <div className="mt-12 bg-white shadow-md rounded px-8 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ordenar Ahora</h2>
          <p className="text-lg text-gray-600 mb-6">
            Contáctenos directamente para realizar su orden o consulta sobre nuestros servicios.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
                href="https://wa.me/18494608077" // Enlace directo a WhatsApp
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2"
            >
              <MessageSquare className="h-5 w-5"/>
              WhatsApp
            </a>
            <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sngservimax@gmail.com" // Enlace directo a Gmail para crear un nuevo mensaje
                target="_blank" // Abre en una nueva pestaña
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2"
            >
              <Mail className="h-5 w-5"/>
              Enviar Email
            </a>

          </div>
        </div>
      </div>
    </div>
);

export default ContactPage;

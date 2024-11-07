import React from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <header className="bg-white dark:bg-gray-800 shadow-sm fixed w-full z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <div className="flex justify-between items-center py-4">
        <Link to="/" className="flex items-center">
          <img src="/Images/image_transparent.png" alt="SERVIMAX Logo" className="h-12 w-30" />
        </Link>
        <nav className="hidden md:flex space-x-6 ">
          <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-blue-400">Inicio</Link>
          <Link to="/services" className="text-gray-700 dark:text-gray-200 hover:text-blue-400">Servicios</Link>
          <Link to="/contact" className="text-gray-700 dark:text-gray-200 hover:text-blue-400">Contacto</Link>
          <Link to="/register" className="text-gray-700 dark:text-gray-200 hover:text-blue-400">Registro</Link>
        </nav>
        <button className="md:hidden">
          <Menu className="h-6 w-6 text-gray-700 dark:text-gray-200" />
        </button>
        <span className="text-gray-700 dark:text-gray-200 font-semibold">SERVIMAX</span>
      </div>
    </div>
  </header>
);


export default Header;

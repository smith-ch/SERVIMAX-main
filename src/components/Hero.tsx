import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const rootElement = document.documentElement;

    if (darkMode) {
      rootElement.classList.add('dark');
    } else {
      rootElement.classList.remove('dark');
    }

    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setDarkMode(true);
    }
  }, []);

  return (
      <div className="relative bg-blue-900 dark:bg-gray-900 overflow-hidden">
        <div className="absolute top-4 right-4 z-20">
          <label className="flex items-center cursor-pointer">
            <span className="mr-3 text-white dark:text-gray-200">Modo Oscuro</span>
            <div className="relative">
              <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                  className="sr-only"
              />
              <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
              <div
                  className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
                      darkMode ? 'transform translate-x-6' : ''
                  }`}
              ></div>
            </div>
          </label>
        </div>

        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:z-0">
          <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt="Equipo SERVIMAX"
          />
        </div>

        <div className="relative z-0 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 bg-opacity-80 bg-blue-900 dark:bg-gray-900">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left relative z-[-1]">
              <h2 className="text-4xl tracking-tight font-extrabold text-white dark:text-gray-200 sm:text-5xl md:text-6xl">
                Servicios integrales para su
                <span className="block text-gray-900 dark:text-white">tranquilidad</span>
              </h2>
              <p className="mt-3 text-base text-white dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                SERVIMAX ofrece soluciones completas en administración de propiedades, construcción y logística. Optimizamos sus recursos con eficiencia y profesionalismo.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                      to="/contact"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md  bg-white hover:bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 md:py-4 md:text-lg md:px-10"
                  >
                    Contáctenos
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
  );
};

export default Hero;

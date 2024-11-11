import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

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

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
      <>
        {/* Sección principal del hero */}
        <div className="relative bg-blue-900 dark:bg-gray-900 overflow-hidden">
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:z-0">
            <img
                className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="Equipo SERVIMAX"
            />
          </div>

          <div className="relative z-0 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 bg-opacity-80 bg-blue-900 dark:bg-gray-900">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left ">
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
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-white hover:bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 md:py-4 md:text-lg md:px-10"
                    >
                      Contáctenos
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>

        {/* Carrusel de Historia, Misión, Visión y Objetivos debajo del marco principal */}
        <div className="py-16 bg-black-200">
          <div className="max-w-4xl mx-auto p-8 text-center">
            <Slider {...carouselSettings}>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-3xl font-semibold mb-4">Nuestra Historia</h3>
                <p className="text-lg text-gray-700">
                  SERVIMAX comenzó con la misión de ofrecer soluciones innovadoras en administración de propiedades.
                  A lo largo de los años, hemos expandido nuestros servicios para cubrir una amplia gama de necesidades empresariales.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-3xl font-semibold mb-4">Misión</h3>
                <p className="text-lg text-gray-700">
                  Brindar servicios de alta calidad que optimicen los recursos de nuestros clientes, garantizando su satisfacción y el éxito a largo plazo.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-3xl font-semibold mb-4">Visión</h3>
                <p className="text-lg text-gray-700">
                  Ser la empresa líder en soluciones integrales para la administración de propiedades, construcción y logística, reconocida por nuestra innovación y compromiso.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-3xl font-semibold mb-4">Objetivos</h3>
                <p className="text-lg text-gray-700">
                  Mejorar constantemente la calidad de nuestros servicios y expandir nuestra presencia en el mercado, contribuyendo al éxito de nuestros clientes y socios.
                </p>
              </div>
            </Slider>
          </div>
        </div>
      </>
  );
};

export default Hero;

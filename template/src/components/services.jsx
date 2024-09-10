import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inicializa AOS con una duración de 1000ms
  }, []);

  return (
    <section id="services" className="services bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="section-title text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam reiciendis a harum eveniet quasi nam odit facere neque vitae, sed, ab et. Debitis adipisci itaque fugit temporibus repellendus corporis ex.
          </p>
        </div>

        <ul className="cards flex flex-wrap gap-8 justify-center">
          <li className="card bg-blue-50 shadow-xl rounded-2xl p-8 flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4" data-aos="fade-up" data-aos-delay="100">
            <div className="icon bg-blue-500 text-white rounded-full w-20 h-20 flex items-center justify-center mb-6">
              <span className="text-4xl">🔧</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Posventa</h3>
            <p className="text-gray-600 text-center">
              Contamos con técnicos certificados y especializados que utilizan equipos y herramientas de última generación para realizar reparaciones precisas y eficientes en el menor tiempo posible.
            </p>
          </li>
          <li className="card bg-green-50 shadow-xl rounded-2xl p-8 flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4" data-aos="fade-up" data-aos-delay="200">
            <div className="icon bg-green-500 text-white rounded-full w-20 h-20 flex items-center justify-center mb-6">
              <span className="text-4xl">💰</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Plan de Ahorro</h3>
            <p className="text-gray-600 text-center">
              Establecemos metas financieras claras y alcanzables para que puedas ahorrar de manera efectiva y sistemática, adaptadas a tu presupuesto y preferencias de vehículo.
            </p>
          </li>
          <li className="card bg-yellow-50 shadow-xl rounded-2xl p-8 flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4" data-aos="fade-up" data-aos-delay="300">
            <div className="icon bg-yellow-500 text-white rounded-full w-20 h-20 flex items-center justify-center mb-6">
              <span className="text-4xl">🏦</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Financiamiento</h3>
            <p className="text-gray-600 text-center">
              Ofrecemos financiamiento para la compra de autos nuevos y usados, con tasas competitivas y plazos flexibles que se ajustan al presupuesto de nuestros clientes.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Services;

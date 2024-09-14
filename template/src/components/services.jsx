import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = ({
  title,
  description,
  services,
}) => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inicializa AOS con una duración de 1000ms
  }, []);

  return (
    <section id="services" className="services bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="section-title text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-700">{description}</p>
        </div>

        <ul className="cards flex flex-wrap gap-8 justify-center">
          {services.map(service => (
            <li
              key={service.id}
              className={`card ${service.bgColor} shadow-xl rounded-2xl p-8 flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4`}
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              <div className={`icon ${service.iconColor} text-white rounded-full w-20 h-20 flex items-center justify-center mb-6`}>
                <span className="text-4xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

Services.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  services: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      bgColor: PropTypes.string.isRequired,
      iconColor: PropTypes.string.isRequired,
      delay: PropTypes.number.isRequired,
    })
  ).isRequired,
};

Services.defaultProps = {
  title: "Nuestros Servicios",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam reiciendis a harum eveniet quasi nam odit facere neque vitae, sed, ab et. Debitis adipisci itaque fugit temporibus repellendus corporis ex.",
  services: [
    {
      id: 1,
      icon: "🔧",
      title: "Posventa",
      text: "Contamos con técnicos certificados y especializados que utilizan equipos y herramientas de última generación para realizar reparaciones precisas y eficientes en el menor tiempo posible.",
      bgColor: "bg-blue-50",
      iconColor: "bg-blue-500",
      delay: 100
    },
    {
      id: 2,
      icon: "💰",
      title: "Plan de Ahorro",
      text: "Establecemos metas financieras claras y alcanzables para que puedas ahorrar de manera efectiva y sistemática, adaptadas a tu presupuesto y preferencias de vehículo.",
      bgColor: "bg-green-50",
      iconColor: "bg-green-500",
      delay: 200
    },
    {
      id: 3,
      icon: "🏦",
      title: "Financiamiento",
      text: "Ofrecemos financiamiento para la compra de autos nuevos y usados, con tasas competitivas y plazos flexibles que se ajustan al presupuesto de nuestros clientes.",
      bgColor: "bg-yellow-50",
      iconColor: "bg-yellow-500",
      delay: 300
    }
  ]
};

export default Services;

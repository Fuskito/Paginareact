import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = ({
  title = 'Contacto',
  description = 'Complete el formulario y nos ponemos en contacto',
  bgColor = 'bg-blue-100',
  buttonText = 'Enviar Mensaje',
  inputBgColor = 'bg-white',
  inputBorderColor = 'border-gray-300',
  buttonColor = 'bg-blue-500',
  buttonHoverColor = 'bg-blue-600',
}) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="contact"
      className={`${bgColor} py-12 flex justify-center items-center min-h-screen`}
      data-aos="fade-right"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <p className="text-gray-700 mb-8">{description}</p>
          
          <form action="#" className="space-y-4 w-full max-w-md mx-auto">
            <input 
              type="text" 
              placeholder="Nombre*" 
              required 
              className={`w-full px-4 py-2 ${inputBgColor} border ${inputBorderColor} rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-center`}
            />
            <input 
              type="email" 
              placeholder="Email*" 
              required 
              className={`w-full px-4 py-2 ${inputBgColor} border ${inputBorderColor} rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-center`}
            />
            <textarea 
              placeholder="Mensaje*" 
              required 
              className={`w-full px-4 py-2 ${inputBgColor} border ${inputBorderColor} rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-center`}
            />
            <button 
              type="submit" 
              className={`w-full ${buttonColor} text-white py-2 rounded-full hover:${buttonHoverColor} transition duration-300`}
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

Contact.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  bgColor: PropTypes.string,
  buttonText: PropTypes.string,
  inputBgColor: PropTypes.string,
  inputBorderColor: PropTypes.string,
  buttonColor: PropTypes.string,
  buttonHoverColor: PropTypes.string,
};



export default Contact;

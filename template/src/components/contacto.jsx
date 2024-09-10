import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="contact"
      className="bg-blue-100 py-12 flex justify-center items-center min-h-screen"
      data-aos="fade-right"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Contacto</h2>
          <p className="text-gray-700 mb-8">Complete el formulario y nos ponemos en contacto</p>
          
          <form action="#" className="space-y-4 w-full max-w-md mx-auto">
            <input 
              type="text" 
              placeholder="Nombre*" 
              required 
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
            />
            <input 
              type="email" 
              placeholder="Email*" 
              required 
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
            />
            <textarea 
              placeholder="Mensaje*" 
              required 
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
            />
            <button 
              type="submit" 
              className="w-full bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 transition duration-300"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

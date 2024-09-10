import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Información de Contacto */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold mb-4">Contacto</h2>
            <p className="mb-2">
              <span className="font-semibold">Dirección:</span> Calle 15 CABA
            </p>
            <p className="mb-2">
              <span className="font-semibold">Teléfono:</span> (11) 2477-777
            </p>
            <p className="mb-2">
              <span className="font-semibold">Email:</span> info@gmail.com
            </p>
            <p className="mb-2">
              <span className="font-semibold">Horario:</span> Lunes a viernes 08:00-17:00
            </p>
            <p>
              <span className="font-semibold">Sitio web:</span> <a href="http://www.tputn.com.ar" className="text-blue-400 hover:underline">www.tputn.com.ar</a>
            </p>
          </div>

          {/* Sección de Redes Sociales y Copyright */}
          <div className="flex flex-col items-center md:items-end">
            <div className="mt-4 flex space-x-4">
              <a href="https://www.facebook.com/MaTiias97/" aria-label="Facebook" className="text-blue-500 hover:text-blue-600">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/fuscomusic.arg/" aria-label="Instagram" className="text-pink-500 hover:text-pink-600">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="https://x.com/MatiasFusco97" aria-label="Twitter" className="text-blue-400 hover:text-blue-500">
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>
            <span className="mt-4 text-center md:text-right">© 2024 Todos los derechos reservados</span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = ({
  contactTitle = "Contacto",
  address = "Calle 15 CABA",
  phone = "(11) 2477-777",
  email = "info@gmail.com",
  hours = "Lunes a viernes 08:00-17:00",
  website = "http://www.tputn.com.ar",
  websiteLabel = "www.tputn.com.ar",
  facebookLink = "https://www.facebook.com/MaTiias97/",
  instagramLink = "https://www.instagram.com/fuscomusic.arg/",
  twitterLink = "https://x.com/MatiasFusco97",
  copyrightText = "© 2024 Todos los derechos reservados",
}) => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Información de Contacto */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold mb-4">{contactTitle}</h2>
            <p className="mb-2">
              <span className="font-semibold">Dirección:</span> {address}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Teléfono:</span> {phone}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Email:</span> {email}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Horario:</span> {hours}
            </p>
            <p>
              <span className="font-semibold">Sitio web:</span> <a href={website} className="text-blue-400 hover:underline">{websiteLabel}</a>
            </p>
          </div>

          {/* Sección de Redes Sociales y Copyright */}
          <div className="flex flex-col items-center md:items-end">
            <div className="mt-4 flex space-x-4">
              <a href={facebookLink} aria-label="Facebook" className="text-blue-500 hover:text-blue-600">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href={instagramLink} aria-label="Instagram" className="text-pink-500 hover:text-pink-600">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href={twitterLink} aria-label="Twitter" className="text-blue-400 hover:text-blue-500">
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>
            <span className="mt-4 text-center md:text-right">{copyrightText}</span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

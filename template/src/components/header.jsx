import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaGlobe, FaSearch } from 'react-icons/fa';

const Header = ({
  logoText,
  menuItems,
  searchPlaceholder,
  brandUrl,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
          // Scrolling down
          setShowNav(false);
        } else {
          // Scrolling up
          setShowNav(true);
        }

        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`bg-black fixed top-0 left-0 w-full z-10 shadow-md transition-transform duration-300 ${showNav ? 'translate-y-0' : '-translate-y-full'}`}>
      <nav className="container mx-auto px-4 lg:px-8 flex flex-wrap items-center justify-between p-5">
        {/* Enlace dinámico en el logo */}
        <a className="text-xl font-bold text-white flex items-center" href={brandUrl}>
          <FaGlobe className="mr-2" /> {logoText}
        </a>
        <button
          className="block lg:hidden px-3 py-2 border border-white rounded text-white hover:text-gray-300 hover:border-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20">
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
        {/* Buscador para dispositivos de escritorio */}
        <div className="hidden lg:block">
          <div className="relative text-gray-600">
            <input
              type="search"
              name="search"
              placeholder={searchPlaceholder}
              className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none lg:w-80 xl:w-96"
            />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
              <FaSearch />
            </button>
          </div>
        </div>
        <div className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center text-white ml-auto">
            {menuItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link hover:text-gray-500 transition-colors duration-300" href={item.href}>{item.text}</a>
              </li>
            ))}
            {/* Buscador para dispositivos móviles */}
            <li className="mt-4 lg:hidden">
              <div className="relative text-gray-600">
                <input
                  type="search"
                  name="search"
                  placeholder={searchPlaceholder}
                  className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none w-full"
                />
                <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                  <FaSearch />
                </button>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  logoText: PropTypes.string.isRequired,
  menuitems: PropTypes.arrayOf(PropTypes.string).isRequired,
  searchPlaceholder: PropTypes.string.isRequired,
  brandUrl: PropTypes.string.isRequired, 
};

Header.defaultProps = {
  logoText: "Página Web",
  brandUrl: "#Home",
  searchPlaceholder: "Buscar",
  menuItems: [
    { href: "#Home", text: "Home" },
    { href: "#services", text: "Servicios" },
    { href: "#gallery", text: "Galería" },
    { href: "#cards", text: "Venta" },
    { href: "#contact", text: "Contacto" },
     
  ],
  
};

export default Header;

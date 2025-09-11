import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header
      className="bg-gray-900 text-white p-4 shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 14 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Truck className="w-8 h-8 text-amber-400" />
          </motion.div>
          <h1 className="text-2xl font-bold text-amber-400">Transportes Galindo</h1>
        </Link>

        {/* Botón de menú para móviles */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Menú de navegación para escritorio */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-amber-400 transition-colors duration-300">Inicio</Link>
            </li>
            <li>
              <Link to="/servicios" className="hover:text-amber-400 transition-colors duration-300">Servicios</Link>
            </li>
            <li>
              <Link to="/nosotros" className="hover:text-amber-400 transition-colors duration-300">Nosotros</Link>
            </li>
            <li>
              <Link to="/precios" className="hover:text-amber-400 transition-colors duration-300">Precios</Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:text-amber-400 transition-colors duration-300">Contacto</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Menú desplegable para móviles */}
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 }
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden mt-4 overflow-hidden"
      >
        <ul className="flex flex-col space-y-4 items-center">
          <li>
            <Link to="/" className="block py-2 hover:text-amber-400 transition-colors duration-300" onClick={toggleMenu}>Inicio</Link>
          </li>
          <li>
            <Link to="/servicios" className="block py-2 hover:text-amber-400 transition-colors duration-300" onClick={toggleMenu}>Servicios</Link>
          </li>
          <li>
            <Link to="/nosotros" className="block py-2 hover:text-amber-400 transition-colors duration-300" onClick={toggleMenu}>Nosotros</Link>
          </li>
          <li>
            <Link to="/precios" className="block py-2 hover:text-amber-400 transition-colors duration-300" onClick={toggleMenu}>Precios</Link>
          </li>
          <li>
            <Link to="/contacto" className="block py-2 hover:text-amber-400 transition-colors duration-300" onClick={toggleMenu}>Contacto</Link>
          </li>
        </ul>
      </motion.nav>
    </motion.header>
  );
};

export default Header;
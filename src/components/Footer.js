import React from 'react';
import { motion } from 'framer-motion';
import { Truck } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-gray-400 p-8 mt-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Truck className="w-6 h-6 text-amber-400" />
          <p className="text-lg font-semibold text-amber-400">Transportes Galindo</p>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Transportes Galindo. Todos los derechos reservados.</p>
        <p className="text-sm mt-2">Tu solución de transporte confiable.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
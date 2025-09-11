import React from 'react';
import { motion } from 'framer-motion';
import { Package, Home, Truck } from 'lucide-react';

const Services = () => {
  return (
    <motion.div
      className="min-h-screen bg-gray-100 p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto bg-white shadow-lg rounded-lg p-8">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-8 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Nuestros Servicios
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="p-6 border border-gray-200 rounded-lg shadow-md text-center"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Package className="w-16 h-16 text-amber-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Fletes</h3>
            <p className="text-gray-600">
              Ofrecemos servicios de fletes para el transporte de mercancías y paquetes de cualquier tamaño, garantizando la seguridad y puntualidad en cada entrega.
            </p>
          </motion.div>

          <motion.div
            className="p-6 border border-gray-200 rounded-lg shadow-md text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Truck className="w-16 h-16 text-amber-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Transporte General</h3>
            <p className="text-gray-600">
              Transportamos todo tipo de cargas a nivel local y nacional. Contamos con un camión propio para asegurar la eficiencia y el control total de tu envío.
            </p>
          </motion.div>

          <motion.div
            className="p-6 border border-gray-200 rounded-lg shadow-md text-center"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Home className="w-16 h-16 text-amber-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Mudanzas</h3>
            <p className="text-gray-600">
              Realizamos mudanzas residenciales y comerciales con el mayor cuidado y profesionalismo, para que tus pertenencias lleguen a su nuevo destino sin contratiempos.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-inner text-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Nuestro Compromiso</h3>
          <p className="text-gray-700">
            En Transportes Galindo, cada servicio es una promesa de <span className="font-bold text-amber-600">eficiencia, seguridad y confianza</span>. Tu carga es nuestra prioridad.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;
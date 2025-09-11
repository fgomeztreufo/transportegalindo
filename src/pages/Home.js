import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      className="min-h-screen bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://utfs.io/f/2vMRHqOYUHc0cIo940xLlIki8fCRNnvUyWdBhcZQKOVp6M0G')" }}>
        <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center">
          <motion.div
            className="text-center text-white p-6 rounded-lg"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-400">Transportes Galindo</h2>
            <p className="text-xl md:text-2xl font-medium">
              <span className="text-amber-400">Movilizando tu futuro, hoy.</span> Experiencia y confianza en cada kilómetro.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto my-12 p-6 bg-white shadow-lg rounded-lg">
        <motion.h3
          className="text-3xl font-bold text-gray-800 mb-6 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Nuestros Valores
        </motion.h3>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <motion.div
            className="p-6 border border-gray-200 rounded-lg shadow-sm"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <h4 className="text-xl font-semibold text-gray-700 mb-3">Confiabilidad</h4>
            <p className="text-gray-600">Entregamos tus bienes de forma segura y a tiempo, siempre.</p>
          </motion.div>
          <motion.div
            className="p-6 border border-gray-200 rounded-lg shadow-sm"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <h4 className="text-xl font-semibold text-gray-700 mb-3">Profesionalismo</h4>
            <p className="text-gray-600">Un equipo experto y dedicado a tu servicio.</p>
          </motion.div>
          <motion.div
            className="p-6 border border-gray-200 rounded-lg shadow-sm"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <h4 className="text-xl font-semibold text-gray-700 mb-3">Eficiencia</h4>
            <p className="text-gray-600">Soluciones rápidas y adaptadas a tus necesidades.</p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
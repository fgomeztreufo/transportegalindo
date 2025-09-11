import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Shield } from 'lucide-react';

const AboutUs = () => {
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
          ¿Por Qué Elegirnos?
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="space-y-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="flex items-start space-x-4">
              <Award className="w-10 h-10 text-amber-500 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Más de 10 Años de Experiencia</h3>
                <p className="text-gray-600">
                  Nuestra trayectoria de más de una década en el rubro del transporte nos avala. Hemos perfeccionado nuestros procesos para ofrecerte un servicio de la más alta calidad.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Users className="w-10 h-10 text-amber-500 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Profesionalismo y Seriedad</h3>
                <p className="text-gray-600">
                  Contamos con un equipo altamente capacitado y comprometido, que maneja cada envío con la seriedad y el cuidado que tus bienes merecen.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Shield className="w-10 h-10 text-amber-500 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Confianza y Seguridad</h3>
                <p className="text-gray-600">
                  Tu tranquilidad es nuestra prioridad. Implementamos las mejores prácticas para garantizar que tus pertenencias lleguen a salvo a su destino.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative w-full h-80 rounded-lg overflow-hidden shadow-xl"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <img
              src="https://utfs.io/f/2vMRHqOYUHc0QPGHOchQiykWjlXTqU1cwIADob6V2r5N0P3R"
              alt="Camión de Transportes Galindo"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-40 flex items-center justify-center">
              <p className="text-white text-3xl font-bold text-center">Tu carga, nuestra responsabilidad.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
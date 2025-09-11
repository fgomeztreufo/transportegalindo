import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, MapPin, Package, MessageCircle } from 'lucide-react';

const Prices = ({ phoneNumber }) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [loadType, setLoadType] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappText = `Hola Transportes Galindo, me gustaría solicitar una cotización para un servicio de transporte.\n\nOrigen: ${origin}\nDestino: ${destination}\nTipo de Carga: ${loadType}\nMensaje Adicional: ${message}`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappText)}`;
    window.open(whatsappLink, '_blank');
  };

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
          Solicita Tu Cotización
        </motion.h2>

        <motion.div
          className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg shadow-inner"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-lg text-gray-700 mb-6 text-center">
            En Transportes Galindo, ofrecemos precios personalizados para cada necesidad.
            Completa el siguiente formulario y nos pondremos en contacto contigo con una cotización a medida.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="origin" className="block text-gray-700 text-sm font-bold mb-2 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-amber-500" /> Origen:
              </label>
              <input
                type="text"
                id="origin"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
                placeholder="Ej: Santiago"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="destination" className="block text-gray-700 text-sm font-bold mb-2 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-amber-500" /> Destino:
              </label>
              <input
                type="text"
                id="destination"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
                placeholder="Ej: Valparaíso"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="loadType" className="block text-gray-700 text-sm font-bold mb-2 flex items-center">
                <Package className="w-5 h-5 mr-2 text-amber-500" /> Tipo de Carga:
              </label>
              <input
                type="text"
                id="loadType"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
                placeholder="Ej: Muebles, Cajas, Maquinaria"
                value={loadType}
                onChange={(e) => setLoadType(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2 flex items-center">
                <MessageCircle className="w-5 h-5 mr-2 text-amber-500" /> Mensaje Adicional (Opcional):
              </label>
              <textarea
                id="message"
                rows="4"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
                placeholder="Detalles adicionales sobre tu envío..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <DollarSign className="w-6 h-6" />
              <span>Solicitar Cotización por WhatsApp</span>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Prices;
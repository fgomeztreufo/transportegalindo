import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react'; // ¡Aquí estaba el despiste!

const Contact = ({ phoneNumber }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario, por ahora solo un console.log
    console.log({ name, email, message });
    alert('¡Mensaje enviado! Pronto nos pondremos en contacto contigo.');
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleWhatsAppClick = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent('Hola, me gustaría contactarlos.')}`;
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
          Contáctanos
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="space-y-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="text-lg text-gray-700">
              ¿Tienes alguna pregunta o necesitas una cotización? No dudes en contactarnos. Estamos aquí para ayudarte.
            </p>

            <div className="flex items-center space-x-4">
              <Mail className="w-8 h-8 text-amber-500" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Correo Electrónico</h3>
                <p className="text-gray-600">contacto@transportesgalindo.cl</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Phone className="w-8 h-8 text-amber-500" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Teléfono</h3>
                <p className="text-gray-600">{phoneNumber}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <MapPin className="w-8 h-8 text-amber-500" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Dirección</h3>
                <p className="text-gray-600">Puente Alto, Región Metropolitana, Chile</p>
              </div>
            </div>

            <motion.button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-6 h-6" />
              <span>Chatea con nosotros por WhatsApp</span>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-lg shadow-inner">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nombre:</label>
                <input
                  type="text"
                  id="name"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Correo Electrónico:</label>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Mensaje:</label>
                <textarea
                  id="message"
                  rows="6"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-6 h-6" />
                <span>Enviar Mensaje</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Enviando...');

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setStatus('Mensagem enviada com sucesso!');
      setFormData({ name: '', email: '', message: '' });
    }, (err) => {
      console.log('FAILED...', err);
      setStatus('Falha ao enviar a mensagem. Tente novamente.');
    });
  };

  return (
    <section id="contato" className="py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Entre em Contato</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Seu Nome"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-neon-blue 
                       bg-gray-100 dark:bg-dark-card 
                       text-primary-text dark:text-light-text 
                       border-gray-300 dark:border-transparent 
                       placeholder-secondary-text dark:placeholder-dark-text"
          />
          <input
            type="email"
            name="email"
            placeholder="Seu Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-neon-blue 
                       bg-gray-100 dark:bg-dark-card 
                       text-primary-text dark:text-light-text 
                       border-gray-300 dark:border-transparent 
                       placeholder-secondary-text dark:placeholder-dark-text"
          />
          <textarea
            name="message"
            placeholder="Sua Mensagem"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-neon-blue 
                       bg-gray-100 dark:bg-dark-card 
                       text-primary-text dark:text-light-text 
                       border-gray-300 dark:border-transparent 
                       placeholder-secondary-text dark:placeholder-dark-text"
          ></textarea>
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-8 py-3 bg-neon-blue text-dark-bg font-semibold rounded-lg shadow-lg 
                         hover:bg-neon-purple transition-all duration-300
                         dark:text-dark-bg"
            >
              Enviar Mensagem
            </motion.button>
          </div>
        </form>
        {status && <p className="text-center mt-4">{status}</p>}
      </motion.div>
    </section>
  );
};

export default Contact;
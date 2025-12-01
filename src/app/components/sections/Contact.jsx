'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import Section from '../ui/Section';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'O nome é obrigatório.';
    if (!formData.email) {
      tempErrors.email = 'O email é obrigatório.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'O email é inválido.';
    }
    if (!formData.message) tempErrors.message = 'A mensagem é obrigatória.';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate() || isSending) {
      return;
    }
    setIsSending(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    toast.promise(
      emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      ),
      {
        loading: 'Enviando sua mensagem...',
        success: () => {
          setFormData({ name: '', email: '', message: '' });
          setErrors({});
          setIsSending(false);
          return 'Mensagem enviada com sucesso!';
        },
        error: () => {
          setIsSending(false);
          return 'Falha ao enviar a mensagem. Tente novamente.';
        },
      }
    );
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const inputClasses = `
    w-full p-4 rounded-lg border-2 
    bg-light-bg/50 dark:bg-dark-bg/50 
    text-primary-text dark:text-light-text 
    border-gray-300 dark:border-gray-700 
    placeholder-secondary-text dark:placeholder-dark-text
    focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue 
    transition-all duration-300
    
    /* Corrige o fundo amarelo do navegador ao preencher automático */
    [&:-webkit-autofill]:bg-transparent
    [&:-webkit-autofill]:text-primary-text
    [&:-webkit-autofill]:shadow-[0_0_0_100px_rgba(255,255,255,0.8)_inset]
    dark:[&:-webkit-autofill]:shadow-[0_0_0_100px_rgba(17,24,39,0.8)_inset]
    dark:[&:-webkit-autofill]:text-white
    [&:-webkit-autofill]:transition-colors
    [&:-webkit-autofill]:duration-5000
  `;

  return (
    <Section id="contato">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary-text dark:text-light-text tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Entre em Contato
          </motion.h2>
          <motion.div
            className="w-24 h-0.5 bg-gradient-to-r from-transparent via-neon-purple to-transparent rounded-full mx-auto mb-6 opacity-60"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 0.6, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.p
            className="text-base md:text-lg text-secondary-text dark:text-dark-text max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Vamos trabalhar juntos? Envie uma mensagem!
          </motion.p>
        </motion.div>
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 bg-light-card/80 dark:bg-dark-card/50 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-neon-blue/20 dark:border-neon-blue/30"
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          noValidate
        >
          <motion.div variants={fieldVariants}>
            <label htmlFor="name" className="block text-sm font-semibold text-primary-text dark:text-light-text mb-2">
              Seu Nome <span className="text-neon-blue">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Digite seu nome"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputClasses}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </motion.div>

          <motion.div variants={fieldVariants}>
            <label htmlFor="email" className="block text-sm font-semibold text-primary-text dark:text-light-text mb-2">
              Seu Email <span className="text-neon-blue">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="seu.email@exemplo.com"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputClasses}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </motion.div>

          <motion.div variants={fieldVariants}>
            <label htmlFor="message" className="block text-sm font-semibold text-primary-text dark:text-light-text mb-2">
              Sua Mensagem <span className="text-neon-blue">*</span>
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Deixe sua mensagem aqui..."
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
              className={`${inputClasses} resize-none`}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </motion.div>

          <motion.div className="text-center" variants={fieldVariants}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSending}
              aria-label={isSending ? 'Enviando mensagem...' : 'Enviar mensagem'}
              className="w-full py-4 px-8 rounded-xl text-white font-bold text-lg transition-all duration-300
                         bg-gradient-to-r from-cyan-500 via-purple-600 to-cyan-500 bg-[length:200%_auto]
                         hover:bg-right hover:shadow-[0_0_30px_rgba(6,182,212,0.7)]
                         shadow-[0_0_15px_rgba(6,182,212,0.4)]
                         disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none
                         flex items-center justify-center gap-2"
            >
              {isSending ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Enviando...</span>
                </>
              ) : (
                'Enviar Mensagem'
              )}
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </Section>
  );
};

export default Contact;
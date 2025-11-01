'use client';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-light-card dark:bg-dark-card text-center py-6">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-6 mb-4">
          
          <motion.a
            href="https://github.com/tharcio09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-primary-text dark:text-light-text hover:text-neon-purple dark:hover:text-neon-purple transition-colors"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          
          <motion.a
            href="https://www.linkedin.com/in/tharcio-santos/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-primary-text dark:text-light-text hover:text-neon-purple dark:hover:text-neon-purple transition-colors"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
          
          <motion.a
            href="mailto:tharciosantos09@gmail.com"
            className="text-2xl text-primary-text dark:text-light-text hover:text-neon-purple dark:hover:text-neon-purple transition-colors"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaEnvelope />
          </motion.a>
        </div>
        <p className="text-secondary-text dark:text-dark-text text-sm">
          &copy; {new Date().getFullYear()} Tharcio Santos. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
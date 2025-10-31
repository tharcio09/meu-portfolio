
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-light-card dark:bg-dark-card text-center py-6">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/tharcio09" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-neon-blue"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/tharcio-santos/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-neon-blue"><FaLinkedin /></a>
          <a href="mailto:tharciosantos09@gmail.com" className="text-2xl hover:text-neon-blue"><FaEnvelope /></a>
        </div>
        <p className="text-secondary-text dark:text-dark-text">&copy; {new Date().getFullYear()} Tharcio Santos. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const ProjectCard = ({ title, description, imageUrl, githubUrl, demoUrl, tags }) => {
  return (
    <motion.div
      className="group bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl flex flex-col border border-neon-blue/10 dark:border-neon-blue/20 hover:border-neon-blue/50 dark:hover:border-neon-blue/50 transition-all duration-300 ease-out"
      variants={cardVariants}
      whileHover={{ y: -12, scale: 1.02 }}
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image 
          src={imageUrl} 
          alt={`Screenshot do projeto ${title}`}
          fill={true} 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold mb-3 text-primary-text dark:text-light-text group-hover:text-neon-blue transition-colors duration-300">
          {title}
        </h3>
        <p className="text-secondary-text dark:text-dark-text flex-grow mb-4 leading-relaxed">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <motion.span 
              key={tag}
              className="text-xs bg-neon-blue/10 dark:bg-neon-blue/20 text-neon-blue dark:text-neon-blue px-3 py-1.5 rounded-full font-medium border border-neon-blue/30"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
        
        <div className="mt-auto flex justify-end space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <motion.a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={`Ver código do projeto ${title} no GitHub`}
            className="flex items-center gap-2 px-4 py-2 bg-light-bg/50 dark:bg-dark-bg/50 rounded-lg text-neon-blue hover:text-neon-purple dark:text-neon-blue dark:hover:text-neon-purple transition-all duration-300 hover:bg-neon-blue/10 dark:hover:bg-neon-blue/20 border border-neon-blue/20 hover:border-neon-blue/50"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="text-xl" />
            <span className="text-sm font-medium">Código</span>
          </motion.a>
          <motion.a 
            href={demoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={`Ver demonstração do projeto ${title}`}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue text-dark-bg rounded-xl font-semibold shadow-lg hover:shadow-neon-lg transition-all duration-300 ease-out"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaExternalLinkAlt className="text-lg" />
            <span className="text-sm">Demo</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
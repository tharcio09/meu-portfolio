'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, imageUrl, githubUrl, demoUrl, tags }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-light-card dark:bg-dark-card rounded-lg overflow-hidden shadow-lg dark:shadow-none flex flex-col"
    >
      <div className="relative h-48 w-full">
        <Image 
          src={imageUrl} 
          alt={title}
          fill={true} 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-primary-text dark:text-light-text">{title}</h3>
        <p className="text-secondary-text dark:text-dark-text flex-grow">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="text-xs bg-neon-blue/20 text-neon-blue px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="mt-6 flex justify-end space-x-4">
          <motion.a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-2xl text-primary-text hover:text-neon-purple dark:text-light-text dark:hover:text-neon-purple transition-colors"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a 
            href={demoUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-2xl text-primary-text hover:text-neon-purple dark:text-light-text dark:hover:text-neon-purple transition-colors"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaExternalLinkAlt />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
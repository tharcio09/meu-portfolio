// components/ui/ProjectCard.jsx
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
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
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
          <Link href={githubUrl} target="_blank" className="text-2xl hover:text-neon-blue transition-colors">
            <FaGithub />
          </Link>
          <Link href={demoUrl} target="_blank" className="text-2xl hover:text-neon-blue transition-colors">
            <FaExternalLinkAlt />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
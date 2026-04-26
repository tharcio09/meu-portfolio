'use client';

import { useEffect, useState } from 'react';
import { HiArrowUp } from 'react-icons/hi';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className={`fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-secondary-text shadow-md transition-all duration-300
        hover:border-cyan-600 hover:text-cyan-700
        dark:border-gray-700 dark:bg-zinc-900 dark:text-gray-400 dark:hover:border-cyan-400 dark:hover:text-cyan-300
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
      <HiArrowUp className="h-4 w-4" />
    </button>
  );
};

export default BackToTop;

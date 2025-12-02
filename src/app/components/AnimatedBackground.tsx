'use client';

export default function AnimatedBackground() {
  return (
    <div
      className="
        animate-gradient-light 
        dark:animate-gradient-dark 
        pointer-events-none fixed inset-0 z-0 
        opacity-75 
        dark:opacity-15 
        transition-opacity duration-1000
      "
      style={{ filter: 'blur(100px)' }}
    />
  );
}

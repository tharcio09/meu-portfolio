'use client';


export default function AnimatedBackground() {
  return (
    <div 
      className="
        /* 1. Aplica o gradiente claro por padrão */
        animate-gradient-light 
        
        /* 2. No modo escuro, troca para o gradiente escuro */
        dark:animate-gradient-dark 
        
        pointer-events-none fixed inset-0 z-0 
        
        /* Opacidade: sutil no modo claro, um pouco mais sutil no escuro */
        opacity-75 
        dark:opacity-15 
        
        /* Suaviza a troca de tema */
        transition-opacity duration-1000
      "
      style={{
        filter: 'blur(100px)',
      }}
    />
  );
}
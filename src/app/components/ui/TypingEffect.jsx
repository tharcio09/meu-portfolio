// components/ui/TypingEffect.jsx
'use client';

import { useState, useEffect } from 'react';

const TypingEffect = ({ text, speed = 150 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    // Garante que o texto reinicie se a prop `text` mudar.
    setDisplayedText('');
  }, [text]);

  useEffect(() => {
    // Verifica se ainda há caracteres para digitar.
    if (displayedText.length < text.length) {
      // Agenda a adição do próximo caractere.
      const timeoutId = setTimeout(() => {
        setDisplayedText(text.substring(0, displayedText.length + 1));
      }, speed);

      // Função de limpeza: cancela o agendamento se o componente for desmontado.
      return () => clearTimeout(timeoutId);
    }
  }, [displayedText, text, speed]); // O efeito roda novamente sempre que o texto exibido muda.

  return <span>{displayedText}</span>;
};

export default TypingEffect;
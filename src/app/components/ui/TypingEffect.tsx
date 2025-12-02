'use client';

import { useState, useEffect } from 'react';

type TypingEffectProps = {
  text: string;
  speed?: number;
};

const TypingEffect = ({ text, speed = 150 }: TypingEffectProps) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText('');
  }, [text]);

  useEffect(() => {
    if (displayedText.length < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(text.substring(0, displayedText.length + 1));
      }, speed);

      return () => clearTimeout(timeoutId);
    }
  }, [displayedText, text, speed]);

  return <span>{displayedText}</span>;
};

export default TypingEffect;

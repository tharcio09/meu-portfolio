'use client';

import { useState, useEffect } from 'react';

const TypingEffect = ({ text, speed = 150 }) => {
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
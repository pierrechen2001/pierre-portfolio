'use client';

import { useState, useEffect } from 'react';

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
}

export default function Typewriter({ 
  words, 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  pauseTime = 2000,
  className = "" 
}: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  // Typing logic
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? deletingSpeed : typingSpeed, parseInt(Math.random() * 50 + ''))); // Randomize typing speed slightly for realism

    // Pause at the end of a word
    if (!reverse && subIndex === words[index].length) {
        clearTimeout(timeout);
        setTimeout(() => {
            setReverse(true);
        }, pauseTime);
        return;
    }

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={`font-mono inline-flex items-center ${className}`}>
      {`${words[index].substring(0, subIndex)}`}
      <span className={`w-[0.5em] h-[1.2em] bg-[var(--primary)] ml-1 ${blink ? 'opacity-100' : 'opacity-0'}`}></span>
    </span>
  );
}


'use client'; // Bu satır, bunun bir Client Component olduğunu belirtir.

import { useState, useEffect } from 'react';

interface TypewriterHeadingProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

const TypewriterHeading: React.FC<TypewriterHeadingProps> = ({
  texts,
  typingSpeed = 150, // milisaniye cinsinden yazma hızı
  deletingSpeed = 100, // milisaniye cinsinden silme hızı
  pauseDuration = 1500, // metinler arası bekleme süresi
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (!texts || texts.length === 0) return;

    const currentText = texts[textIndex];

    const handleTyping = () => {
      if (isDeleting) {
        // Silme işlemi
        if (charIndex > 0) {
          setDisplayedText((prev) => prev.substring(0, prev.length - 1));
          setCharIndex((prev) => prev - 1);
        } else {
          // Silme bitti, yeni metne geç
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        // Yazma işlemi
        if (charIndex < currentText.length) {
          setDisplayedText((prev) => prev + currentText.charAt(charIndex));
          setCharIndex((prev) => prev + 1);
        } else {
          // Yazma bitti, silmeye başlamadan önce bekle
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      }
    };

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, textIndex, charIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <h2 className="text-4xl md:text-6xl font-extrabold mb-4 min-h-[80px] md:min-h-[120px]">
      {displayedText}
      <span className="animate-blink">|</span> {/* Yanıp sönen cursor */}
    </h2>
  );
};

export default TypewriterHeading;
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Span = styled.span`
  color: #cce2ff;
`;

const Cursor = styled.span`
  animation: blink 1s infinite;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 100;

  @keyframes blink {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const TypeAnimation = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blinkingCursor, setBlinkingCursor] = useState(true);

  useEffect(() => {
    let timer;
    if (index < text.length) {
      if (isDeleting) {
        if (charIndex === text[index].length) {
          setTimeout(() => {
            timer = setTimeout(() => {
              setDisplayedText(text[index].substring(0, charIndex - 1));
              setCharIndex(charIndex - 1);
              if (charIndex === 0) {
                setIsDeleting(false);
              }
            }, speed / 3);
          }, 1000);
        } else {
          timer = setTimeout(() => {
            setDisplayedText(text[index].substring(0, charIndex - 1));
            setCharIndex(charIndex - 1);
            if (charIndex === 0) {
              setIsDeleting(false);
            }
          }, speed / 3);
        }
      }
      if (!isDeleting && charIndex < text[index].length) {
        timer = setTimeout(() => {
          setDisplayedText(text[index].substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, speed);
      } else if (
        !isDeleting &&
        charIndex === text[index].length &&
        index < text.length - 1
      ) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex(index + 1);
        setCharIndex(0);
        if (index === text.length) {
          clearTimeout(timer);
        }
      }
    }
    return () => clearTimeout(timer);
  }, [text, speed, index, charIndex, isDeleting]);

  useEffect(() => {
    if (index === text.length - 1 && charIndex === text[index].length - 1) {
      setBlinkingCursor(false);
    }
  }, [index, charIndex]);

  return (
    <Span>
      {displayedText}
      {blinkingCursor ? <Cursor>I</Cursor> : null}
    </Span>
  );
};

export default TypeAnimation;

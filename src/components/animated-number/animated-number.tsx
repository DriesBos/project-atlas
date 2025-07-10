'use client';

import { useState, useEffect, useRef } from 'react';

interface AnimatedNumberProps {
  targetValue: number;
  duration: number;
  delay: number;
  symbol?: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  targetValue,
  duration,
  delay,
  symbol = '',
}) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  // Intersection Observer to detect when element is in view
  useEffect(() => {
    const currentElement = elementRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsInView(true);
        }
      },
      {
        threshold: 1, // Trigger when 10% of the element is visible
        rootMargin: '0px', // Start animation 50px before element enters view
      }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [hasAnimated]);

  // Animation logic - only runs when in view
  useEffect(() => {
    if (!isInView || hasAnimated) return;

    const startAnimation = () => {
      setHasAnimated(true);
      const startTime = Date.now();
      const hasDecimals = targetValue % 1 !== 0;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeOut = 1 - Math.pow(1 - progress, 3);

        let newValue = targetValue * easeOut;

        // Handle decimal precision
        if (hasDecimals) {
          newValue = Math.round(newValue * 10) / 10; // Round to 1 decimal place
        } else {
          newValue = Math.round(newValue);
        }

        setCurrentValue(newValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCurrentValue(targetValue); // Ensure exact final value
        }
      };

      requestAnimationFrame(animate);
    };

    const timer = setTimeout(startAnimation, delay);
    return () => clearTimeout(timer);
  }, [targetValue, duration, delay, isInView, hasAnimated]);

  return (
    <span ref={elementRef}>
      {symbol}
      {currentValue}
    </span>
  );
};

export default AnimatedNumber;

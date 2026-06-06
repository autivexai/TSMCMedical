import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

/**
 * ScrollReveal
 * -----------
 * Wraps children in a Framer Motion element that animates into view when the
 * element enters the viewport (`whileInView`). Automatically respects the user's
 * `prefers-reduced-motion` OS setting via Framer's `useReducedMotion()` hook —
 * when reduced-motion is preferred the element is rendered at full opacity
 * instantly, with no translate/scale animation.
 *
 * Usage:
 *   <ScrollReveal>
 *     <SomeSection />
 *   </ScrollReveal>
 *
 *   <ScrollReveal direction="left" delay={0.2}>
 *     <Card />
 *   </ScrollReveal>
 *
 * Props:
 *   children   – Content to reveal.
 *   direction  – Slide-in direction. 'up' (default) | 'down' | 'left' | 'right' | 'none'
 *   distance   – Translate distance in pixels (default: 24).
 *   delay      – Animation start delay in seconds (default: 0).
 *   duration   – Animation duration in seconds (default: 0.55).
 *   once       – If true (default), only animates the first time element enters view.
 *   threshold  – IntersectionObserver threshold (default: 0.15).
 *   className  – Additional class names forwarded to the wrapper element.
 *   as         – HTML element to render (default: 'div').
 */

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: Direction;
  distance?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

function getInitialOffset(direction: Direction, distance: number) {
  switch (direction) {
    case 'up':    return { y: distance };
    case 'down':  return { y: -distance };
    case 'left':  return { x: distance };
    case 'right': return { x: -distance };
    case 'none':  return {};
  }
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  distance = 24,
  delay = 0,
  duration = 0.55,
  once = true,
  threshold = 0.15,
  className,
  as = 'div',
}) => {
  const reducedMotion = useReducedMotion();

  // When the user prefers reduced motion, skip all translate/fade effects and
  // render content instantly (opacity: 1, no transform).
  const variants: Variants = reducedMotion
    ? {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      }
    : {
        hidden: { opacity: 0, ...getInitialOffset(direction, distance) },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration,
            delay,
            ease: [0.22, 1, 0.36, 1], // custom ease — snappy entrance
          },
        },
      };

  const MotionEl = motion[as as keyof typeof motion] as typeof motion.div;

  return (
    <MotionEl
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
    >
      {children}
    </MotionEl>
  );
};

export default ScrollReveal;

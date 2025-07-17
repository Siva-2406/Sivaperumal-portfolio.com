import { useEffect, useRef } from 'react';

interface PointerTrailOptions {
  color?: string;
  size?: number;
  trailLength?: number;
}

export const usePointerTrail = (options: PointerTrailOptions = {}) => {
  const { color = 'hsl(45, 93%, 47%)', size = 20, trailLength = 10 } = options;
  const pointersRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Create new pointer element
      const pointer = document.createElement('div');
      pointer.className = 'pointer-trail';
      pointer.style.cssText = `
        position: fixed;
        left: ${e.clientX - size / 2}px;
        top: ${e.clientY - size / 2}px;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: radial-gradient(circle, ${color} 0%, transparent 70%);
        pointer-events: none;
        z-index: 9999;
        transition: all 0.1s ease;
        animation: fade-out 1s ease-out forwards;
      `;

      document.body.appendChild(pointer);
      pointersRef.current.push(pointer);

      // Remove excess pointers
      if (pointersRef.current.length > trailLength) {
        const oldPointer = pointersRef.current.shift();
        if (oldPointer && oldPointer.parentNode) {
          oldPointer.parentNode.removeChild(oldPointer);
        }
      }

      // Remove pointer after animation
      setTimeout(() => {
        if (pointer.parentNode) {
          pointer.parentNode.removeChild(pointer);
        }
        const index = pointersRef.current.indexOf(pointer);
        if (index > -1) {
          pointersRef.current.splice(index, 1);
        }
      }, 1000);
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Add fade-out animation to document head
    if (!document.getElementById('pointer-trail-styles')) {
      const style = document.createElement('style');
      style.id = 'pointer-trail-styles';
      style.textContent = `
        @keyframes fade-out {
          0% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.5); }
        }
      `;
      document.head.appendChild(style);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      // Clean up remaining pointers
      pointersRef.current.forEach(pointer => {
        if (pointer.parentNode) {
          pointer.parentNode.removeChild(pointer);
        }
      });
      pointersRef.current = [];
    };
  }, [color, size, trailLength]);

  return null;
};
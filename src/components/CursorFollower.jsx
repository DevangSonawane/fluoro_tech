import { useEffect, useRef } from 'react';

const interactiveSelector = [
  'a',
  'button',
  'input',
  'textarea',
  'select',
  '[role="button"]',
  '[data-cursor-interactive]',
].join(',');

const CursorFollower = () => {
  const cursorRef = useRef(null);
  const animationFrame = useRef(null);
  const targetPosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });
  const isHoveringInteractive = useRef(false);
  const isVisible = useRef(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const initialPosition = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      };
      targetPosition.current = initialPosition;
      currentPosition.current = initialPosition;
    }

    const handleMouseEnter = () => {
      isVisible.current = true;
      cursorRef.current?.classList.add('visible');
    };

    const handleMouseLeave = () => {
      isVisible.current = false;
      cursorRef.current?.classList.remove('visible');
    };

    const handleMouseMove = (event) => {
      targetPosition.current = { x: event.clientX, y: event.clientY };

      if (!isVisible.current) {
        handleMouseEnter();
      }

      const targetElement = event.target;
      const interactive =
        targetElement instanceof Element && targetElement.closest(interactiveSelector);

      if (Boolean(interactive) !== isHoveringInteractive.current) {
        isHoveringInteractive.current = Boolean(interactive);
        cursorRef.current?.classList.toggle('hovering', Boolean(interactive));
      }
    };

    const animate = () => {
      const follower = cursorRef.current;
      if (follower) {
        currentPosition.current.x += (targetPosition.current.x - currentPosition.current.x) * 0.18;
        currentPosition.current.y += (targetPosition.current.y - currentPosition.current.y) * 0.18;
        const baseSize = 44;
        const offset = baseSize / 2;
        const scale = isHoveringInteractive.current ? 1.2 : 1;
        follower.style.transform = `translate3d(${currentPosition.current.x - offset}px, ${currentPosition.current.y - offset}px, 0) scale(${scale})`;
      }

      animationFrame.current = requestAnimationFrame(animate);
    };

    animationFrame.current = requestAnimationFrame(animate);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      cancelAnimationFrame(animationFrame.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="cursor-follower"
    />
  );
};

export default CursorFollower;

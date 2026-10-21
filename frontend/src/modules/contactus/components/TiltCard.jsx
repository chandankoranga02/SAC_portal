import { useRef } from 'react';

const TiltCard = ({ children, className = '', maxTilt = 6 }) => {
  const cardRef = useRef(null);

  const handlePointerMove = (event) => {
    const card = cardRef.current;

    if (!card || event.pointerType !== 'mouse') return;

    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    card.style.setProperty('--rotate-y', `${(x - 0.5) * maxTilt * 2}deg`);
    card.style.setProperty('--rotate-x', `${(0.5 - y) * maxTilt * 2}deg`);
  };

  const resetTilt = () => {
    const card = cardRef.current;

    if (!card) return;

    card.style.setProperty('--rotate-x', '0deg');
    card.style.setProperty('--rotate-y', '0deg');
  };

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      style={{
        '--rotate-x': '0deg',
        '--rotate-y': '0deg',
        transform:
          'perspective(1000px) rotateX(var(--rotate-x)) rotateY(var(--rotate-y))',
        transition: 'transform 180ms ease-out, box-shadow 180ms ease-out',
      }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </div>
  );
};

export default TiltCard;
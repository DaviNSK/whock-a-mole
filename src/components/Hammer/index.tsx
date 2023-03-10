import React, { useEffect, useState } from 'react';
import HammerImage from 'assets/images/WAM_Hammer.png';

import * as S from './styles';

interface Props {
  activeHammer: boolean;
  setActiveHammer: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hammer: React.FC<Props> = ({ activeHammer, setActiveHammer }) => {
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: { clientX: number; clientY: number }) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (activeHammer) {
      setTimeout(() => {
        setActiveHammer(false);
      }, 150);
    }
  }, [activeHammer, setActiveHammer]);

  return (
    <S.HammeImage
      onClick={() => setActiveHammer(true)}
      style={{ left: mousePos.x, top: mousePos.y }}
      className={`hammer ${activeHammer ? 'active' : ''}`}
      alt="hammer image"
      src={HammerImage}
    />
  );
};

export default Hammer;

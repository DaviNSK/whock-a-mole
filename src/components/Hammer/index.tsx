import React, { useEffect, useState } from 'react';
import HammerImage from '../../assets/images/WAM_Hammer.png';

import * as S from './styles';

const Hammer: React.FC = () => {
  const [activeHammer, setActiveHammer] = useState(false);
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    document.body.style.cursor = 'none';
    
    const handleMouseMove = (event: { clientX: number; clientY: number }) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if(activeHammer) {
      setTimeout(() => {
        setActiveHammer(false);
      }, 150);
    }
   }, [activeHammer]);

  return (
    <S.HammeImage
      onClick={() => setActiveHammer(true)}
      activeHammer={activeHammer}
      left={mousePos.x}
      top={mousePos.y}
      src={HammerImage}
    />
  );
};

export default Hammer;

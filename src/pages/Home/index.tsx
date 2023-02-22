import React, { useEffect, useMemo, useState } from 'react';
import * as S from './styles';
import Background from '../../assets/images/WAM_bg.jpg';
import MoleAndHole from 'components/MoleAndHole';
import StartGame from 'components/StartGame';

const HomePage: React.FC = () => {
  const [numberActiveMole, setNumberActiveMole] = useState<Number | null>(null);
  const [openStartGame, setOpenStartGame] = useState<boolean>(true);

  const quantityMoles = useMemo(() => {
    return new Array(12).fill(0);
  }, []);

  useEffect(() => {
    setOpenStartGame(true);
  }, []);

  useEffect(() => {
    setInterval(() => {
      setNumberActiveMole(Math.floor(Math.random() * 12));
    }, 2000);
  }, []);

  return (
    <S.HomeWrapper>
      <S.Background src={Background} />
      <S.ListMoles>
        {quantityMoles.map((_item, index) => (
          <S.MoleItem key={index}>
            <MoleAndHole activeMole={numberActiveMole === index} />
          </S.MoleItem> 
        ))}
      </S.ListMoles>

      {openStartGame && <StartGame />}
    </S.HomeWrapper>
  );
};

export default HomePage;

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import * as S from './styles';
import Background from '../../assets/images/WAM_bg.jpg';
import MoleAndHole from 'components/MoleAndHole';
import StartGame from 'components/StartGame';
import StopWatch from 'components/StopWatch';

const HomePage: React.FC = () => {
  const [numberActiveMole, setNumberActiveMole] = useState<Number | null>(null);
  const [openStartGame, setOpenStartGame] = useState<boolean>(true);
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(5000);

  const quantityMoles = useMemo(() => {
    return new Array(12).fill(0);
  }, []);

  useEffect(() => {
    if (running) return;

    setOpenStartGame(true);
  }, [running]);

  useEffect(() => {
    setInterval(() => {
      setNumberActiveMole(Math.floor(Math.random() * 12));
    }, 2000);
  }, []);

  const handleStartGame = useCallback(() => {
    setRunning(true);
    setOpenStartGame(false);
    setTime(5000);
  }, [setRunning, setOpenStartGame, setTime]);

  return (
    <S.HomeWrapper>
      <S.Background src={Background} />
      <S.ContentInformation>
        <S.TitleInformation>Score:</S.TitleInformation>
        <S.Score>2181</S.Score>
      </S.ContentInformation>

      <StopWatch
        time={time}
        setTime={setTime}
        setRunning={setRunning}
        running={running}
      />

      <S.ListMoles>
        {quantityMoles.map((_item, index) => (
          <S.MoleItem key={index}>
            <MoleAndHole activeMole={numberActiveMole === index} />
          </S.MoleItem>
        ))}
      </S.ListMoles>

      {openStartGame && <StartGame handleStartGame={handleStartGame} />}
    </S.HomeWrapper>
  );
};

export default HomePage;

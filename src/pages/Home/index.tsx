import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import * as S from './styles';
import Background from '../../assets/images/WAM_bg.jpg';
import MoleAndHole from 'components/MoleAndHole';
import StartGame from 'components/StartGame';
import StopWatch from 'components/StopWatch';
import Hammer from 'components/Hammer';
import Sound from '../../assets/sounds/sound-hit-mole.mp3';
// import GameOver from 'components/GameOver';

const HomePage: React.FC = () => {
  const [numberActiveMole, setNumberActiveMole] = useState<Number | null>(null);
  const [openStartGame, setOpenStartGame] = useState<boolean>(true);
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(5000);
  const [score, setScore] = useState(0);
  const [activeHammer, setActiveHammer] = useState(false);
  const [hitMole, setHitMole] = useState<Number | null>(null);

  const quantityMoles = useMemo(() => {
    return new Array(12).fill(0).map((_i, index) => ({
      points: (20 - index) * 5,
    }));
  }, []);

  useEffect(() => {
    if (running) return;

    setOpenStartGame(true);
  }, [running]);

  useEffect(() => {
    if (!running) return;

    setInterval(() => {
      setNumberActiveMole(Math.floor(Math.random() * 12));
    }, 1000);
  }, [running]);

  const handleStartGame = useCallback(() => {
    setRunning(true);
    setOpenStartGame(false);
    setTime(5000);
  }, []);

  const handleClickHammer = useCallback(
    (index: number, points) => {
      setActiveHammer(true);
      if (numberActiveMole !== index) return;

      setScore(score + points);
      setHitMole(index);
      new Audio(Sound).play();
      setNumberActiveMole(null);

      setTimeout(() => {
        setHitMole(null);
      }, 500);
    },
    [score, numberActiveMole],
  );

  return (
    <S.HomeWrapper>
      <S.Background src={Background} />
      <S.ContentInformation>
        <S.TitleInformation>Score:</S.TitleInformation>
        <S.Score>{score}</S.Score>
      </S.ContentInformation>

      <StopWatch
        time={time}
        setTime={setTime}
        setRunning={setRunning}
        running={running}
      />

      <S.ListMoles>
        {quantityMoles.map(({ points }, index) => (
          <S.MoleItem className={`mole-${index}`} key={index}>
            <S.FakeMole onClick={() => handleClickHammer(index, points)} />
            <MoleAndHole
              points={points}
              hitMole={hitMole === index}
              activeMole={numberActiveMole === index}
            />
          </S.MoleItem>
        ))}
      </S.ListMoles>

      {openStartGame && <StartGame handleStartGame={handleStartGame} />}

      {/* {time === 0 && <GameOver />} */}

      {running && (
        <Hammer activeHammer={activeHammer} setActiveHammer={setActiveHammer} />
      )}
    </S.HomeWrapper>
  );
};

export default HomePage;

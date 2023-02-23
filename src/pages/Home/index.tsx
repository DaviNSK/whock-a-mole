import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import * as S from './styles';
import Background from '../../assets/images/WAM_bg.jpg';
import MoleAndHole from 'components/MoleAndHole';
import StartGame from 'components/StartGame';
import StopWatch from 'components/StopWatch';
import Hammer from 'components/Hammer';
import Sound from '../../assets/sounds/sound-hit-mole.mp3';
import GameOver from 'components/GameOver';
import UserRanking from 'components/UserRanking';
import { useSelector } from 'react-redux';
import { appSlice, fetchList, sendResult } from 'store/slices/appSlice';
import { RootState } from 'store/rootReducer';
import { useAppDispatch } from 'store/store';

const HomePage: React.FC = () => {
  const [activeMoleIndex, setActiveMoleIndex] = useState<Number | null>(null);
  const [openStartGame, setOpenStartGame] = useState<boolean>(true);
  const [time, setTime] = useState(GAME_TIME);
  const [score, setScore] = useState(0);
  const [activeHammer, setActiveHammer] = useState(false);
  const [hitMole, setHitMole] = useState<Number | null>(null);
  const moleIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const dispatch = useAppDispatch();
  const ranking = useSelector((state: RootState) => state.app.ranking.data);
  const nickname = useSelector(
    (state: RootState) => state.app.currentPlayerNickname,
  );

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  const quantityMoles = useMemo(
    () =>
      new Array(12).fill(0).map((_i, index) => ({
        points: (20 - index) * 5,
      })),
    [],
  );

  const runningGame = useMemo(
    () => time > 0 && !openStartGame,
    [time, openStartGame],
  );

  useEffect(() => {
    if (moleIntervalRef.current && !runningGame) {
      clearInterval(moleIntervalRef.current);
      moleIntervalRef.current = null;

      return;
    }

    if (!runningGame) return;

    moleIntervalRef.current = setInterval(() => {
      setActiveMoleIndex(Math.floor(Math.random() * 12));
    }, 1000);
  }, [runningGame]);

  useEffect(() => {
    if (runningGame) {
      document.body.style.cursor = 'none';
      return;
    }

    document.body.style.cursor = 'default'; 
  }, [runningGame]);

  const handleStartGame = useCallback((nickname: string) => {
    dispatch(appSlice.actions.setCurrentPlayerNickname({ nickname }));
    dispatch(fetchList());
    
    setOpenStartGame(false);
    setTime(GAME_TIME);
    setScore(0);
  }, [dispatch]);

  const handleClickHammer = useCallback(
    (index: number, points: number) => {
      setActiveHammer(true);

      if (activeMoleIndex !== index) return;

      setScore(score + points);
      setHitMole(index);
      new Audio(Sound).play();
      setActiveMoleIndex(null);

      setTimeout(() => {
        setHitMole(null);
      }, 500);
    },
    [score, activeMoleIndex],
  );

  useEffect(() => {
    if (time !== 0) return;
   
    dispatch(sendResult({ score }));
    dispatch(fetchList());
  }, [dispatch, runningGame, time, score]);

  return (
    <S.HomeWrapper>
      <S.Background src={Background} />
      <S.ContentInformation>
        <S.TitleInformation>Score:</S.TitleInformation>
        <S.Score>{score}</S.Score>
      </S.ContentInformation>

      <StopWatch time={time} setTime={setTime} running={runningGame} />

      <S.ListMoles>
        {quantityMoles.map(({ points }, index) => (
          <S.MoleItem key={index}>
            <S.FakeMole onClick={() => handleClickHammer(index, points)} />
            <MoleAndHole
              points={points}
              hitMole={hitMole === index}
              activeMole={activeMoleIndex === index}
            />
          </S.MoleItem>
        ))}
      </S.ListMoles>

      <UserRanking dataList={ranking} />

      {openStartGame && (
        <StartGame handleStartGame={(nickname) => handleStartGame(nickname)} />
      )}

      {time === 0 && !openStartGame && (
        <GameOver
          handleStartGame={() => handleStartGame(nickname)}
          setOpenStartGame={setOpenStartGame}
          score={score}
        />
      )}

      {runningGame && (
        <Hammer activeHammer={activeHammer} setActiveHammer={setActiveHammer} />
      )}
    </S.HomeWrapper>
  );
};

export default HomePage;

//
// Utils
//

const GAME_TIME = 10000;

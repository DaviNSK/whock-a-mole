import React, { useEffect, useMemo } from 'react';
import * as S from './styles';

interface Props {
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  running: boolean;
  setRunning: React.Dispatch<React.SetStateAction<boolean>>;
}

const StopWatch: React.FC<Props> = ({ time, setTime, running, setRunning }) => {
  useEffect(() => {
    if (time === -10) {
      setTime(0);
      setRunning(false);
    }
  }, []);

  useEffect(() => {
    if (running) {
      setInterval(() => {
        setTime((prevTime) => prevTime - 10);
      }, 10);
    } else {
      clearInterval(undefined);
    }
  }, [running, setTime]);

  const formatTime = useMemo(() => {
    return (
      ('0' + Math.floor((time / 60000) % 60)).slice(-2) +
      ':' +
      ('0' + Math.floor((time / 1000) % 60)).slice(-2) +
      ':' +
      ('0' + ((time / 10) % 100)).slice(-2)
    );
  }, [time]);

  return (
    <S.ContentTime>
      <S.TitleTime>Your time:</S.TitleTime>
      <S.Time>{formatTime}</S.Time>
    </S.ContentTime>
  );
};

export default StopWatch;

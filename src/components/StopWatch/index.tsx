import React, { useEffect, useMemo, useRef } from 'react';
import * as S from './styles';

interface Props {
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  running: boolean;
}

const StopWatch: React.FC<Props> = ({ time, setTime, running }) => {
  const timeIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeIntervalRef.current && !running) {
      clearInterval(timeIntervalRef.current);
      timeIntervalRef.current = null;

      return;
    }

    if (!running) return;

    timeIntervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime - 10);
    }, 10);
  }, [running, setTime]);

  const formatTime = useMemo(() => {
    if (time < 0) return '00:00:00';

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

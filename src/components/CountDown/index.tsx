import React, { useEffect, useMemo, useRef } from 'react';
import parseTime from 'utils/parseTime';
import * as S from './styles';

interface Props {
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  running: boolean;
}

const CountDown: React.FC<Props> = ({ time, setTime, running }) => {
  const timeIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeIntervalRef.current && !running) {
      clearInterval(timeIntervalRef.current);
      timeIntervalRef.current = null;

      return;
    }

    if (!running) return;

    setTime((prevTime) => prevTime - 10);

    timeIntervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime - 10);
    }, 10);
  }, [running, setTime]);

  const formatTime = useMemo(() => {
    if (time < 0) return '00:00:00';

    return parseTime(time);
  }, [time]);

  return (
    <S.ContentTime data-testid="countdown">
      <S.TitleTime>Your time:</S.TitleTime>
      <S.Time>{formatTime}</S.Time>
    </S.ContentTime>
  );
};

export default CountDown;

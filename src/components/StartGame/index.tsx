import Modal from 'components/Modal';
import React, { useState } from 'react';

import * as S from './styles';

interface Props {
  handleStartGame: (nickname: string) => void;
}

const StartGame: React.FC<Props> = ({ handleStartGame }) => {
  const [nickname, setNickname] = useState('');

  return (
    <Modal>
      <S.Container>
        <S.Title>Start Game</S.Title>

        <S.Input
          onChange={(event) => setNickname(event.target.value)}
          placeholder="Your NickName"
        />
        <S.Button onClick={() => handleStartGame(nickname)}>Start</S.Button>
      </S.Container>
    </Modal>
  );
};

export default StartGame;

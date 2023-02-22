import Modal from 'components/Modal';
import React from 'react';

import * as S from './styles';

interface Props {
  handleStartGame: () => void;
}

const StartGame: React.FC<Props> = ({ handleStartGame }) => {
  return (
    <Modal>
      <S.Container>
        <S.Title>Start Game</S.Title>

        <S.Input placeholder="Your NickName" />
        <S.Button onClick={handleStartGame}>Start</S.Button>
      </S.Container>
    </Modal>
  );
};

export default StartGame;

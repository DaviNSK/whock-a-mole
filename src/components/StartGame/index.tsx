import Modal from 'components/Modal';
import React from 'react';

import * as S from './styles';

const StartGame: React.FC = () => {
  return (
    <Modal>
      <S.Container>
        <S.Title>Start Game</S.Title>

        <S.Input placeholder="Your NickName" />
        <S.Button>Start</S.Button>
      </S.Container>
    </Modal>
  );
};

export default StartGame;

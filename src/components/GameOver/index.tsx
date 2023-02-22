import Modal from 'components/Modal';
import React from 'react';

import * as S from './styles';

const GameOver: React.FC = () => {
  return (
    <Modal>
      <S.Container>
        <S.Title>Game Over</S.Title>

        <S.Score>Score: 2181</S.Score>

        <S.ContentFlex>
          <S.Button>Restart</S.Button>
          <S.Button>Exit</S.Button>
        </S.ContentFlex>
      </S.Container>
    </Modal>
  );
};

export default GameOver;

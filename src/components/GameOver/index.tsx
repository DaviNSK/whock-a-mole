import Modal from 'components/Modal';
import React from 'react';

import * as S from './styles';

interface Props {
  handleStartGame: () => void;
  setOpenStartGame: React.Dispatch<React.SetStateAction<boolean>>;
  score: number;
}

const GameOver: React.FC<Props> = ({
  score,
  handleStartGame,
  setOpenStartGame,
}) => {
  return (
    <Modal>
      <S.Container>
        <S.Title>Game Over</S.Title>

        <S.Score>Score: {score}</S.Score>

        <S.ContentFlex>
          <S.Button onClick={handleStartGame}>Restart</S.Button>
          <S.Button onClick={() => setOpenStartGame(true)}>Exit</S.Button>
        </S.ContentFlex>
      </S.Container>
    </Modal>
  );
};

export default GameOver;

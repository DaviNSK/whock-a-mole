import Modal from 'components/Modal';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';

import * as S from './styles';

interface Props {
  handleStartGame: (nickname: string) => void;
  setOpenStartGame: React.Dispatch<React.SetStateAction<boolean>>;
  score: number;
}

const GameOver: React.FC<Props> = ({
  score,
  handleStartGame,
  setOpenStartGame,
}) => {
  const nickname = useSelector(
    (state: RootState) => state.app.currentPlayerNickname,
  );

  return (
    <Modal>
      <S.Container data-testid="game-over-modal">
        <S.Title>Game Over</S.Title>

        <S.Score>Score: {score}</S.Score>

        <S.ContentFlex>
          <S.Button onClick={() => handleStartGame(nickname)}>Restart</S.Button>
          <S.Button onClick={() => setOpenStartGame(true)}>Exit</S.Button>
        </S.ContentFlex>
      </S.Container>
    </Modal>
  );
};

export default GameOver;

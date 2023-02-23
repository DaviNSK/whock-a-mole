import Modal from 'components/Modal';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';

import * as S from './styles';

interface Props {
  handleStartGame: (nickname: string) => void;
}

const StartGame: React.FC<Props> = ({ handleStartGame }) => {
  const currentNickame = useSelector(
    (state: RootState) => state.app.currentPlayerNickname,
  );
  const [nickname, setNickname] = useState(currentNickame);

  return (
    <Modal>
      <S.Container>
        <S.Title>Start Game</S.Title>

        <S.Input
          value={nickname}
          onChange={(event) => setNickname(event.target.value)}
          placeholder="Your NickName"
        />
        <S.Button disabled={!nickname} onClick={() => handleStartGame(nickname)}>Start</S.Button>
      </S.Container>
    </Modal>
  );
};

export default StartGame;

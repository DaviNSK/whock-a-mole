import React from 'react';

import * as S from './styles';

interface Props {
    children: React.ReactNode;
}

const Modal: React.FC<Props> = ({ children }) => {
  return (
    <S.Modal>
      <S.ModalContent>{children}</S.ModalContent>
    </S.Modal>
  );
};

export default Modal;

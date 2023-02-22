import styled from 'styled-components';

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  width: 400px;
  height: 270px;
  background-color: #d98447;
  padding: 20px;
`;

import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  min-height: 257px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.span`
  color: #000;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1px 1px #fff,
    -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
`;

export const Score = styled.span`
  color: #3fc558;
  font-size: 25px;
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1px 1px #fff,
    -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
  margin-top: 35px;
  display: flex;
`;

export const ContentFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const Button = styled.button`
  width: 48%;
  height: 50px;
  background-color: #fff;
  border: 4px solid #3fc558;
  color: #3fc558;
  margin-top: 40px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

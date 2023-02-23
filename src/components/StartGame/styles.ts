import styled from 'styled-components';

interface ButtonProps {
  disabled: boolean;
}

export const Container = styled.div`
  width: 100%;
  padding-top: 20px;
`;

export const Title = styled.span`
  color: #fff;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-bottom: 3px solid #3fc558;
  padding-left: 10px;
  color: #fff;
  background: transparent;
  margin-top: 40px;

  &::placeholder {
    color: #fff;
  }
`;

export const Button = styled.button<ButtonProps>`
  width: 100%;
  height: 50px;
  background-color: #3fc558;
  color: #fff;
  border: none;
  margin-top: 40px;
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  &:hover {
    opacity: ${(props) => (props.disabled ? 0.5 : 0.8)};
  }
`;

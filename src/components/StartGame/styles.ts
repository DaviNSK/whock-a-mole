import styled from 'styled-components';

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
  border-bottom: 3px solid #3FC558;
  padding-left: 10px;
  color: #fff;
  background: transparent;
  margin-top: 40px;

  &::placeholder {
    color: #fff;
  }
`;

export const Button = styled.button`
    width: 100%;
    height: 50px;
    background-color: #3FC558;
    color: #fff;
    border: none;
    margin-top: 40px;
    cursor: pointer;

    &:hover { 
        opacity: 0.8;
    }
`

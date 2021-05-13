import styled from 'styled-components';

export const Button = styled.button`
  background: inherit;
  color: #000;
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: 1px solid #2e186a;
  border-radius: 8px;
  height: 60px;
  outline: none;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;

  :hover {
    border: 2px solid #000;
    transition: ease-in-out 0.1s;
  }

  @media only screen and (max-width: 1024px) {
    width: ${(props) => (props.width ? '160px' : '100%')};
  }

  @media only screen and (max-width: 768px) {
    width: ${(props) => (props.width ? '140px' : '100%')};
  }

  @media only screen and (max-width: 480px) {
    width: ${(props) => (props.width ? '130px' : '100%')};
  }
`;

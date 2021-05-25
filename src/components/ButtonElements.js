import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#ff7124' : '#010606')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '25px' : '20px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  /* font-weight: bold; */
  letter-spacing: 1.5px;
  font-size: 20px;
  box-shadow: 0px 5px 11px -4px #000;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '#ff7124')};
    color: ${({ primary }) => (primary ? '#010606' : '#fff')};
  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

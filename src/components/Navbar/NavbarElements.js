import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#010606' : 'transparent')};
  /* 010606 */
  height: 80px;
  margin-top: -80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: all 0.25s ease;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 10vh;
  align-items: center;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`;
export const TranslateWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  /* height: 40px; */
`;

export const TranslatBTN = styled.a`
  text-align: center;
  color: black;
  background: #ff7124;
  margin-left: 5px;
  padding: 2px 10px;
  font-weight: 600;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    transform: translateX(-100px);
    z-index: 100;
  }
`;

export const NavLogo = styled.img`
  /* display: flex;
  align-items: center;
  justify-content: centerl; */
  height: 60%;
  /* justify-self: flex-end; */
  cursor: pointer;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 67%);
    font-size: 1.8rem;
    cursor: pointer;
    color: white;
    transition: color 0.2s ease;
    &:hover {
      color: #ff7124;
    }
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  height: 100%;
  cursor: pointer;
  transition: color 0.25s ease;
  &.active {
    border-bottom: 3px solid #ff7124;
  }

  &:hover {
    color: #ff7124;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkRouter)`
  border-radius: 50px;
  background: #ff7124;
  white-space: nowrap;
  padding: 10px 22px;
  margin-right: 50px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

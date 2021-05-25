import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background: #010606;
`;

export const FooterWrapper = styled.div`
  padding: 24px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
  text-align: center;
  width: 160px;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  opacity: 0.7;
  transition: all 0.25s ease;
  &:hover {
    color: #ff7124;
    opacity: 1;
  }
`;

export const CopyRight = styled.h3`
  font-size: 12px;
  color: #fff;
  background: #000;
  text-align: center;
  letter-spacing: 2px;
  padding: 10px 0;
  opacity: 0.7;
  @media screen and (max-width: 420px) {
    font-size: 10px;
  }
`;

export const Span = styled.span`
  color: #ff7124;
`;

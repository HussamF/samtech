import React from 'react';
import {
  FooterContainer,
  FooterWrapper,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  CopyRight,
  Span,
} from './FooterElements';

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to='javascript:void(0)'>How it works</FooterLink>
              <FooterLink to='javascript:void(0)'>Sponsers</FooterLink>
              <FooterLink to='javascript:void(0)'>Terms of service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to='javascript:void(0)'>Facebook</FooterLink>
              <FooterLink
                href='http://www.instagram.com/hussamfanos'
                target='_blank'
              >
                Instagram
              </FooterLink>
              <FooterLink
                href='http://www.linkedin.com/in/hussam-fanous-1b356511a'
                target='_blank'
              >
                Linked-In
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          {/* <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to='/'>Facebook</FooterLink>
              <FooterLink to='/'>Sponsers</FooterLink>
              <FooterLink to='/'>Terms of service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to='/'>Facebook</FooterLink>
              <FooterLink to='/'>Instagram</FooterLink>
              <FooterLink to='/'>Linked-In</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper> */}
        </FooterWrapper>
        <CopyRight>
          Copyright &copy;2021 <Span>SamTec</Span>. Designed by :{' '}
          <Span>Hussam</Span>
        </CopyRight>
      </FooterContainer>
    </>
  );
};

export default Footer;

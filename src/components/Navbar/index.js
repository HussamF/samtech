import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import Logo from '../../images/logo.png';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  TranslateWrapper,
  TranslatBTN,
} from './NavbarElements';

import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';
const changeLanguage = (ln) => {
  return () => {
    i18n.changeLanguage(ln);
  };
};

const Navbar = ({ toggle }) => {
  const { t, i18n } = useTranslation();
  const [scrollNav, setScrollNav] = useState(false);
  const changeNavBG = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavBG);
  }, []);
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' src={Logo} />
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to='home'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                Home
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to='about'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                {t('navAbout')}
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to='services'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                {t('navService')}
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to='projects'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                {t('navProjects')}
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to='contact'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                {t('navContact')}
              </NavLinks>
            </NavItem>
            {/* <NavItem>
              <NavLinks to="signup">Sign Up</NavLinks>
            </NavItem> */}
          </NavMenu>

          {/* <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn> */}
        </NavbarContainer>
        <TranslateWrapper>
          <TranslatBTN onClick={changeLanguage('en')}>EN</TranslatBTN>
          <TranslatBTN onClick={changeLanguage('it')}>IT</TranslatBTN>
        </TranslateWrapper>
      </Nav>
    </>
  );
};

export default Navbar;

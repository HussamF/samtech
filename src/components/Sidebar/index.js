import React from 'react';
import {
  SidebarContainer,
  Icon,
  SidebarMenu,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from './Sidebar.Elements';
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';
const changeLanguage = (ln) => {
  return () => {
    i18n.changeLanguage(ln);
  };
};
const Sidebar = ({ isOpen, toggle }) => {
  const { t, i18n } = useTranslation();
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to='home'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            onClick={toggle}
          >
            Home
          </SidebarLink>

          <SidebarLink
            to='about'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            onClick={toggle}
          >
            {t('navAbout')}
          </SidebarLink>

          <SidebarLink
            to='services'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            onClick={toggle}
          >
            {t('navService')}
          </SidebarLink>

          <SidebarLink
            to='projects'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            onClick={toggle}
          >
            {t('navProjects')}
          </SidebarLink>

          <SidebarLink
            to='contact'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            onClick={toggle}
          >
            {t('navContact')}
          </SidebarLink>
          {/* <SidebarLink to="signup" onClick={toggle}>
            Sign Up
          </SidebarLink> */}
        </SidebarMenu>

        {/* <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap> */}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

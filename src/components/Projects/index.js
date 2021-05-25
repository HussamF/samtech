import React from 'react';
import {
  ProjectsContainer,
  ProjectsWrapper,
  ProjectsH1,
  ProjectContent,
  ProjectsP,
  ProjectsPDesc,
  Mac,
  ProjectOne,
  ProjectThree,
  ImgMac,
  ImgMacBX,
  Iphone,
  ImgPhone,
  ImgPhoneBX,
  ProjectTwo,
  ImgPhoneBX2,
  ImgMacBX2,
  ImgPhoneBX3,
  ImgMacBX3,
  SpanBreakLine,
} from './ProjectsElements';
import { useTranslation } from 'react-i18next';
import MacPhoto from '../../images/mac.png';
import IphonePhoto from '../../images/iphone.png';

const Projects = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <ProjectsContainer id='projects'>
        <ProjectsWrapper>
          <ProjectsH1>{t('navProjects')}</ProjectsH1>
          <ProjectThree>
            <Mac>
              <ImgMac src={MacPhoto} />
              <ImgMacBX3></ImgMacBX3>
            </Mac>
            <Iphone>
              <ImgPhone src={IphonePhoto} />
              <ImgPhoneBX3></ImgPhoneBX3>
              <ProjectContent>
                <ProjectsP>UI/UX total desgin and styling</ProjectsP>
                <ProjectsPDesc>JSX, React JS, Styled component</ProjectsPDesc>
              </ProjectContent>
            </Iphone>
          </ProjectThree>
          <SpanBreakLine></SpanBreakLine>
          <ProjectOne>
            <Mac>
              <ImgMac src={MacPhoto} />
              <ImgMacBX></ImgMacBX>
            </Mac>
            <Iphone>
              <ImgPhone src={IphonePhoto} />
              <ImgPhoneBX></ImgPhoneBX>
              <ProjectContent>
                <ProjectsP>UI/UX total desgin and styling</ProjectsP>
                <ProjectsPDesc>HTML5,CSS,JavaScript</ProjectsPDesc>
              </ProjectContent>
            </Iphone>
          </ProjectOne>
          <SpanBreakLine></SpanBreakLine>
          <ProjectTwo>
            <Mac>
              <ImgMac src={MacPhoto} />
              <ImgMacBX2></ImgMacBX2>
            </Mac>
            <Iphone>
              <ImgPhone src={IphonePhoto} />
              <ImgPhoneBX2></ImgPhoneBX2>
              <ProjectContent>
                <ProjectsP>UI/UX total desgin and styling</ProjectsP>
                <ProjectsPDesc>HTML5,CSS,JavaScript</ProjectsPDesc>
              </ProjectContent>
            </Iphone>
          </ProjectTwo>
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  );
};

export default Projects;

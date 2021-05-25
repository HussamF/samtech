import React from 'react';
import { Button } from '../ButtonElements';
// import Image from "../../images/svg-5.svg";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from './InfoElements';
import { useTranslation } from 'react-i18next';

const InfoSection = ({
  id,
  lightBG,

  topLine,
  headLine,
  description,
  buttonLable,
  imgStart,
  primary,
  alt,
  image,
  darkText,
  dark,
  dark2,
  lowHight,
  topHight,
  button,
}) => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <InfoContainer lightBG={lightBG} id='about'>
        <InfoWrapper lowHight={lowHight} topHight={topHight}>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{t(topLine)}</TopLine>
                <Heading darkText={darkText}>{t(headLine)}</Heading>
                <Subtitle darkText={darkText}>{t(description)}</Subtitle>
                <BtnWrap>
                  <Button
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                    to={button}
                  >
                    {t(buttonLable)}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={image} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;

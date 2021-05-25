import React, { useState } from 'react';
import Video from '../../video/video.mp4';
import { Button } from '../ButtonElements';
import {
  HeroContainer,
  HeroBG,
  VideoBG,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './HeroElements';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const OnHover = () => {
    setHover(!hover);
  };
  const { t, i18n } = useTranslation();
  return (
    <HeroContainer id='home'>
      <HeroBG>
        <VideoBG autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBG>
      <HeroContent>
        <HeroH1>UI/UX </HeroH1>
        <HeroP>{t('who')}</HeroP>
        <HeroBtnWrapper>
          <Button
            to='about'
            onMouseEnter={OnHover}
            onMouseLeave={OnHover}
            primary='true'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            // dark="true"
          >
            {t('aboutBTN')} {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;

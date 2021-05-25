import React from 'react';
import Icon1 from '../../images/ser1.svg';
import Icon2 from '../../images/ser2.svg';
import Icon3 from '../../images/ser5.svg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './ServicesElements';
import { useTranslation } from 'react-i18next';
const Services = () => {
  const { t, i18n } = useTranslation();
  return (
    <ServicesContainer id='services'>
      <ServicesH1>{t('navService')}</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>{t('1servicesH2')}</ServicesH2>
          <ServicesP>{t('1servicesP')}</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>{t('2servicesH2')}</ServicesH2>
          <ServicesP>{t('2servicesP')}</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>{t('3servicesH2')}</ServicesH2>
          <ServicesP>{t('3servicesP')}</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;

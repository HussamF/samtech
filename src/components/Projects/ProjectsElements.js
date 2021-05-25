import styled from 'styled-components';
import Website from '../../images/gmadpc.png';
import WebsitePhone from '../../images/gmadphone.png';
import WebsitePhone2 from '../../images/embphone.png';
import Website2 from '../../images/embpc.png';
import WebsitePhone3 from '../../images/samtchphone.png';
import Website3 from '../../images/samtechpc.png';
export const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ProjectsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  /* min-height: 100vh; */
  overflow: hidden;
  padding-bottom: 6rem;
  @media screen and (max-width: 920px) {
    /* padding: 6rem 0; */
  }
  @media screen and (max-width: 600px) {
    /* padding-bottom: 6rem; */
  }
`;

export const ProjectsH1 = styled.h1`
  font-size: 4rem;
  color: #010606;
  margin: 100px 0;
  text-align: center;
  font-family: 'RocknRoll One', sans-serif;
  letter-spacing: 1.5px;
  @media screen and (max-width: 1000px) {
    margin-top: 100px;
  }
  @media screen and (max-width: 733px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 480px) {
    /* margin-top: 0; */
  }
`;
export const ProjectContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  flex-direction: column;
`;

export const ProjectsP = styled.p`
  color: #010606;
`;

export const ProjectsPDesc = styled.p`
  color: #ff9a63;
  font-size: 0.9rem;
  font-weight: bold;
`;
export const ProjectOne = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-bottom: 50px; */

  @media screen and (max-width: 920px) {
    flex-direction: column;
    gap: 5rem;
  }
`;

export const ProjectTwo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 50px; */
  @media screen and (max-width: 920px) {
    flex-direction: column;
    gap: 5rem;
  }
`;

export const ProjectThree = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 50px; */
  @media screen and (max-width: 920px) {
    flex-direction: column;
    gap: 5rem;
  }
`;

export const SpanBreakLine = styled.span`
  width: 100%;
  height: 1px;
  background: #000;
  margin: 50px 0;
`;

export const Mac = styled.div`
  position: relative;
  /* top: 20%;
  left: 20%; */
  width: 606px;
  height: 489px;
  /* display: none; */
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const ImgMac = styled.img`
  /* width: 100%; */
`;

export const ImgMacBX = styled.div`
  position: absolute;
  top: 24px;
  left: 25px;
  width: 555px;
  height: 313px;
  background: url(${Website});
  background-position: top;
  background-size: cover;
  transition: 5s;
  &:hover {
    background-position: bottom;
  }
`;

export const ImgMacBX2 = styled.div`
  position: absolute;
  top: 24px;
  left: 25px;
  width: 555px;
  height: 313px;
  background: url(${Website2});
  background-position: top;
  background-size: cover;
  transition: 5s;
  &:hover {
    background-position: bottom;
  }
`;

export const ImgMacBX3 = styled.div`
  position: absolute;
  top: 24px;
  left: 25px;
  width: 555px;
  height: 313px;
  background: url(${Website3});
  background-position: top;
  background-size: cover;
  transition: 5s;
  &:hover {
    background-position: bottom;
  }
`;

export const Iphone = styled.div`
  position: relative;
  /* top: 30%;
  right: 25%; */
  width: 245px;
  height: 383px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* gap: 10px; */
`;

export const ImgPhone = styled.img`
  width: 100%;
  margin-bottom: 15px;
`;
export const ImgPhoneBX = styled.img`
  position: absolute;
  top: 16px;
  right: 42px;
  width: 161px;
  height: 287px;
  background: url(${WebsitePhone});
  background-position: top;
  background-size: cover;
  transition: 10s ease;
  &:hover {
    background-position: bottom;
  }
`;

export const ImgPhoneBX2 = styled.img`
  position: absolute;
  top: 16px;
  right: 42px;
  width: 161px;
  height: 287px;
  background: url(${WebsitePhone2});
  background-position: top;
  background-size: cover;
  transition: 10s ease;
  &:hover {
    background-position: bottom;
  }
`;
export const ImgPhoneBX3 = styled.img`
  position: absolute;
  top: 16px;
  right: 42px;
  width: 161px;
  height: 287px;
  background: url(${WebsitePhone3});
  background-position: top;
  background-size: cover;
  transition: 10s ease;
  &:hover {
    background-position: bottom;
  }
`;

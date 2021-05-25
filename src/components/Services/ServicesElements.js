import styled from 'styled-components';

export const ServicesContainer = styled.div`
  /* min-height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  /* padding: 3rem 0; */
  @media screen and (max-width: 768px) {
    /* height: 1100px; */
  }
  @media screen and (max-width: 480px) {
    /* height: 1300px; */
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1100px;
  margin: 100px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 15px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    /* padding: 3rem 15px; */
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    /* padding: 3rem 15px; */
  }
`;

export const ServicesCard = styled.div`
  background: #f9f9f9;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 400px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.04);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    height: 300px;
  }
`;

export const ServicesIcon = styled.img`
  height: 170px;
  width: 170px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 4rem;
  color: #fff;
  margin-top: 100px;
  text-align: center;
  font-family: 'RocknRoll One', sans-serif;
  letter-spacing: 1.5px;
  @media screen and (max-width: 1000px) {
    /* margin-top: 100px; */
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 0px;
  }

  @media screen and (max-width: 733px) {
    font-size: 2.5rem;
    /* margin-top: 0; */
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

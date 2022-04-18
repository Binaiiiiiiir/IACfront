import styled, { keyframes } from "styled-components";

export const Myfirst = keyframes`
  0% {
    left: -25%;
  }
  100% {
    left: 100%;
  }
`;
export const Mysecond = keyframes`
  0% {
    left: -25%;
  }
  100% {
    left: 500%;
  }
`;

export const FooterContainer = styled.div`
  /* height: 400px; */

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: #eefcfe;
  overflow-x: hidden;
  overflow-y: hidden;

  @media screen and (max-width: 1000px) {
    height: 500px;
  }

  @media screen and (max-width: 768px) {
    height: 1000px;
  }

  @media screen and (max-width: 480px) {
    height: 1500px;
  }
`;

export const FooterWrapper = styled.div`
  max-width: 100vw;
  margin: 0 auto;
  ${"" /* display: grid; */}
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;

  @media screen and (max-width: 1000px) {
    /* grid-template-columns: 1fr 1fr; */
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterBg = styled.div`
  ${"" /* position: absolute; */}
  bottom: 0;
  width: 100%;
  height: 266px;
`;
export const FooterImg = styled.img`
  width: 100%;
`;
export const Cyclist = styled.img`
  width: 88px;
  height: 100px;
  background-size: 100%;
  bottom: 220px;
  left: 10%;
  position: relative;
  -webkit-animation: ${Myfirst} 30s linear infinite;
  animation: ${Myfirst} 30s linear infinite;
  z-index: 98;
`;

export const Running = styled.img`
  width: 78px;
  height: 90px;
  background-size: 100%;
  bottom: 240px;
  left: 10%;
  position: relative;
  -webkit-animation: ${Myfirst} 45s linear infinite;
  animation: ${Myfirst} 45s linear infinite;
  z-index: 97;
`;

export const Skate = styled.img`
  width: 78px;
  height: 90px;
  background-size: 100%;
  bottom: 237px;
  left: 19%;
  position: relative;
  -webkit-animation: ${Myfirst} 30s linear infinite;
  animation: ${Myfirst} 30s linear infinite;
  z-index: 96;
`;

export const Car = styled.img`
  width: 330px;
  height: 200px;
  background-size: 100%;
  bottom: 150px;
  left: 10%;
  position: relative;
  -webkit-animation: ${Mysecond} 15s linear infinite;
  animation: ${Mysecond} 15s linear infinite;
  z-index: 99;
`;

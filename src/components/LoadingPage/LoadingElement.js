import styled, { keyframes } from "styled-components";

export const paperPlaneScoping = keyframes`
  0% {
    -webkit-transform: translateY(0px);
    -moz-transform: translateY(0px);
    transform: translateY(0px);
  }
  100% {
    -webkit-transform: translateY(100px);
    -moz-transform: translateY(100px);
    transform: translateY(100px);
  }
`;

export const cloudMove = keyframes`
  from {
    margin-left: 100%;
  }
  to {
    margin-left: -100%;
  }
`;

export const LoadingContainer = styled.div`
  background-color: #0aaabc;
  margin: 0;
  padding: 0;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const LoadingBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: hidden;
`;
export const Plane = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 10%;
  -webkit-animation: ${paperPlaneScoping} 2s alternate infinite;
  -moz-animation: p ${paperPlaneScoping} 2s alternate infinite;
  animation: ${paperPlaneScoping} 2s alternate infinite;

  -webkit-animation-timing-function: linear;
  -moz-animation-timing-function: linear;
  animation-timing-function: linear;
  z-index: 99;

  @media screen and (max-width: 720px) {
    width: 33%;
  }
`;

export const CloudOne = styled.img`
  position: fixed;
  top: 60%;
  width: 100%;
  animation: ${cloudMove} 10s infinite;
  z-index: 3;
`;
export const CloudTwo = styled.img`
  position: fixed;
  top: -40%;
  width: 100%;
  animation: ${cloudMove} 5s infinite;
  z-index: 98;
`;
export const CloudThree = styled.img`
  position: fixed;
  top: 0%;
  width: 100%;
  opacity: 0.3;
  animation: ${cloudMove} 6s infinite;
  /* z-index: 1; */
`;
export const CloudFour = styled.img`
  position: fixed;
  top: -40%;
  width: 100%;
  opacity: 0.5;

  animation: ${cloudMove} 10s infinite;
  z-index: 90;
`;

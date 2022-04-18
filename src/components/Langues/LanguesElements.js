import styled from "styled-components";

export const ServiceContainer = styled.div`
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #0aaabc;

  @media screen and (max-width: 1000px) {
    height: 1000px;
  }

  @media screen and (max-width: 768px) {
    height: 1900px;
  }

  @media screen and (max-width: 480px) {
    height: 2000px;
  }
`;

export const ServiceWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    /* grid-template-columns: 1fr 1fr; */
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServiceCard = styled.div`
  background: #eefcfe;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  width: 300px;
  padding: 30px;
  margin-top: 45px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  @media screen and (max-width: 1000px) {
    width: 200px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 10px;
    width: 300px;
  }
`;

export const ServiceIcon = styled.img`
  height: 80px;
  width: 80px;
  margin-bottom: 30px;
`;

export const ServiceH1 = styled.h1`
  font-size: 4rem;
  color: #eefcfe;
  padding: 3rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #071b24;
`;
export const ServiceP = styled.p`
  font-size: 0.8rem;
  text-align: center;
`;

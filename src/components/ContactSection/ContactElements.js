import styled from "styled-components";

export const ContactContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background-color: #0aaabc;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

export const ContactForm = styled.div`
  width: 100%;
  max-width: 820px;
  background-color: #eefcfe;
  border-radius: 10px;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.1);
  z-index: 15;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactInput = styled.div`
  background-color: #071b24;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    width: 26px;
    height: 26px;
    background-color: #071b24;
    transform: rotate(45deg);
    top: 50px;
    left: -13px;
  }
  @media (max-width: 850px) {
    &:before {
      top: -13px;
      left: initial;
      right: 70px;
    }
  }
`;

export const Form = styled.form`
  padding: 2.3rem 2.2rem;
  z-index: 10;
  overflow: hidden;
  position: relative;
`;

export const ContactTitle = styled.h3`
  color: #0aaabc;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1;
  margin-bottom: 0.7rem;
  @media (max-width: 480px) {
    font-size: 1.15rem;
  }
`;
export const FormH3 = styled.h3`
  color: #eefcfe;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1;
  margin-bottom: 0.7rem;
`;
export const ContactInfo = styled.div`
  padding: 2.3rem 2.2rem;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    width: 110px;
    height: 100px;
    border: 22px solid #0aaabc;
    border-radius: 50%;
    bottom: -77px;
    right: 50px;
    opacity: 0.5;
  }

  @media (max-width: 850px) {
    &:before {
      bottom: initial;
      top: -75px;
      right: 65px;
      transform: scale(0.95);
    }
  }
  /* @media (max-width: 480px) {
    &:before {
      display: none;
    } */
`;

export const ContactText = styled.div`
  color: #606160;
  margin: 1.5rem 0 2rem 0;
`;

export const Information = styled.div`
  display: flex;
  color: #555;
  margin: 0.7rem 0;
  align-items: center;
  font-size: 0.95rem;
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;
export const Icon = styled.div`
  width: 28px;
  margin-right: 0.7rem;
`;

export const ContactMedia = styled.div`
  padding: 2rem 0 0 0;
  @media (max-width: 850px) {
    padding: 1.5rem 0 0 0;
  }
`;
export const SocialMediaP = styled.p`
  color: #606160;
`;
export const SocialContainer = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;
export const InfoText = styled.p`
  color: #606160;
  margin: 0.5rem 0 0.3rem 0;
`;
export const BigCircle = styled.span`
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: linear-gradient(to bottom, #dcfafd, #fff);
  bottom: 50%;
  right: 50%;
  transform: translate(-40%, 38%);

  &:after {
    content: "";
    position: absolute;
    width: 360px;
    height: 360px;
    background-color: #0aaabc;
    border-radius: 50%;
    top: calc(50% - 180px);
    left: calc(50% - 180px);
  }
  @media (max-width: 850px) {
    bottom: 75%;
    transform: scale(0.9) translate(-40%, 30%);
    right: 50%;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

export const ContactImg = styled.img`
  position: absolute;
  height: 200px;
  top: 50%;
  left: 80%;
  /* transform: translate(181%, 11%); */
  opacity: 0.5;
  @media (max-width: 850px) {
    display: none;
  }
`;
export const LinkSocialMedia = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  font-size: 1.5rem;
  background: linear-gradient(45deg, #0aaabc, #1fdef3);
  color: #fff;
  text-align: center;
  line-height: 45px;
  margin-right: 0.5rem;
  transition: 0.3s;

  &:hover {
    transform: scale(1.15);
  }
`;

/**
 * All the content from here created by SpyECho
 */

export const inputContainert = styled.div`
  position: relative;
  margin: 1rem 0;

  ${
    "" /* & label {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    padding: 0 0.4rem;
    color: #fafafa;
    font-size: 0.9rem;
    font-weight: 400;
    pointer-events: none;
    z-index: 1000;
    transition: 0.5s;
  }
  & span {
    position: absolute;
    top: 0;
    left: 25px;
    transform: translateY(-50%);
    font-size: 0.8rem;
    padding: 0 0.4rem;
    color: transparent;
    pointer-events: none;
    z-index: 500;

    &:before {
      content: "";
      position: absolute;
      width: 10%;
      opacity: 0;
      transition: 0.3s;
      height: 5px;
      background-color: #1abc9c;
      top: 50%;
      transform: translateY(-50%);
    }

    &:after {
      content: "";
      position: absolute;
      width: 10%;
      opacity: 0;
      transition: 0.3s;
      height: 5px;
      background-color: #1abc9c;
      top: 50%;
      transform: translateY(-50%);
    }

    &:before {
      left: 50%;
    }

    &:after {
      right: 50%;
    } */
  }
`;
export const Input = styled.input`
  width: 100%;
  outline: none;
  border: 2px solid #fafafa;
  background: none;
  padding: 0.6rem 1.2rem;
  color: #fff;
  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  border-radius: 25px;
  transition: 0.3s;
  margin: 0 0 10px 0;
  ::placeholder {
    color: lightgray;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  outline: none;
  border: 2px solid #fafafa;
  background: none;
  color: #fff;
  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  transition: 0.3s;
  padding: 0.8rem 1.2rem;
  min-height: 150px;
  border-radius: 22px;
  resize: none;
  overflow-y: auto;
  ::placeholder {
    color: lightgray;
  }
  ${
    "" /* & label {
    top: 1rem;
    transform: translateY(0);
    top: 0;
    transform: translateY(-50%);
    left: 25px;
    font-size: 0.8rem;
  } */
  }
`;
export const ButtonSub = styled.button`
  display: block;
  padding: 0.6rem 1.3rem;
  background-color: #fff;
  border: 2px solid #fafafa;
  font-size: 0.95rem;
  color: #1abc9c;
  line-height: 1;
  border-radius: 25px;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  margin: 0;

  &:hover {
    background-color: transparent;
    color: #fff;
  }
`;
/**
 * KillRoy was here
 */

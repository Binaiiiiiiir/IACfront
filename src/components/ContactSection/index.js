import React from "react";import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";

import {
  BigCircle,
  ButtonSub,
  ContactContainer,
  ContactForm,
  ContactImg,
  ContactInfo,
  ContactInput,
  ContactMedia,
  // ContactText,
  ContactTitle,
  Form,
  FormH3,
  Icon,
  Information,
  InfoText,
  Input,
  inputContainert,
  LinkSocialMedia,
  SocialContainer,
  SocialMediaP,
  TextArea,
} from "./ContactElements";
import img from "../../images/international-academy.png";

const ContactSection = () => {
  // console.log(FaPhoneAlt, <FaPhoneAlt />);
  return (
    <ContactContainer>
      <BigCircle />
      <ContactImg src={img} />
      <ContactForm>
        <ContactInfo>
          <ContactTitle>Nos coordonnées</ContactTitle>
          {/* <ContactText>
            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta! 
          </ContactText> */}
          {/* <Info>  */}
          <Information>
            <Icon>
              <FaMapMarkerAlt style={{ color: "#0aaabc" }} />
            </Icon>
            <InfoText>
              Imm 44, Av. France apt 9 2ème étage, Agdal-Rabat
            </InfoText>
          </Information>
          <Information>
            {/* <FaPhoneAlt /> */}
            <Icon>
              <FaPhoneAlt style={{ color: "#0aaabc" }} />{" "}
            </Icon>
            <InfoText>0537717171 - 0539494949</InfoText>
          </Information>
          <Information>
            <Icon>
              <FaMapMarkerAlt style={{ color: "#0aaabc" }} />
            </Icon>
            <InfoText>48 Bd Pasteur, 3eme Etage Tanger 90000</InfoText>
          </Information>
          <Information>
            {/* <FaPhoneAlt /> */}
            <Icon>
              <FaPhoneAlt style={{ color: "#0aaabc" }} />{" "}
            </Icon>
            <InfoText>0608089494</InfoText>
          </Information>
          <Information>
            <Icon>
              <HiMail style={{ color: "#0aaabc" }} />
            </Icon>
            <InfoText>iac@iac.ma</InfoText>
          </Information>

          {/* </Info> */}
          <ContactMedia>
            <SocialMediaP>Suivez-nous</SocialMediaP>
            <SocialContainer>
              <LinkSocialMedia
                href='https://www.facebook.com/International.academy.iac/'
                target='_blank'
              >
                {" "}
                <FaFacebookF />
              </LinkSocialMedia>
              <LinkSocialMedia
                href='https://www.instagram.com/international.academy.iac/'
                target='_blank'
              >
                <FaInstagram />
              </LinkSocialMedia>
              <LinkSocialMedia>
                <FaLinkedinIn />
              </LinkSocialMedia>
              <LinkSocialMedia
                href='https://www.wa.link/nnfgg7'
                target='_blank'
              >
                {" "}
                <FaWhatsapp />
              </LinkSocialMedia>
            </SocialContainer>
          </ContactMedia>
        </ContactInfo>
        <ContactInput>
          <Form>
            <FormH3>Contact</FormH3>
            <inputContainert>
              <Input placeholder='Nom complet' type='text' name='name' />
            </inputContainert>
            <inputContainert>
              <Input placeholder='Email adresse' t type='text' name='name' />
            </inputContainert>
            <inputContainert>
              <Input placeholder='Telephone' type='text' name='name' />
            </inputContainert>
            <inputContainert>
              <TextArea
                placeholder='Message'
                type='text'
                name='name'
              ></TextArea>
            </inputContainert>
            <ButtonSub>Send</ButtonSub>
          </Form>
        </ContactInput>
      </ContactForm>
    </ContactContainer>
  );
};

export default ContactSection;

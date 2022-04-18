import React from "react";import {
  FooterContainer,
  FooterHref,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrap,
  SocialIconLinkF,
  SocialIconLinkI,
  SocialIconLinkL,
  SocialIconLinkW,
  SocialIconLinkY,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import logo from "../../images/logo-iac.png";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>IAC</FooterLinkTitle>
              <FooterLink to='Home'>About</FooterLink>
              <FooterLink to='Home'>Langues</FooterLink>
              <FooterLink to='Home'>Certificats</FooterLink>
              <FooterLink to='Home'>Immigration</FooterLink>
              <FooterLink to='Home'>E-learning</FooterLink>
              <FooterLink to='Home'>L'équipe</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Get in touch</FooterLinkTitle>
              <FooterLink to='Home'>Contact</FooterLink>
              <FooterLink to='Home'>Inscription</FooterLink>
              <FooterLink to='Home'>Partenariat</FooterLink>
              <FooterLink to='Home'>Carrière</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Follow us</FooterLinkTitle>
              <FooterHref
                href='https://www.facebook.com/International.academy.iac/'
                target='_blank'
              >
                Facebook
              </FooterHref>
              <FooterHref
                href='https://www.instagram.com/international.academy.iac/'
                target='_blank'
              >
                Instagram
              </FooterHref>
              <FooterHref to='Home'>Linkedin</FooterHref>
              <FooterHref href='https://www.wa.link/nnfgg7' target='_blank'>
                WhatsApp
              </FooterHref>
              <FooterHref
                href='https://www.youtube.com/channel/UCbd-qkZz377LlU1AVLrdYqA'
                target='_blank'
              >
                Youtube
              </FooterHref>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo src={logo} />
            <WebsiteRights>
              {" "}
              International Academy © {new Date().getFullYear()} All right
              reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLinkF href='/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLinkF>
              <SocialIconLinkI href='/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLinkI>
              <SocialIconLinkL href='/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLinkL>
              <SocialIconLinkW href='/' target='_blank' aria-label='WhatsApp'>
                <FaWhatsapp />
              </SocialIconLinkW>
              <SocialIconLinkY
                href='//www.youtube.com/channel/UCbd-qkZz377LlU1AVLrdYqA'
                target='_blank'
                aria-label='Youtube'
              >
                <FaYoutube />
              </SocialIconLinkY>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;

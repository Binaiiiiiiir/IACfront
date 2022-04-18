import styled from "styled-components";import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #eefcfe;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;
export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-items: center;
  margin: 16px;
  width: 250px;
  box-sizing: border-box;
  color: #093d54;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;
export const FooterLink = styled(Link)`
  color: #0aaabc;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  &:hover {
    color: #1fdef3;
    transition: 0.3 ease-out;
  }
`;
export const FooterHref = styled.a`
  color: #0aaabc;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  &:hover {
    color: #1fdef3;
    transition: 0.3 ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled.img`
  justify-self: start;
  width: 100px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;
export const WebsiteRights = styled.small`
  color: #093d54;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLinkF = styled.a`
  color: #0aaabc;
  font-size: 24px;

  &:hover {
    color: #3b5998;
  }
`;
export const SocialIconLinkI = styled.a`
  color: #0aaabc;
  font-size: 24px;
  &:hover {
    height: 24px;
    color: #fff;
    border-radius: 5px;
    background: radial-gradient(
        circle farthest-corner at 35% 90%,
        #fec564,
        transparent 50%
      ),
      radial-gradient(
        circle farthest-corner at 0 140%,
        #fec564,
        transparent 50%
      ),
      radial-gradient(
        ellipse farthest-corner at 0 -25%,
        #5258cf,
        transparent 50%
      ),
      radial-gradient(
        ellipse farthest-corner at 20% -50%,
        #5258cf,
        transparent 50%
      ),
      radial-gradient(
        ellipse farthest-corner at 100% 0,
        #893dc2,
        transparent 50%
      ),
      radial-gradient(
        ellipse farthest-corner at 60% -20%,
        #893dc2,
        transparent 50%
      ),
      radial-gradient(
        ellipse farthest-corner at 100% 100%,
        #d9317a,
        transparent
      ),
      linear-gradient(
        #6559ca,
        #bc318f 30%,
        #e33f5f 50%,
        #f77638 70%,
        #fec66d 100%
      );
  }
`;
export const SocialIconLinkL = styled.a`
  color: #0aaabc;
  font-size: 24px;
  &:hover {
    color: #0077b5;
  }
`;
export const SocialIconLinkW = styled.a`
  color: #0aaabc;
  font-size: 24px;
  &:hover {
    color: #25d366;
  }
`;

export const SocialIconLinkY = styled.a`
  color: #0aaabc;
  font-size: 24px;
  &:hover {
    color: #ff0000;
  }
`;

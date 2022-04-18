import React from "react";
import {
  Car,
  Cyclist,
  FooterBg,
  FooterContainer,
  FooterImg,
  FooterWrapper,
  Running,
  Skate,
} from "./FooterElements";
import footerPic from "../../images/iacFooterBg.png";
import cyclist from "../../images/cyclist.gif";
import car from "../../images/volks.gif";
import man from "../../images/running.gif";
import skate from "../../images/skate.gif";

const FooterAnimation = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterBg>
          <FooterImg src={footerPic} />
          <Cyclist src={cyclist} />
          <Car src={car} />
          <Running src={man} />
          <Skate src={skate} />
        </FooterBg>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default FooterAnimation;

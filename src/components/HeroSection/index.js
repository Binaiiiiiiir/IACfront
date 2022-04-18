import React, { useState } from "react";
import {
  ArrowFroward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg,
} from "./HeroElements";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg
          autoPlay={true}
          loop={true}
          controls={false}
          playsInline
          muted
          src={Video}
          type='video/mp4'
        />
      </HeroBg>
      <HeroContent>
        <HeroH1>International Academy</HeroH1>
        <HeroP>Centre de langue & bureau d'immigration</HeroP>
        <HeroBtnWrapper>
          <Button
            to='about'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
          >
            Découvrir {hover ? <ArrowFroward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;

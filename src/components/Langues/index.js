import React from "react";
import Icon1 from "../../images/france-square.png";
import Icon2 from "../../images/germany-square.png";
import Icon3 from "../../images/united-kingdom-square.png";
import Icon4 from "../../images/morocco-square.png";
import Icon5 from "../../images/spain-square.png";
import Icon6 from "../../images/south-kore.png";
import {
  ServiceCard,
  ServiceContainer,
  ServiceH1,
  ServiceIcon,
  ServiceP,
  ServicesH2,
  ServiceWrapper,
} from "./LanguesElements";

const Langues = () => {
  return (
    <ServiceContainer>
      <ServiceH1>Langues</ServiceH1>
      <ServiceWrapper>
        <ServiceCard>
          <ServiceIcon src={Icon1} />
          <ServicesH2>Français</ServicesH2>
          <ServiceP></ServiceP>
        </ServiceCard>

        <ServiceCard>
          <ServiceIcon src={Icon2} />
          <ServicesH2>Deutsch</ServicesH2>
          <ServiceP></ServiceP>{" "}
        </ServiceCard>

        <ServiceCard>
          <ServiceIcon src={Icon3} />
          <ServicesH2>English</ServicesH2>
          <ServiceP></ServiceP>{" "}
        </ServiceCard>
      </ServiceWrapper>

      <ServiceWrapper>
        <ServiceCard>
          <ServiceIcon src={Icon4} />
          <ServicesH2>العربية</ServicesH2>
          <ServiceP></ServiceP>{" "}
        </ServiceCard>

        <ServiceCard>
          <ServiceIcon src={Icon5} />
          <ServicesH2>Español</ServicesH2>
          <ServiceP></ServiceP>{" "}
        </ServiceCard>

        <ServiceCard>
          <ServiceIcon src={Icon6} />
          <ServicesH2>한국인</ServicesH2>
          <ServiceP></ServiceP>{" "}
        </ServiceCard>
      </ServiceWrapper>
    </ServiceContainer>
  );
};

export default Langues;

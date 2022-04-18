import React from "react";
import Icon1 from "../../images/equipe.png";
import Icon2 from "../../images/equipe.png";
import Icon3 from "../../images/equipe.png";

import {
  ServiceCard,
  ServiceContainer,
  ServiceH1,
  ServiceIcon,
  ServiceP,
  ServicesH2,
  ServiceWrapper,
} from "./ServicesElements";

const Team = () => {
  return (
    <ServiceContainer>
      <ServiceH1>L'équipe</ServiceH1>
      <ServiceWrapper>
        <ServiceCard>
          <ServiceIcon src={Icon1} />
          <ServicesH2>Hicham Hichami</ServicesH2>
          <ServiceP>Responsable administratif - Tanger</ServiceP>
        </ServiceCard>

        <ServiceCard>
          <ServiceIcon src={Icon2} />
          <ServicesH2>Hamza EL OUARTI</ServicesH2>
          <ServiceP>Directeur</ServiceP>
        </ServiceCard>

        <ServiceCard>
          <ServiceIcon src={Icon3} />
          <ServicesH2>Youssef Youssefi</ServicesH2>
          <ServiceP>Responsable administratif - Rabat</ServiceP>
        </ServiceCard>
      </ServiceWrapper>
    </ServiceContainer>
  );
};

export default Team;

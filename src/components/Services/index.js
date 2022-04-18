import React from "react";
import Icon1 from "../../images/Ausbildung.svg";
import Icon2 from "../../images/international-academy-entree-express.svg";
import Icon3 from "../../images/family.svg";
import Icon4 from "../../images/etudes.svg";
import Icon5 from "../../images/international-academy-traducation.svg";
import Icon6 from "../../images/travail.svg";
import IconInfo from "../../images/info.png";

import Flippy, { FrontSide, BackSide } from "react-flippy";
// import "../../../node_modules/react-flippy/src/lib/styles.css";
import {
  ServiceCard,
  ServiceContainer,
  ServiceH1,
  ServiceIcon,
  ServiceP,
  ServicesH2,
  ServiceWrapper,
} from "./ServicesElements";
var StyleBack = {
  padding: "0",
  marginTop: "0",
  boxShadow: "none",
};
const Services = () => {
  return (
    <ServiceContainer>
      <ServiceH1>Immigration</ServiceH1>
      <ServiceWrapper>
        <Flippy
          flipOnHover={true} // default false
          flipOnClick={true} // default false
          flipDirection='vertical' // horizontal or vertical
          style={StyleBack}
        >
          <FrontSide style={StyleBack}>
            {" "}
            <ServiceCard>
              <ServiceIcon src={Icon1} />
              <ServicesH2>Ausbildung</ServicesH2>
              <ServiceP>
                Formation rémunérée en alternance en Allemagne
              </ServiceP>
            </ServiceCard>
          </FrontSide>
          <BackSide style={StyleBack}>
            {" "}
            <ServiceCard>
              <ServiceIcon src={IconInfo} />
              <ServicesH2>Info</ServicesH2>
              <ServiceP>
                Plus de 500 formations avec un salaire de 1000€/mois
              </ServiceP>
            </ServiceCard>
          </BackSide>
        </Flippy>

        <Flippy
          flipOnHover={true} // default false
          flipOnClick={true} // default false
          flipDirection='horizontal' // horizontal or vertical
          style={StyleBack}
        >
          <FrontSide style={StyleBack}>
            {" "}
            <ServiceCard>
              <ServiceIcon src={Icon2} />
              <ServicesH2>Entrée Express</ServicesH2>
              <ServiceP>
                Accédez facilement au marché d'emploi canadien
              </ServiceP>
            </ServiceCard>
          </FrontSide>
          <BackSide style={StyleBack}>
            {" "}
            <ServiceCard>
              <ServiceIcon src={IconInfo} />
              <ServicesH2>Info</ServicesH2>
              <ServiceP>
                Conseil & démarches administratives
              </ServiceP>
            </ServiceCard>
          </BackSide>
        </Flippy>
        <Flippy
          flipOnHover={true} // default false
          flipOnClick={true} // default false
          flipDirection='vertical' // horizontal or vertical
          style={StyleBack}
        >
          <FrontSide style={StyleBack}>
            {" "}
            <ServiceCard>
              <ServiceIcon src={Icon3} />
              <ServicesH2>Regroupement familial</ServicesH2>
              <ServiceP>Rejoignez votre famille rapidement</ServiceP>
            </ServiceCard>
          </FrontSide>
          <BackSide style={StyleBack}>
            {" "}
            <ServiceCard>
              <ServiceIcon src={IconInfo} />
              <ServicesH2>Info</ServicesH2>
              <ServiceP>
                Nous vous aidons pour les demarches administratives
              </ServiceP>
            </ServiceCard>
          </BackSide>
        </Flippy>
      </ServiceWrapper>

      <ServiceWrapper>
        <Flippy
          flipOnHover={true} // default false
          flipOnClick={true} // default false
          flipDirection='horizontal' // horizontal or vertical
          style={StyleBack}
        >
          <FrontSide style={StyleBack}>
            {" "}
            <ServiceCard>
              <ServiceIcon src={Icon4} />
              <ServicesH2>Etudes</ServicesH2>
              <ServiceP>Universites allemandes & canadiennes</ServiceP>
            </ServiceCard>
          </FrontSide>
          <BackSide style={StyleBack}>
            {" "}
            <ServiceCard>
              <ServiceIcon src={IconInfo} />
              <ServicesH2>Info</ServicesH2>
              <ServiceP>
                Plus de 380 universites allemandes vous attendent.
              </ServiceP>
            </ServiceCard>
          </BackSide>
        </Flippy>
        <Flippy
          flipOnHover={true} // default false
          flipOnClick={true} // default false
          flipDirection='vertical' // horizontal or vertical
          style={StyleBack}
        >
          <FrontSide style={StyleBack}>
            {" "}
            <ServiceCard>
              <ServiceIcon src={Icon5} />
              <ServicesH2>Traduction</ServicesH2>
              <ServiceP>
                Traduisez vos documents officiels
              </ServiceP>
            </ServiceCard>
          </FrontSide>
          <BackSide style={StyleBack}>
            {" "}
            <ServiceCard>
              <ServiceIcon src={IconInfo} />
              <ServicesH2>Info</ServicesH2>
              <ServiceP>
               Traduction agreee et reconnu par les etats
              </ServiceP>
            </ServiceCard>
          </BackSide>
        </Flippy>
        <Flippy
          flipOnHover={true} // default false
          flipOnClick={true} // default false
          flipDirection='horizontal' // horizontal or vertical
          style={StyleBack}
        >
          <FrontSide style={StyleBack}>
            {" "}
            <ServiceCard>
              <ServiceIcon src={Icon6} />
              <ServicesH2>Travail</ServicesH2>
              <ServiceP>Trouvez un emploi qui vous convient</ServiceP>
            </ServiceCard>
          </FrontSide>
          <BackSide style={StyleBack}>
            {" "}
            <ServiceCard>
              <ServiceIcon src={IconInfo} />
              <ServicesH2>Info</ServicesH2>
              <ServiceP>
                Conseil & accompagnement
              </ServiceP>
            </ServiceCard>
          </BackSide>
        </Flippy>
      </ServiceWrapper>
    </ServiceContainer>
  );
};

export default Services;

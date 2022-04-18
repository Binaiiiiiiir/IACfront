import React from "react";
import { Carousel } from "react-carousel-minimal";
import dele from "../../images/deleinternationalacademy.png";
import ielts from "../../images/ieltsinternationalacademy.png";
import dsd from "../../images/dsdinternationalacademy.png";
import dalf from "../../images/dalfinternationalacademy.png";
import toefl from "../../images/toeflinternationalacademy.png";

// import Icon2 from "../../images/equipe.png";
// import Icon3 from "../../images/equipe.png";

import {
  // ServiceCard,
  ServiceContainer,
  ServiceH1,
  // ServiceIcon,
  // ServiceIcon,
  // ServiceP,
  // ServicesH2,
  ServiceWrapper,
} from "./CertificatsElements";

const Certificats = () => {
  console.log(dele);
  const data = [
    {
      image: dele,
      caption: "DELE",
    },
    {
      image: ielts,
      caption: "IELTS",
    },
    {
      image: dsd,
      caption: "DSD",
    },
    {
      image: dalf,
      caption: "DALF",
    },
    {
      image: toefl,
      caption: "TOEFL",
    },

    // {
    //   image:
    //     "https://s3-eu-west-1.amazonaws.com/prepmyfuture-assets/commercial/dele/covers/logo_dele.png",
    //   caption: "Scotland",
    // },
    // {
    //   image:
    //     "https://vtlogo.com/wp-content/uploads/2020/06/international-english-language-testing-system-ielts-vector-logo-small.png",
    //   caption: "Darjeeling",
    // },
    // {
    //   image:
    //     "https://www.language-examination.com/user/themes/arenaria/images/exams/delf-dalf.png",
    //   caption: "San Francisco",
    // },
    // {
    //   image:
    //     "https://www.etudiant.ma//uploads/article/cover/10821/large_Actu-1.jpg",
    //   caption: "Scotland",
    // },
    // {
    //   image:
    //     "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
    //   caption: "Darjeeling",
    // },
    // {
    //   image:
    //     "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
    //   caption: "San Francisco",
    // },
    // {
    //   image:
    //     "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
    //   caption: "Scotland",
    // },
  ];
  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
    color: "#071B24",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <ServiceContainer>
      <ServiceH1>Certificats</ServiceH1>
      <Carousel
        data={data}
        time={2000}
        width='850px'
        height='400px'
        captionStyle={captionStyle}
        radius='10px'
        slideNumber={false}
        slideNumberStyle={slideNumberStyle}
        captionPosition='bottom'
        automatic={true}
        dots={true}
        pauseIconColor='white'
        pauseIconSize='40px'
        slideBackgroundColor='#EEFCFE'
        slideImageFit='cover'
        thumbnails={false}
        thumbnailWidth='100px'
      />

      <ServiceWrapper>
        {/* <ServiceCard>
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
        </ServiceCard> */}
      </ServiceWrapper>
    </ServiceContainer>
  );
};

export default Certificats;

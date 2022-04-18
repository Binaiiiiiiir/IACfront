import React, { useEffect } from "react";
import { useState } from "react";
import Certificats from "../components/Certificats";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
// import FooterAnimation from "../components/FooterAnimation";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/InfoSection/Data";
import Langues from "../components/Langues";
import Loading from "../components/LoadingPage";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Sidebar from "../components/Sidebar";
// import Team from "../components/Team";

const Home = () => {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return loading ? (
    <Loading />
  ) : (
    <>
      {/* <Loading /> */}
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <Langues />
      <Certificats />
      <Services />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      {/* <Team /> */}
      <ContactSection />
      <Footer />
      {/* <FooterAnimation /> */}
    </>
  );
};

export default Home;

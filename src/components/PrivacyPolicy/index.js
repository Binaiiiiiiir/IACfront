import React, { useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import {
  Header,
  List,
  Parahraph,
  PrivacyPolicyContainer,
  TextContainer,
  TextSection,
  TitleP,
} from "./PrivacyPolicyElements";

const PrivacyPolicyComponent = () => {
  const [isOpen, setisOpen] = useState(false);
  window.scrollTo(0, 0);

  const toggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <PrivacyPolicyContainer>
        <TextContainer>
          <Header>Privacy Policy</Header>

          <TextSection>
            <Parahraph>
              This Privacy Policy is prepared by <b>INTERNATIONAL ACADEMY</b>{" "}
              and whose registered address is{" "}
              <b>
                {" "}
                Buiding 44, France Avenue apt 9 2nd floor, Agdal Rabat MOROCCO{" "}
              </b>{" "}
              (“We”) are committed to protecting and preserving the privacy of
              our visitors when visiting our site or communicating
              electronically with us. This policy sets out how we process any
              personal data we collect from you or that you provide to us
              through our website and social media sites. We confirm that we
              will keep your information secure and that we will comply fully
              with all applicable Moroccan Data Protection legislation and
              regulations. Please read the following carefully to understand
              what happens to personal data that you choose to provide to us, or
              that we collect from you when you visit our sites. By submitting
              information you are accepting and consenting to the practices
              described in this policy.
            </Parahraph>
          </TextSection>
          <TextSection>
            <TitleP>Types of information we may collect from you</TitleP>
            <Parahraph>
              We may collect, store and use the following kinds of personal
              information about individuals who visit and use our website and
              social media sites: Information you supply to us. You may supply
              us with information about you by filling in forms on our website
              or social media. This includes information you provide when you
              submit a contact/enquiry form. The information you give us may
              include, but not limited to, your name, address, e-mail address
              and phone number.
            </Parahraph>
          </TextSection>
          <TextSection>
            <TitleP>How we may use the information we collect</TitleP>
            <Parahraph>
              We use the information in the following ways: Information you
              supply to us. We will use this information: <br />
              <List>
                <li>
                  to provide you with information and/or services that you
                  request from us;
                </li>
                <li> To contact you to provide the information requested.</li>
              </List>
            </Parahraph>
          </TextSection>
          <TextSection>
            <TitleP>Disclosure of your information</TitleP>
            <Parahraph>
              Any information you provide to us will either be emailed directly
              to us or may be stored on a secure server. We do not rent, sell or
              share personal information about you with other people or
              non-affiliated companies. We will use all reasonable efforts to
              ensure that your personal data is not disclosed to
              regional/national institutions and authorities, unless required by
              law or other regulations. Unfortunately, the transmission of
              information via the internet is not completely secure. Although we
              will do our best to protect your personal data, we cannot
              guarantee the security of your data transmitted to our site; any
              transmission is at your own risk. Once we have received your
              information, we will use strict procedures and security features
              to try to prevent unauthorized access.
            </Parahraph>
          </TextSection>
          <TextSection>
            <TitleP>Your rights – access to your personal data</TitleP>
            <Parahraph>
              You have the right to ensure that your personal data is being
              processed lawfully (“Subject Access Right”). Your subject access
              right can be exercised in accordance with data protection laws and
              regulations. Any subject access request must be made in writing to
              <b>iac@iac.ma</b>. We will provide your personal data to you
              within the statutory time frames. To enable us to trace any of
              your personal data that we may be holding, we may need to request
              further information from you. If you have a complaint about how we
              have used your information, you have the right to complain to the
              Information Commissioner’s Office (ICO).
            </Parahraph>
          </TextSection>
          <TextSection>
            <TitleP>Changes to our privacy policy</TitleP>
            <Parahraph>
              Any changes we may make to our privacy policy in the future will
              be posted on this page and, where appropriate, notified to you by
              e-mail. Please check back frequently to see any updates or changes
              to our privacy policy.
            </Parahraph>
          </TextSection>
          <TextSection>
            <TitleP>Contact</TitleP>
            <Parahraph>
              Questions, comments and requests regarding this privacy policy are
              welcomed and should be addressed to <b>iac@iac.ma</b>
            </Parahraph>
          </TextSection>
        </TextContainer>
      </PrivacyPolicyContainer>
      <Footer />
    </>
  );
};

export default PrivacyPolicyComponent;

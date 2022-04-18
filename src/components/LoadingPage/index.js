import React from "react";
import {
  CloudFour,
  CloudOne,
  CloudThree,
  CloudTwo,
  LoadingBox,
  LoadingContainer,
  Plane,
} from "./LoadingElement";
import plane from "../../images/Loading-International-Academy.png";
import cloudone from "../../images/cloud.png";
import cloudtwo from "../../images/cloud2.png";
import cloudthree from "../../images/cloud3.png";
// import cloudfour from "../../images/cloud.png";

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingBox>
        <Plane src={plane} />
      </LoadingBox>

      <CloudOne src={cloudone} />

      <CloudTwo src={cloudtwo} />
      <CloudFour src={cloudone} />
      <CloudThree src={cloudthree} />
    </LoadingContainer>
  );
};

export default Loading;

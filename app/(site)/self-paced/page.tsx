import React from "react";
import { Metadata } from "next";
import Certifications from '../../../components/Certifications';
import BotCampDescription from '../../../components/BotCampDescription';
import Feature from '../../../components/Features';

export const metadata: Metadata = {
  title: "Self-Paced",
  description: "",
  // other metadata
};

const SelfPaced = () => {
  return (
    <>
      <BotCampDescription />
      <Certifications />
      <Feature />
    </>
  );
};

export default SelfPaced;

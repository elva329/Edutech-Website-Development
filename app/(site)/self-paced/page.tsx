import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import Certifications from '../../../components/Certifications';
import SelfPacedDescription from '../../../components/SelfPacedDescription';
import Feature from '../../../components/Features';
import { usePathname } from 'next/navigation'

export const metadata: Metadata = {
  title: "Self-Paced",
  description: "",
  // other metadata
};

const SelfPaced = () => {
  return (
    <div className="">
      <SelfPacedDescription />
      <Certifications />
      <Feature />
    </div>
  );
};

export default SelfPaced;

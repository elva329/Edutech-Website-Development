import React from 'react'
import TermsAndConditionsContent from '../../../components/TermsAndConditionsContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Learn Nex - Your Launchpad to Stardom!",
  description: "",
  icons: '/images/LearnNex-logo.png'
};

const TermsAndConditions = () => {
  return (
    <TermsAndConditionsContent />
  )
}

export default TermsAndConditions;
import React from 'react'
import CheckoutForm from '../../../components/CheckoutForm'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Learn Nex - Your Launchpad to Stardom!",
  description: "",
  icons: '/images/LearnNex-logo.png'
};

const Checkout = () => {
  return (
    <div className="pb-20 pt-40">
      <CheckoutForm />
    </div>
  )
}

export default Checkout
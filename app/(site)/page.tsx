import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FunFact from "@/components/FunFact";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import { CompanyCarousel } from '../../components/CompanyCarousel';

export const metadata: Metadata = {
  title: "Learn Nex - Your Launchpad to Stardom!",
  description: "",
  icons: '/images/LearnNex-logo.png'
};

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Brands /> */}
      <Blog />
      <About />
      <CompanyCarousel />
      <Feature />
      <FunFact />
      {/* <FeaturesTab /> */}

      {/* <Integration /> */}
      <Testimonial />
      <CTA />

      {/* <Pricing /> */}
      {/* <Contact /> */}

      <FAQ />
    </main>
  );
}

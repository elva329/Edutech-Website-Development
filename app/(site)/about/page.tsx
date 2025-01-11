import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import { Metadata } from "next";
import About from '../../../components/About';
import { CompanyCarousel } from '../../../components/CompanyCarousel';
import Feature from '../../../components/Features';
import FunFact from '../../../components/FunFact';
import AboutMission from '../../../components/AboutMission';
import EnrollNumber from '../../../components/EnrollNumber';

export const metadata: Metadata = {
  title: "Blog Page - Solid SaaS Boilerplate",
  description: "This is Blog page for Solid Pro",
  // other metadata
};

const AboutPage = async () => {
  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      {/* <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
           
          </div>
        </div>
      </section> */}
      <About />
      <EnrollNumber />
      <CompanyCarousel />
      <AboutMission />

      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default AboutPage;

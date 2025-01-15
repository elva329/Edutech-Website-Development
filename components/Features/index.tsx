"use client";
import React from "react";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";
import { usePathname } from 'next/navigation'
import { CoursePagination } from '../CoursePagination';
import metorLedCourseData from './metorLedCourseData';
import professionalCourseData from './professionalCourseData';
import selfPacedCourseData from './selfPacedCourseData';
import homePageCourseData from './homePageCourseData';


const Feature = () => {
  const pathname = usePathname();

  console.log('pathname', pathname)


  const pathnames = new Map([
    ['/', homePageCourseData],
    ['/mentor-led', metorLedCourseData.slice(0, 6)],
    ['/mentor-led/page-2', metorLedCourseData.slice(6, 12)],
    ['/self-paced', selfPacedCourseData.slice(0, 6)],
    ['/self-paced/page-2', selfPacedCourseData.slice(6, 12)],
    ['/professional-advancement-series', professionalCourseData.slice(0, 6)],
    ['/professional-advancement-series/page-2', professionalCourseData.slice(6, 12)]
  ])

  console.log('data', pathnames.get(pathname))

  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="lg:py-25 xl:py-10 bg-white flex flex-col items-center">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0 mb-10">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "OUR POPULAR TRAINING PROGRAMS",
              subtitle: "Choose From Top Courses By LearnNex",
              description: ``,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-5">
            {/* <!-- Features item Start --> */}

            {pathnames.get(pathname)?.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </div>
        {pathname === '/' ? <div className='bg-[rgb(255,0,106)] text-xl text-white rounded-3xl w-fit px-4 py-2 cursor-pointer'>Browser All Courses</div> : <CoursePagination />}

      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;

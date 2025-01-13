"use client";
import React from "react";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";
import { usePathname } from 'next/navigation'
import { CoursePagination } from '../CoursePagination';
import { CourseData } from '../../types/feature';
import featuresData from './featuresData';
import nextPageData from './nextPageData';

const Feature = () => {
  const pathname = usePathname();

  console.log('pathname', pathname)

  const data = pathname === '/self-paced/current-page' ? nextPageData : featuresData;

  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-20 lg:py-25 xl:py-30 bg-white flex flex-col items-center">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
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

            {data.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </div>
        {pathname === '/' ? <div className='bg-[rgb(255,0,106)] text-xl text-white rounded-3xl w-fit px-4 py-2 cursor-pointer mt-10'>Browser All Courses</div> : <CoursePagination />}

      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;

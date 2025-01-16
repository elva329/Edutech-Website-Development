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
import proPicksData from './proPicksData';


const Feature = () => {
  const pathname = usePathname();

  const combinedMap = new Map([
    ['/', {
      title: 'OUR POPULAR TRAINING PROGRAMS',
      subtitle: 'Choose From Top Courses By LearnNex',
      data: homePageCourseData
    }],
    ['/mentor-led', {
      title: 'OUR POPULAR MENTOR-LED TRAINING PROGRAMS',
      subtitle: 'Expertly mentored courses by LearnNex',
      data: metorLedCourseData.slice(0, 6)
    }],
    ['/mentor-led/page-2', {
      title: 'OUR POPULAR MENTOR-LED TRAINING PROGRAMS',
      subtitle: 'Expertly mentored courses by LearnNex',
      data: metorLedCourseData.slice(6, 12)
    }],
    ['/self-paced', {
      title: 'OUR POPULAR SELF PACED TRAINING PROGRAMS',
      subtitle: 'Choose from top self-paced courses by LearnNex',
      data: selfPacedCourseData.slice(0, 6)
    }],
    ['/self-paced/page-2', {
      title: 'OUR POPULAR SELF PACED TRAINING PROGRAMS',
      subtitle: 'Choose from top self-paced courses by LearnNex',
      data: selfPacedCourseData.slice(6, 12)
    }],
    ['/professional-advancement-series', {
      title: 'PROFESSIONAL ADVANCEMENT SERIES PROGRAMS’ CERTIFICATIONS',
      subtitle: 'Get recognized and add value to your professional achievements',
      data: professionalCourseData.slice(0, 6)
    }],
    ['/professional-advancement-series/page-2', {
      title: 'PROFESSIONAL ADVANCEMENT SERIES PROGRAMS’ CERTIFICATIONS',
      subtitle: 'Get recognized and add value to your professional achievements',
      data: professionalCourseData.slice(6, 12)
    }],
    ['/pro-picks', {
      title: 'PROGRAMS PICKED BY INDUSTRY PROFESSIONALS',
      subtitle: 'Take the next step of your career with Pro Picked Courses',
      data: proPicksData
    }],
    ['/all-course', {
      title: 'INBDUSTRY BEST TRAING PROGRAMS OFFERED BY LEARNNEX',
      subtitle: 'Take the next step of your career with Pro Picked Courses',
      data: [...homePageCourseData, ...professionalCourseData.slice(5, 8)]
    }],
    ['/all-course/page-2', {
      title: 'INBDUSTRY BEST TRAING PROGRAMS OFFERED BY LEARNNEX',
      subtitle: 'Take the next step of your career with Pro Picked Courses',
      data: [...professionalCourseData.slice(0, 5), ...selfPacedCourseData.slice(10, 12), ...metorLedCourseData.slice(1, 3)]
    }],
    ['/all-course/page-3', {
      title: 'INBDUSTRY BEST TRAING PROGRAMS OFFERED BY LEARNNEX',
      subtitle: 'Take the next step of your career with Pro Picked Courses',
      data: [...metorLedCourseData.slice(4, 7), ...selfPacedCourseData.slice(5, 8)]
    }]
  ]);



  const className = pathname === '/pro-picks' ? 'mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-2 xl:mt-20 xl:gap-5' : 'mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-5';

  const pageData = combinedMap.get(pathname) || { title: '', subtitle: '', data: [] };

  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="lg:py-25 xl:py-10 bg-white flex flex-col items-center">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0 mb-10">
          <SectionHeader
            headerInfo={{
              title: pageData.title,
              subtitle: pageData.subtitle,
              description: ``,
            }}
          />
          <div className={className}>
            {pageData.data.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
          </div>
        </div>
        {pathname === '/' ? <div className='bg-[rgb(255,0,106)] text-xl text-white rounded-3xl w-fit px-4 py-2 cursor-pointer'>Browser All Courses</div> : <CoursePagination />}
      </section>
    </>
  );
};

export default Feature;

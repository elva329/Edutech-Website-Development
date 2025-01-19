import React from 'react'
import Image from "next/image";
import growthOperationData from './growthOperationData';
import BlogItem from '../Blog/BlogItem';
import benefitsData from './benefitsData';

const GrowthAndOperationsContents = () => {
  return (
    <section className="py-20 lg:py-25 xl:py-30 bg-[#f8f7fc]">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0 text-center flex items-center justify-center flex-col">
        <div className='text-4xl font-bold text-[#3b065f] mb-10'>LearnNex Growth and Operations Intern Role: <br />A Pathway to &nbsp;
          <span className='bg-gradient-to-r from-purple-600 via-red-500 to-indigo-400 text-transparent bg-clip-text'>Professional Excellence</span>
        </div>
        <p className='text-[#7a7a7a] mb-15'>At LearnNex, the Growth and Operations Intern role is a unique opportunity designed to provide aspiring professionals with hands-on experience in the dynamic field of business growth and operational efficiency. This role is integral to the expansion and success of LearnNex’s Exclusive Industrial Training and Internship Program, positioning interns at the forefront of our strategic initiatives.</p>
        <div className='text-4xl font-bold text-[#3b065f] mb-15'>LearnNex Growth and Operations Intern &nbsp;
          <span className='bg-gradient-to-r from-purple-600 via-red-500 to-indigo-400 text-transparent bg-clip-text'>Certificate</span>
        </div>
        <Image
          width={640} height={453}
          src='/images/growth-and-operations/Growth-and-operations-certificate-Sample-1536x1086.webp'
          alt='growth-and-operations'
          className='aspect-[640/453] mb-15'
        />
        <h2 className='text-4xl font-bold text-[#3b065f] mb-10'>Key Responsibilities</h2>
        <p className='text-[#7a7a7a] mb-15'>As a Growth and Operations Intern, your primary responsibilities include:</p>
        <div className="grid grid-cols-5 gap-2 md:grid-cols-2 lg:grid-cols-5 xl:gap-5 mb-15">
          {growthOperationData.map((post, key) => (
            <BlogItem key={key} blog={post} />
          ))}
        </div>
        <div className='text-4xl font-bold text-[#3b065f] mb-10'>Benefits of the LearnNex &nbsp;
          <span className='bg-gradient-to-r from-purple-600 via-red-500 to-indigo-400 text-transpar ent bg-clip-text'>Growth&nbsp;</span>
          and &nbsp;  <span className='bg-gradient-to-r from-purple-600 via-red-500 to-indigo-400 text-transparent bg-clip-text'>Operations</span> <br />
          Intern Role
        </div>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-1 lg:grid-cols-1 xl:gap-5 mb-15 text-left">
          {benefitsData.map((post, key) => (
            <BlogItem key={key} blog={post} />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-2 lg:grid-cols-2 xl:gap-50 mb-5">
          <div>
            <div className='text-4xl font-bold text-[#3b065f] mb-10'>Why Choose the LearnNex Growth and Operations &nbsp;
              <span className='bg-gradient-to-r from-purple-600 via-red-500 to-indigo-400 text-transparent bg-clip-text'>Internship?</span>
            </div>
            <p className='text-[#7a7a7a] text-left'>By choosing to intern at LearnNex, you are taking a significant step towards building a successful career. This internship offers a holistic learning experience that prepares you for the challenges and opportunities in the business world. Whether you aim to secure placements, apply to prestigious institutions, or start your own venture, the skills and experience gained here will be invaluable.</p>
          </div>
          <Image
            width={640} height={566}
            src='/images/growth-and-operations/OFF-1.png'
            alt='growth-and-operations'
            className='aspect-[640/566] mb-15'
          />
        </div>
        <div className='text-2xl'>Join LearnNex as a Growth and Operations Intern and embark on a journey of professional growth and achievement. We look forward to seeing you thrive and succeed in your career endeavors.</div>
      </div>
    </section>
  )
}

export default GrowthAndOperationsContents
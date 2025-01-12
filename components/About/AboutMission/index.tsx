import React from 'react'
import { motion } from "framer-motion";
import Image from "next/image";

const AboutMission = () => {
  return (
    <section className="grid grid-cols-2 gap-4 w-full max-w-4xl mx-auto my-0 text-center py-20 lg:py-25 xl:py-15 bg-white">
      <Image
        className="aspect-[159/154]"
        src="/images/about/mission.png"
        alt="Hero"
        width={477}
        height={462}
      />
      <div className='flex flex-col justify-between items-center'>
        <span className='text-4xl text-[#3b075f]'>Our Mission: Bridging</span>
        <span className='bg-gradient-to-r from-purple-600 via-red-500 to-indigo-400 text-transparent bg-clip-text text-4xl'> Dreams</span>
        <span className='text-4xl text-[#3b075f]'>And</span>
        <span className='bg-gradient-to-r from-purple-600 via-red-500 to-indigo-400 text-transparent bg-clip-text text-4xl'>Opportunities</span>
        <p className='text-[#627693] text-sm'>At LearnNex, our mission is crystal clear – to empower every student to find their dream job in the ever-evolving tech landscape. We are committed to nurturing talent, fostering innovation, and preparing you to stand out in the competitive job market. With our comprehensive approach, we're not just creating graduates; we're shaping future tech leaders.</p>
        <div className='bg-[#ff006a] text-white rounded-3xl w-fit py-2 px-4'>Explore Opportunities</div>
      </div>
    </section>
  )
}

export default AboutMission
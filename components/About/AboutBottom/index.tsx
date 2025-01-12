import React from 'react'
import Image from "next/image";

const AboutBottom = () => {
  return (
    <div className='grid grid-cols-2 gap-2 bg-[#fefefe]'>
      <div className='flex flex-col pr-10 pl-30'>
        <div className="relative text43xl font-bold text-[#3b065f] xl:text-hero pb-10">
          Are You Career Ready? Unlock Your <span className='bg-gradient-to-r from-purple-600 via-red-500 to-indigo-400 text-transparent bg-clip-text'>Potential </span>
          with LearnNex
        </div>
        <div>Your journey towards a fulfilling career starts here. LearnNex equips you with the skills, knowledge, and confidence you need to seize the opportunities that come your way. Join us and be prepared to embark on a rewarding tech journey.</div>
      </div>
      <Image
        className="m-auto"
        src='/images/about/about-bottom.png'
        alt="Hero"
        width={438}
        height={438}
      />
    </div>
  )
}

export default AboutBottom
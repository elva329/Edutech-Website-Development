import React from 'react'
import Feature from '../../../components/Features'
import Image from "next/image";

const ProPicks = () => {
  return (
    <>
      <section className="overflow-hidden pb-5 lg:pb-25 xl:pb-5 bg-white mt-40">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="grid grid-cols-2">
            <Image
              src="/images/pro-picks/Pro-Picks-Page.png"
              alt="About"
              className="aspect-[1/1]"
              width={563}
              height={563}
            />
            <div>
              <h2 className="relative mb-6 text-4xl font-bold xl:text-hero text-[#3b065f]">
                Take Your Career To The Next Step With
                <span className='bg-gradient-to-r from-purple-600 via-red-500 to-indigo-400 text-transparent bg-clip-text'> Pro Picked </span>
                Courses
              </h2>
              <p className='text-sm text-[#686868]'>
                At LearnNex, we are committed to not only providing you with top-quality education but also helping you take the next step in your career.
              </p>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-[#ff006a]">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-base text-[#627693]">
                    Expert Trainers
                  </h3>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-[#ff006a]">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-base text-[#627693]">
                    Online Remote Learning
                  </h3>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-[#ff006a]">
                    03
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-base text-[#627693]">
                    Lifetime Access
                  </h3>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-[#ff006a]">
                    04
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-base text-[#627693]">
                    Certified Courses
                  </h3>
                </div>
              </div>
            </div>

          </div>
        </div>
        <Feature />
      </section>
    </>
  )
}

export default ProPicks
import React from 'react'
import Image from "next/image";

const PreRegistration = () => {
  return (
    <>
      <section id="features" className="py-20 lg:py-25 xl:py-30 bg-[#f8f7fc] flex flex-col pl-20 lg:pl-25 xl:pl-30 pr-20 lg:pr-25 xl:pr-30">
        <div className='grid grid-cols-3'>
          <div className='col-span-2'>
            <Image src='/images/pre-registration/pre-registration.png' width={750} height={500} className='aspect-[3/2]' alt='pre-registration' />
          </div>
          <div>
            <div className='bg-white w-90 h-72 p-5 rounded-lg flex flex-col justify-around mb-10'>
              <div className='flex justify-start items-center'>
                <span className='font-bold text-2xl mr-2'>₹999.00</span>
                <del className='text-[#757c8e]'>₹1,999.00</del>
              </div>
              <div className='rounded-2xl bg-[#ff006a] text-white flex items-center justify-center pt-1 pb-1 cursor-pointer'>Add to cart</div>
              <div className='border' />
              <div className='flex items-center justify-start gap-2'>
                <svg width={24} height={24} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M192.07 447.3m63.63 0l0 0q63.63 0 63.63 63.63l0 192.14q0 63.63-63.63 63.63l0 0q-63.63 0-63.63-63.63l0-192.14q0-63.63 63.63-63.63Z" fill="#ff006a" /><path d="M449.43 320.29m63.63 0l0 0q63.63 0 63.63 63.63l0 319.16q0 63.63-63.63 63.63l0 0q-63.63 0-63.63-63.63l0-319.16q0-63.63 63.63-63.63Z" fill="#ff006a" /><path d="M703.34 193.2m63.63 0l0 0q63.63 0 63.63 63.63l0 446.24q0 63.63-63.63 63.63l0 0q-63.63 0-63.63-63.63l0-446.24q0-63.63 63.63-63.63Z" fill="#ff006a" /></svg>
                All Levels
              </div>
              <div className='flex items-center justify-start gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M16.64 11.38c-.11.35-.245.7-.404 1.037A8.043 8.043 0 0 1 9 17a7.94 7.94 0 0 1-6-2.725V16a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H4.54A5.958 5.958 0 0 0 9 15a6.03 6.03 0 0 0 5.731-4.216.994.994 0 0 1 1.252-.656.999.999 0 0 1 .657 1.252ZM16 1a1 1 0 0 0-1 1v1.7A8.007 8.007 0 0 0 9.012 1a8.038 8.038 0 0 0-7.235 4.581 7.88 7.88 0 0 0-.405 1.041 1 1 0 1 0 1.91.592A6.028 6.028 0 0 1 9.012 3a6.01 6.01 0 0 1 4.472 2H12a1 1 0 1 0 0 2h4a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" fill="var(--iconFill, #ff006a)" /></svg>
                30/08/2024 Last Updated</div>
            </div>
            <div className='bg-white w-90 h-35 p-5 rounded-lg flex flex-col justify-around gap-2'>
              <span>A course by</span>
              <div className="w-11 h-11 shrink-0 grow-0 rounded-full bg-[#ff006a] flex items-center justify-center text-white">L</div>
              <span className='font-bold'>Learnnex</span>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-8'>
          <div className='bg-[#ff006a] rounded-sm text-white font-bold text-center py-1 px-5 w-fit'>Pre-registration</div>
          <div className='text-4xl font-bold'>Pre-Registration</div>
          <div className='flex gap-4'>
            <div className="w-11 h-11 shrink-0 grow-0 rounded-full bg-[#ff006a] flex items-center justify-center text-white">L</div>
            <div className='text-[#757c8e]'>By <span className='font-bold text-black'>Learnnex</span> </div>
            <div className='text-[#757c8e]'>Categories: <span className='font-bold text-black'>Pre-registration</span></div>
            <div className='flex text-[#757c8e] gap-1'>
              <svg width={24} height={24} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h48v48H0z" fill="none"></path>
                <g id="Shopicon">
                  <path d="M14,4c-2.2,0-4,1.8-4,4v36l14-8l14,8V8c0-2.2-1.8-4-4-4H14z M34,37.107l-10-5.714l-10,5.714V8h20V37.107z" fill="#ff006a"></path>
                </g>
              </svg>
              Wishlist
            </div>
            <div className='flex text-[#757c8e] gap-1'>
              <svg fill="#000000" height={24} width={24} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                <g>
                  <g>
                    <path d="M512,241.7L273.643,3.343v156.152c-71.41,3.744-138.015,33.337-188.958,84.28C30.075,298.384,0,370.991,0,448.222v60.436
			l29.069-52.985c45.354-82.671,132.173-134.027,226.573-134.027c5.986,0,12.004,0.212,18.001,0.632v157.779L512,241.7z
			 M255.642,290.666c-84.543,0-163.661,36.792-217.939,98.885c26.634-114.177,129.256-199.483,251.429-199.483h15.489V78.131
			l163.568,163.568L304.621,405.267V294.531l-13.585-1.683C279.347,291.401,267.439,290.666,255.642,290.666z" fill="#ff006a" />
                  </g>
                </g>
              </svg>
              Share</div>
          </div>
        </div>
      </section>

    </>
  )
}

export default PreRegistration
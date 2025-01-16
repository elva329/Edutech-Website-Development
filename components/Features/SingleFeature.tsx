import React from "react";
import { CourseData } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from 'next/navigation'

const SingleFeature = ({ feature }: { feature: CourseData }) => {
  const { icon, title, description, originalPrice, salePrice, id } = feature;
  const pathname = usePathname();

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top z-40 rounded-3xl bg-[#f8f7fc] p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 xl:p-5 flex flex-col justify-between"
      >
        <div className="relative flex h-220 w-342 items-center justify-center rounded-[4px] bg-primary">
          <Image src={icon} width={342} height={220} alt="title" />
        </div>
        <h3 className="mb-5 mt-7.5 text-xl font-semibold text-[#3b075f]">
          {title}
        </h3>
        <p className='text-[#4b5563] text-sm mb-4'>{description}</p>
        <div className='flex items-center justify-between'>
          <del className='text-[#757c8e]'>₹{originalPrice}</del>
          <p className='text-[rgb(255,0,106)] text-xl'>₹{salePrice}</p>
          <div className='flex py-3 px-4 border border-[#ff006a] rounded-3xl text-[#ff006a] text-sm cursor-pointer hover:bg-[#ff006a] hover:text-white'>
            <svg
              viewBox="0 0 1024 1024"
              version="1.1" xmlns="http://www.w3.org/2000/svg" width={20} height={20}
            >
              <path d="M955 209.2c-3.7-4.6-9.3-7.2-15.1-7.2H275l-13.4-70.1c-1.8-9.2-9.8-15.9-19.2-15.9H84.2c-10.8 0-19.5 8.8-19.5 19.5 0 10.8 8.8 19.5 19.5 19.5h142l13 68c0.1 0.8 0.1 1.6 0.2 2.4l3.9 19.3L335 723.5c1.8 9.2 9.8 15.9 19.2 15.9h476.1c10.8 0 19.5-8.8 19.5-19.5 0-10.8-8.8-19.5-19.5-19.5h-460l-15.6-81.6h508c9.3 0 17.3-6.5 19.2-15.6L959 225.4c1.1-5.7-0.3-11.7-4-16.2zM846.8 579.5H351.6l-69.1-338.4h633.4l-69.1 338.4z" className='fill-current hover:fill-white' />
              <path d="M455 851.2m-56.8 0a56.8 56.8 0 1 0 113.6 0 56.8 56.8 0 1 0-113.6 0Z" className='fill-current hover:fill-white' />
              <path d="M773.6 851.2m-56.8 0a56.8 56.8 0 1 0 113.6 0 56.8 56.8 0 1 0-113.6 0Z" className='fill-current hover:fill-white' />
            </svg>
            <span className='ml-2'>Add to cart</span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SingleFeature;

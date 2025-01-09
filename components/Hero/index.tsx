"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="
        overflow-hidden 
        pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46 
        bg-[url('/images/hero/background-hero.png')]
        bg-no-repeat
        bg-cover
        rounded-[3rem]
        relative
        bg-center
        py-10
        mt-4
        mx-5
        ">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h1 className="mb-5 pr-16 text-3xl font-bold text-white xl:text-hero ">
                LearnNex: Empowering your Tech Dreams to Reality
              </h1>
              <p className='text-base text-[rgba(248,247,252,.8)]'>
                Welcome to LearnNex, where innovation meets education, and aspirations turn into achievements.  Embark on a transformative journey that propels you towards your dream career in the world of technology.
              </p>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-white px-7.5 py-2.5 text-[#3b075f] duration-300 ease-in-out hover:bg-[#e5e1f4]"
                    >
                      Find Programs
                    </button>
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-[rgba(248,247,252,.15)] px-7.5 py-2.5 text-white duration-300 ease-in-out"
                    >
                      Get In Touch
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <div className=" relative aspect-[640/640] w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/Homepage-Learn.png"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

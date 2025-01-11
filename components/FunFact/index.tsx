"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from '../ui/card';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import Autoplay from "embla-carousel-autoplay"
import { funFactData } from './funFactData';
import EnrollNumber from '../EnrollNumber';

const FunFact = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: -20,
        },

        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, delay: 0.1 }}
      viewport={{ once: true }}
    >

      <EnrollNumber />
      {/* <!-- ===== Funfact Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-15 bg-white flex flex-col items-center justify-center">
        <div className='text-[#3b065f] text-4xl mb-10'>
          Trusted by <span className='bg-gradient-to-r from-purple-600 via-red-500 to-indigo-400 text-transparent bg-clip-text'>colleges and universities </span>throughout the nation
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          plugins={[plugin.current]}
          className="w-full max-w-4xl"
        >
          <CarouselContent>
            {funFactData.map((funfact, index) => (
              <CarouselItem key={funfact.id} className="md:basis-1/2 lg:basis-40">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6 bg-[#f8f7fc] rounded-3xl">
                      <Image
                        className="shadow-solid-l dark:hidden w-full h-auto"
                        src={funfact.url}
                        alt="Hero"
                        width={438}
                        height={438}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
      {/* <!-- ===== Funfact End ===== --> */}
    </motion.div>
  );
};

export default FunFact;

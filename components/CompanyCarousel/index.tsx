"use client"
import * as React from "react"
import { Card, CardContent } from "../ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { carouselData } from './carouselData'
import Image from "next/image";
import { motion } from "framer-motion";

export function CompanyCarousel() {

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
      <section className="py-20 lg:py-25 xl:py-15 bg-white flex flex-col items-center justify-center">
        <div className='text-[#3b065f] text-4xl mb-10'>
          Authorized by <span className='bg-gradient-to-r from-purple-600 via-red-500 to-indigo-400 text-transparent bg-clip-text'>top companies</span> around the world
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          plugins={[plugin.current]}
          className="w-full max-w-4xl"
        >
          <CarouselContent>
            {carouselData.map((carousel, index) => (
              <CarouselItem key={carousel.id} className="md:basis-1/2 lg:basis-40">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6 bg-[#f8f7fc] rounded-3xl">
                      <Image
                        className="shadow-solid-l dark:hidden w-full h-auto"
                        src={carousel.url}
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
    </motion.div>

  )
}

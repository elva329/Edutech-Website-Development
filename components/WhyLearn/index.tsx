"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import whyData from '../../app/(site)/about/whyData';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image";

const WhyLearn = () => {
  const [activeFaq, setActiveFaq] = useState(1);

  const handleFaqToggle = (id: number) => {
    activeFaq === id ? setActiveFaq(0) : setActiveFaq(id);
  };

  return (
    <div className='grid grid-cols-2 gap-2 bg-[#fefefe] mb-20 mt-20'>
      <div className='flex flex-col pl-10'>
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              x: -20,
            },

            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_left text-center"
        >
          <div className="relative text43xl font-bold text-[#3b065f] xl:text-hero">
            Why LearnNex: Redefining <span className='bg-gradient-to-r from-purple-600 via-red-500 to-indigo-400 text-transparent bg-clip-text'>Excellence</span>
          </div>
        </motion.div>

        <Accordion type="single" collapsible className="w-full">
          {whyData.map((faq, key) => (
            <AccordionItem value={`item-${faq.id}`} key={faq.id}
              className='
                    data-[state=open]:bg-[#f8f7fc] 
                    py-8
                    px-10
                    rounded-3xl
                    '>
              <AccordionTrigger>{faq.quest}</AccordionTrigger>
              <AccordionContent>
                {faq.ans}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div>
        <Image
          className="m-auto aspect-[555/548]"
          src='/images/about/why-learn.png'
          alt="Hero"
          width={555}
          height={548}
        />
      </div>

    </div>
  );
};

export default WhyLearn;

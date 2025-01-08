"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import FAQItem from "./FAQItem";
import faqData from "./faqData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState(1);

  const handleFaqToggle = (id: number) => {
    activeFaq === id ? setActiveFaq(0) : setActiveFaq(id);
  };

  return (
    <>
      {/* <!-- ===== FAQ Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-15 xl:pb-20 bg-white">
        <div className="relative mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="absolute -bottom-16 -z-1 h-full w-full">
          </div>
          <div className="flex flex-wrap gap-8 md:flex-nowrap md:items-center xl:gap-12.5 flex-col">
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
              className="animate_left md:w-2/5 lg:w-1/2"
            >
              <div className="relative text43xl font-bold text-[#3b065f] dark:text-white xl:text-hero">
                Frequently Asked Questions
              </div>
            </motion.div>

            <Accordion type="single" collapsible className="w-full pr-50 pl-50">
              {faqData.map((faq, key) => (
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
        </div>
      </section>
      {/* <!-- ===== FAQ End ===== --> */}
    </>
  );
};

export default FAQ;

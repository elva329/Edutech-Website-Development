"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { certificateData } from './certificateData';

const Certifications = () => {
  return (
    <>
      {/* <!-- ===== SignIn Form Start ===== --> */}
      <section className="">
        <div className="relative z-1 mx-auto max-w-c-1480 px-7.5 pb-7.5 pt-5 lg:px-15 lg:pt-5 xl:px-20 xl:pt-5 text-center">
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
            className="animate_top rounded-lg px-7.5 pt-7.5  xl:px-15 xl:pt-15"
          >
            <div className='text-[#3b075f] mb-10'>SELF-PACED TRAINING PROGRAMS’ CERTIFICATIONS</div>
            <div className='grid grid-cols-3 gap-10 mb-20'>
              {certificateData.map(certificate => {
                return <Image
                  key={certificate.id}
                  src={certificate.url}
                  width={640}
                  height={427}
                  className='aspect-[352/235]'
                  alt='certificate'
                />
              })}
            </div>
            <div className='text-[#3b075f] text-4xl'>
              Get recognized and add value to your professional<br />
              <span className='bg-gradient-to-r from-purple-600 via-red-500 to-indigo-400 text-transparent bg-clip-text'> achievements</span>
            </div>

          </motion.div>
        </div>
      </section>
      {/* <!-- ===== SignIn Form End ===== --> */}
    </>
  );
};

export default Certifications;

"use client";
import { motion } from "framer-motion";

type HeaderInfo = {
  title?: string;
  subtitle: string;
  description: string;
};

const SectionHeader = ({ headerInfo }: { headerInfo: HeaderInfo }) => {
  const { title, subtitle, description } = headerInfo;

  return (
    <>
      {/* <!-- Section Title Start --> */}
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
        className="animate_top mx-auto text-center"
      >
        {title && <div className="mb-4 inline-block rounded-full px-4.5 py-1.5 dark:border text-xs">
          <span className="text-sectiontitle font-medium text-[#3b075f]">
            {title}
          </span>
        </div>}

        <h2 className="mx-auto mb-4 text-3xl font-bold duration-300 bg-gradient-to-r from-purple-600 via-red-500 to-indigo-400 text-transparent bg-clip-text md:w-4/5 xl:w-1/2 xl:text-sectiontitle3">
          {subtitle}
        </h2>
        <p className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%] text-[#627693] text-sm">{description}</p>
      </motion.div>
      {/* <!-- Section Title End --> */}
    </>
  );
};

export default SectionHeader;

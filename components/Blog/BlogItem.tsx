"use client";
import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import Link from "next/link";

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { mainImage, title, metadata } = blog;

  return (
    <>
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
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top rounded-3xl bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
      >
        <div className="px-4 flex flex-col gap-4">
          <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium duration-300 bg-gradient-to-r from-purple-600 via-red-500 to-indigo-400 text-transparent bg-clip-text xl:text-itemtitle2">
            <Link href={`/blog/blog-details`}>
              {`${title.slice(0, 40)}`}
            </Link>
          </h3>
          <p className="line-clamp-3 text-[#627693] text-sm">{metadata}</p>
          <Link href='/all-course'>
            <div className='
              bg-[rgb(255,0,106)] hover:bg-white text-white hover:text-[rgb(255,0,106)] border hover:border-[rgb(255,0,106)]  w-fit py-1 px-4 rounded-2xl text-sm
              '>50+ Programs</div>
          </Link>

        </div>
      </motion.div>
    </>
  );
};

export default BlogItem;

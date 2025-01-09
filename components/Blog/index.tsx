import React from "react";
import SectionHeader from "../Common/SectionHeader";
import BlogItem from "./BlogItem";
import BlogData from "./blogData";

const Blog = async () => {
  return (
    <section className="py-20 lg:py-25 xl:py-30 bg-[#f8f7fc]">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              // title: ``,
              subtitle: `Online Classes For Remote Learning`,
              description: `Redefining Excellence With Our Industry Best Learning Modules Designed For The Future`,
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>

      <div className="mx-auto mt-15 max-w-c-1132 px-4 md:px-8 xl:mt-20 xl:px-60">
        <div className="grid grid-cols-[1fr_1fr] gap-x-8 gap-y-8">
          {BlogData.slice(0, 4).map((blog, key) => (
            <BlogItem blog={blog} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

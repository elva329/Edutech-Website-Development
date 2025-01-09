"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <>
      {/* <!-- ===== CTA Start ===== --> */}
      <section className="overflow-hidden px-4 py-20 md:px-8 lg:py-25 xl:py-30 2xl:px-0 z-0 bg-[#762173] bg-[linear-gradient(#d74488,#cc3180_50%,rgba(248,247,252,0))] relative">
        <div className="mx-auto max-w-c-1390 rounded-lg md:px-12.5 xl:px-17.5 xl:py-0">
          <div className="flex flex-wrap gap-8 md:flex-nowrap md:items-center md:justify-between md:gap-0">
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
              className="animate_left md:w-[70%] lg:w-1/2"
            >
              <h2 className="mb-4 w-11/12 text-3xl font-bold text-white xl:text-sectiontitle4">
                Subscribe To Our Newsletter
              </h2>
              <form action="#">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Email address"
                    className="w-full rounded-full border border-stroke px-6 py-3 shadow-solid-11 focus:border-[#762173] focus:outline-none dark:focus:border-[#762173]"
                  />

                  <button
                    aria-label="signup to newsletter"
                    className="absolute right-0 p-4"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2489 16.5022C11.9557 16.7948 11.4807 16.7943 11.1881 16.5011C10.8953 16.2078 10.8959 15.7327 11.1893 15.4401L14.137 12.5L11.1894 9.56094C10.8959 9.2683 10.8954 8.79313 11.1882 8.4998C11.4808 8.20662 11.9556 8.20611 12.2489 8.49865L16.118 12.3584C16.1964 12.4366 16.1964 12.5634 16.1181 12.6416L12.2489 16.5022ZM13.158 2.75C7.78196 2.75 3.40796 7.124 3.40796 12.5C3.40796 17.876 7.78196 22.25 13.158 22.25C18.534 22.25 22.908 17.876 22.908 12.5C22.908 7.124 18.534 2.75 13.158 2.75Z" fill="#3B075F"></path>
                    </svg>
                    {/* <svg
                      className="fill-[#757693] hover:text-[#3b075f] dark:fill-white"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_48_1487)">
                        <path
                          d="M3.1175 1.17318L18.5025 9.63484C18.5678 9.67081 18.6223 9.72365 18.6602 9.78786C18.6982 9.85206 18.7182 9.92527 18.7182 9.99984C18.7182 10.0744 18.6982 10.1476 18.6602 10.2118C18.6223 10.276 18.5678 10.3289 18.5025 10.3648L3.1175 18.8265C3.05406 18.8614 2.98262 18.8792 2.91023 18.8781C2.83783 18.8769 2.76698 18.857 2.70465 18.8201C2.64232 18.7833 2.59066 18.7308 2.55478 18.6679C2.51889 18.6051 2.50001 18.5339 2.5 18.4615V1.53818C2.50001 1.46577 2.51889 1.39462 2.55478 1.33174C2.59066 1.26885 2.64232 1.2164 2.70465 1.17956C2.76698 1.14272 2.83783 1.12275 2.91023 1.12163C2.98262 1.12051 3.05406 1.13828 3.1175 1.17318ZM4.16667 10.8332V16.3473L15.7083 9.99984L4.16667 3.65234V9.16651H8.33333V10.8332H4.16667Z"
                          fill=""
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_48_1487">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg> */}
                  </button>
                </div>
              </form>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
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
              className="animate_right lg:w-[45%]"
            >
              <div className="flex items-center justify-end xl:justify-between">

                {/* <Image
                  width={299}
                  height={299}
                  src="/images/shape/shape-06.png"
                  alt="Saly"
                  className="hidden xl:block"
                />
                <a
                  href="/auth/signup"
                  className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white hover:opacity-90 dark:bg-white dark:text-black"
                >
                  Sign up free
                  <Image
                    width={20}
                    height={20}
                    src="/images/icon/icon-arrow-dark.svg"
                    alt="Arrow"
                    className="dark:hidden"
                  />
                  <Image
                    width={20}
                    height={20}
                    src="/images/icon/icon-arrow-light.svg"
                    alt="Arrow"
                    className="hidden dark:block"
                  />
                </a> */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== CTA End ===== --> */}
    </>
  );
};

export default CTA;

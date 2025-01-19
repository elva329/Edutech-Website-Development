"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <footer className="border-t border-stroke bg-[#f8f7fc]">
        <div className="mx-auto">
          {/* <!-- Footer Top --> */}
          <div className="mx-auto max-w-c-1280 xl:mt-15 xl:mb-15">
            <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0 md:px-8 px-4 2xl:px-0">
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
                className="animate_top w-1/2 lg:w-1/4"
              >
                <a href="/" className="relative">
                  <Image
                    width={448}
                    height={103}
                    src="/images/logo/LearnNex-logo-footer.png"
                    alt="Logo"
                    className="aspect-[397/91]"
                  />
                </a>

                <p className="mb-10 mt-5 text-[#3b075f] text-sm">
                  Experience innovation, learn with purpose, and step into a future of boundless possibilities. LearnNex is not just a platform; it’s your launchpad to tech stardom. Seize the opportunity – join us today!
                </p>

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
                  className="animate_top"
                >
                  <ul className="flex items-center gap-5">
                    <li className='rounded-full border p-2 hover:bg-white'>
                      <a href="https://www.facebook.com/p/LearnNex-61558644743773/" aria-label="social icon">
                        <svg
                          className="fill-[#D1D8E0] transition-all duration-300 "
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_48_1499)">
                            <path
                              d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                              fill="#3B075F"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_48_1499">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                    </li>
                    <li className='rounded-full border p-2 hover:bg-white'>
                      <a href="https://x.com/thelearnex" aria-label="social icon">
                        <svg
                          className="fill-[#D1D8E0] transition-all duration-300"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_48_1502)">
                            <path
                              d="M22.162 5.65593C21.3985 5.99362 20.589 6.2154 19.76 6.31393C20.6337 5.79136 21.2877 4.96894 21.6 3.99993C20.78 4.48793 19.881 4.82993 18.944 5.01493C18.3146 4.34151 17.4803 3.89489 16.5709 3.74451C15.6615 3.59413 14.7279 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30961 12.0771 6.14972C11.6978 6.98983 11.6067 7.93171 11.818 8.82893C10.1551 8.74558 8.52832 8.31345 7.04328 7.56059C5.55823 6.80773 4.24812 5.75098 3.19799 4.45893C2.82628 5.09738 2.63095 5.82315 2.63199 6.56193C2.63199 8.01193 3.36999 9.29293 4.49199 10.0429C3.828 10.022 3.17862 9.84271 2.59799 9.51993V9.57193C2.59819 10.5376 2.93236 11.4735 3.54384 12.221C4.15532 12.9684 5.00647 13.4814 5.95299 13.6729C5.33661 13.84 4.6903 13.8646 4.06299 13.7449C4.32986 14.5762 4.85 15.3031 5.55058 15.824C6.25117 16.345 7.09712 16.6337 7.96999 16.6499C7.10247 17.3313 6.10917 17.8349 5.04687 18.1321C3.98458 18.4293 2.87412 18.5142 1.77899 18.3819C3.69069 19.6114 5.91609 20.2641 8.18899 20.2619C15.882 20.2619 20.089 13.8889 20.089 8.36193C20.089 8.18193 20.084 7.99993 20.076 7.82193C20.8949 7.2301 21.6016 6.49695 22.163 5.65693L22.162 5.65593Z"
                              fill="#3B075F"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_48_1502">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                    </li>
                    <li className='rounded-full border p-2 hover:bg-white'>
                      <a href="https://in.linkedin.com/company/learnnex" aria-label="social icon">
                        <svg
                          className="fill-[#D1D8E0] transition-all duration-300"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_48_1505)">
                            <path
                              d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z"
                              fill="#3B075F"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_48_1505">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                    </li>
                    <li className='rounded-full border p-2 hover:bg-white text-center'>

                      <a href="https://www.instagram.com/learnnex.in/?hl=en" aria-label="social icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 20 20" id="Instagram--Streamline-Bootstrap" height="20" width="20"><desc>Instagram Streamline Icon: https://streamlinehq.com</desc><path d="M10 0C7.28625 0 6.945 0.0125 5.87875 0.06 4.8125 0.10999999999999999 4.08625 0.2775 3.4499999999999997 0.525a4.875 4.875 0 0 0 -1.77125 1.15375A4.875 4.875 0 0 0 0.525 3.4499999999999997C0.2775 4.085 0.10874999999999999 4.8125 0.06 5.875 0.0125 6.94375 0 7.2837499999999995 0 10.001249999999999c0 2.7150000000000003 0.0125 3.0549999999999997 0.06 4.12125 0.05 1.065 0.21749999999999997 1.79125 0.46499999999999997 2.4274999999999998 0.25625 0.6575 0.5974999999999999 1.2149999999999999 1.15375 1.77125 0.555 0.55625 1.1125 0.8987499999999999 1.77 1.15375 0.6375 0.2475 1.3625 0.41625 2.4274999999999998 0.46499999999999997C6.94375 19.9875 7.2837499999999995 20 10 20s3.0549999999999997 -0.0125 4.1225000000000005 -0.06c1.06375 -0.05 1.7925 -0.21749999999999997 2.42875 -0.46499999999999997a4.875 4.875 0 0 0 1.77 -1.15375c0.55625 -0.55625 0.8975 -1.11375 1.15375 -1.77125 0.24625000000000002 -0.63625 0.41500000000000004 -1.3625 0.46499999999999997 -2.4274999999999998C19.9875 13.05625 20 12.71625 20 10s-0.0125 -3.05625 -0.06 -4.12375c-0.05 -1.06375 -0.21875 -1.79125 -0.46499999999999997 -2.42625a4.875 4.875 0 0 0 -1.15375 -1.77125A4.875 4.875 0 0 0 16.55 0.525c-0.6375 -0.2475 -1.3650000000000002 -0.41625 -2.42875 -0.46499999999999997C13.053749999999999 0.0125 12.715 0 9.9975 0zm-0.89625 1.8025h0.8975c2.67 0 2.9862499999999996 0.00875 4.04 0.057499999999999996 0.9750000000000001 0.043750000000000004 1.505 0.20750000000000002 1.8575 0.34375 0.46625 0.18125 0.8 0.39875 1.1500000000000001 0.74875s0.56625 0.6825000000000001 0.7474999999999999 1.1500000000000001c0.1375 0.35125000000000006 0.3 0.88125 0.34375 1.8562500000000002 0.04875 1.05375 0.05875 1.37 0.05875 4.03875s-0.01 2.9862499999999996 -0.05875 4.04c-0.043750000000000004 0.9750000000000001 -0.20750000000000002 1.5037500000000001 -0.34375 1.8562500000000002a3.125 3.125 0 0 1 -0.74875 1.1487500000000002c-0.35000000000000003 0.35000000000000003 -0.6825000000000001 0.56625 -1.1500000000000001 0.7474999999999999 -0.35000000000000003 0.1375 -0.8799999999999999 0.3 -1.8562500000000002 0.34500000000000003 -1.05375 0.0475 -1.37 0.05875 -4.04 0.05875s-2.9875000000000003 -0.01125 -4.04125 -0.05875c-0.9750000000000001 -0.045 -1.5037500000000001 -0.20750000000000002 -1.8562500000000002 -0.34500000000000003a3.125 3.125 0 0 1 -1.1500000000000001 -0.7474999999999999 3.125 3.125 0 0 1 -0.75 -1.1500000000000001c-0.13625 -0.35125000000000006 -0.3 -0.88125 -0.34375 -1.8562500000000002 -0.0475 -1.05375 -0.057499999999999996 -1.37 -0.057499999999999996 -4.04125s0.01 -2.985 0.057499999999999996 -4.03875c0.045 -0.9750000000000001 0.20750000000000002 -1.505 0.34500000000000003 -1.8575 0.18125 -0.46625 0.39875 -0.8 0.74875 -1.1500000000000001s0.6825000000000001 -0.56625 1.1500000000000001 -0.7474999999999999c0.3525 -0.1375 0.88125 -0.3 1.8562500000000002 -0.34500000000000003 0.9225 -0.0425 1.28 -0.05499999999999999 3.1437500000000003 -0.056249999999999994zm6.235 1.6600000000000001a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0 -2.4m-5.3374999999999995 1.4025a5.13625 5.13625 0 1 0 0 10.27125 5.13625 5.13625 0 0 0 0 -10.27125m0 1.80125a3.3337499999999998 3.3337499999999998 0 1 1 0 6.6674999999999995 3.3337499999999998 3.3337499999999998 0 0 1 0 -6.6674999999999995" strokeWidth="1" fill="#3B075F"></path></svg>
                      </a>
                    </li>
                  </ul>
                </motion.div>

              </motion.div>




              <div className="flex w-full flex-col gap-8 md:flex-row md:justify-between md:gap-0 lg:w-2/3 xl:w-7/12">
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
                  className="animate_top"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                    User Links
                  </h4>

                  <ul className='text-sm'>
                    <li className='text-[#627693]'>
                      <Link
                        href="about"
                        className="mb-3 inline-block hover:text-[#3b075f]"
                      >
                        About Our Platform
                      </Link>
                    </li>
                    <li className='text-[#627693]'>
                      <Link
                        href="growth-and-operations"
                        className="mb-3 inline-block hover:text-[#3b075f]"
                      >
                        Growth & Operations Intern
                      </Link>
                    </li>
                    <li className='text-[#627693]'>
                      <Link
                        href="refund-returns"
                        className="mb-3 inline-block hover:text-[#3b075f]"
                      >
                        Refund Policy
                      </Link>
                    </li>
                    <li className='text-[#627693]'>
                      <Link
                        href="terms-and-conditions"
                        className="mb-3 inline-block hover:text-[#3b075f]"
                      >
                        Terms & Conditions
                      </Link>
                    </li>
                    <li className='text-[#627693]'>
                      <Link
                        href="privacy-policy"
                        className="mb-3 inline-block hover:text-[#3b075f]"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </motion.div>

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
                  className="animate_top"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                    Subscribe Now!
                  </h4>
                  <p className="mb-4 w-[90%]">
                    Don’t miss out on our future updates!

                    Get subscribed now!
                  </p>

                  <form action="#">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Email address"
                        className="w-full rounded-full border border-stroke px-6 py-3 shadow-solid-11 focus:border-[#3b075f] focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-[#3b075f]"
                      />

                      <button
                        aria-label="signup to newsletter"
                        className="absolute right-0 p-4"
                      >
                        <svg
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
                        </svg>
                      </button>
                    </div>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
          {/* <!-- Footer Top --> */}

          {/* <!-- Footer Bottom --> */}
          <div className="
            flex flex-col flex-wrap 
            items-center justify-center 
            gap-5 border-t border-stroke py-2
            dark:border-strokedark lg:flex-row lg:justify-between lg:gap-0
            bg-[#1e0430]
            text-white
            ">
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
              className="animate_top"
            >
            </motion.div>

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
              className="animate_top m-auto"
            >
              <p>
                &copy; {new Date().getFullYear()} ©2023 - 2024. LearnNex. All Rights Reserved.
              </p>
            </motion.div>
          </div>
          {/* <!-- Footer Bottom --> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;

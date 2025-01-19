"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from '../ui/textarea';
import Link from 'next/link';

const CheckoutForm = () => {
  /**
   * Source: https://www.joshwcomeau.com/react/the-perils-of-rehydration/
   * Reason: To fix rehydration error
   */
  const [hasMounted, setHasMounted] = React.useState(false);
  const [showNote, setShowNote] = useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  const handleNoteChange = () => {
    setShowNote(!showNote)
  }

  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <section id="support" className="px-4 md:px-8 2xl:px-0">
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
          <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <Image
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="./images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
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
              className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border md:w-3/5 lg:w-3/4 xl:p-15"
            >
              <h2 className="mb-15 text-3xl font-semibold text-[#3b065f]  xl:text-sectiontitle2">
                Checkout
              </h2>

              <form
                action="https://formbold.com/s/unique_form_id"
                method="POST"
              >
                <div className="mb-7.5 flex flex-col gap-7.5 lg:justify-between lg:gap-14">
                  <div className='flex flex-col gap-5'>
                    <div className='text-2xl'>1. Contact information</div>
                    <div className='text-sm'>We'll use this email to send you details and updates about your order.</div>
                    <input
                      type="email"
                      placeholder="Email address"
                      className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-[#3b065f] focus-visible:outline-none  lg:w-1/2"
                    />
                  </div>
                  <div className='text-2xl'>2. Billing address</div>
                  <div className='text-sm'>Enter the billing address that matches your payment method.</div>
                  <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                    <input
                      type="text"
                      placeholder="First name"
                      className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-[#3b065f] focus-visible:outline-none  lg:w-1/2"
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-[#3b065f] focus-visible:outline-none  lg:w-1/2"
                    />
                  </div>
                </div>

                <div className="mb-12.5 flex flex-col gap-7.5lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    placeholder="Address"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-[#3b065f] focus-visible:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Apartment"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-[#3b065f] focus-visible:outline-none"
                  />
                </div>

                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    placeholder="City"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-[#3b065f] focus-visible:outline-none  lg:w-1/2"
                  />
                  <input
                    type="text"
                    placeholder="State"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-[#3b065f] focus-visible:outline-none  lg:w-1/2"
                  />
                </div>

                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    placeholder="PIN Code"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-[#3b065f] focus-visible:outline-none  lg:w-1/2"
                  />
                  <input
                    type="text"
                    placeholder="Phone(optional)"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-[#3b065f] focus-visible:outline-none  lg:w-1/2"
                  />
                </div>

                <div className='text-2xl mb-7.5'>3. Payment options</div>
                <div className='text-lg mb-7.5 text-gray-600'>PhonePe Payment Solutions</div>

                <div className="mb-5 gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <div className="items-top flex space-x-2">
                    <Checkbox id="terms1" onCheckedChange={handleNoteChange} />
                    <div className="grid w-full gap-1.5">
                      <label
                        htmlFor="terms1"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-5"
                      >
                        Add a note to your order
                      </label>
                      {showNote && <Textarea />}
                    </div>
                  </div>
                </div>
                <div className='mb-5'>
                  By proceeding with your purchase you agree to our &nbsp;
                  <span className='underline underline-offset-1 cursor-pointer text-[#ff006a]'>
                    <Link href='terms-and-conditions'>Terms and Conditions</Link></span> and &nbsp;
                  <span className='underline underline-offset-1 cursor-pointer text-[#ff006a]'
                  ><Link href='privacy-policy'>Privacy Policy</Link>
                  </span>
                </div>
                <div className='flex items-center justify-between'>
                  <Link href='cart'>
                    <div className='underline underline-offset-1 text-[#ff006a]'>Return to Cart</div>
                  </Link>
                  <button
                    aria-label="send message"
                    className="inline-flex items-center gap-2.5 rounded-full bg-[#ff006a] px-6 py-3 font-medium text-white duration-300 ease-in-out hover:opacity-80"
                  >
                    Place Order
                  </button>
                </div>

              </form>
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
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
            >
              <h2 className="mb-12.5 text-3xl font-semibold text-[#3b065f]  xl:text-sectiontitle2">
                Get In Touch With <span className='bg-gradient-to-r from-purple-600 via-red-500 to-indigo-400 text-transparent bg-clip-text'>LearnNex</span>
              </h2>

              <div className="5 mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-[#3b065f]">
                  Our Loaction
                </h3>
                <p>Mathchowmuhani, opposite to ISKON, 2nd Floor, Agartala, Tripura (West)</p>
              </div>
              <div className="5 mb-7">
                <h3 className="mb-4 text-metatitle3 font-mediumtext-[#3b065f]">
                  Email Address
                </h3>
                <p>
                  <a href="#">operations@learnnex.in</a>
                </p>
              </div>
              <div>
                <h4 className="mb-4 text-metatitle3 font-medium text-[#3b065f] dark:text-white">
                  Phone Number
                </h4>
                <p>
                  <a href="#">+91 9366-154-935</a>
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default CheckoutForm;

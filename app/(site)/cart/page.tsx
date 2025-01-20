"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCart } from '../../../state/CartContext';
import { CourseData } from '../../../types/feature';
import { formatUSD, totalCourse } from '../../../constants';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from '../../../components/ui/input';
import { Button } from '../../../components/ui/button';

const Cart = () => {
  const { getCartCount, cart, removeFromCart } = useCart();

  const getSelectedCourse = () => {
    const selectedCourseData: CourseData[] = [];

    // Create a map of course ID to course data for fast lookup
    const courseMap = new Map<string, CourseData>();
    for (const course of totalCourse) {
      courseMap.set(course.id, course);
    }

    for (const data of cart) {
      if (courseMap.has(data)) {
        const course = courseMap.get(data)!;
        selectedCourseData.push({
          id: course.id,
          icon: course.icon,
          title: course.title,
          description: course.description,
          originalPrice: course.originalPrice,
          salePrice: course.salePrice
        });
      }
    }

    return selectedCourseData;
  };

  const totalSalePrice = getSelectedCourse()
    .map(course => {
      const cleanedPrice = course.salePrice.replace(/,/g, '');
      const numericPrice = parseFloat(cleanedPrice);
      return isNaN(numericPrice) ? 0 : numericPrice; // Return 0 for invalid numbers
    })
    .reduce((sum, salePrice) => sum + salePrice, 0);

  const handleCourseDelete = (id: string) => {
    removeFromCart(id);
  }

  return (
    <section className="pb-12.5 pt-32.5 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
      <div className="relative z-1 mx-auto max-w-c-1016 px-7.5 pb-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
        <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>

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
          className="animate_top rounded-lg bg-white px-7.5 pt-7.5 shadow-solid-8  xl:px-15 xl:pt-15"
        >
          <h2 className="mb-15 text-center text-3xl font-semibold text-black  xl:text-sectiontitle2">
            Selected Course List
          </h2>
          <div className="flex flex-col">
            <Table suppressHydrationWarning className='mb-20'>
              <TableHeader >
                <TableRow >
                  <TableHead>Product</TableHead>
                  <TableHead>	Name</TableHead>
                  <TableHead>	Unit Price</TableHead>
                  <TableHead className="text-right">Quantity</TableHead>
                  <TableHead className="text-right" >Subtotal</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {getSelectedCourse().map((course) => (
                  <TableRow key={course.id}>
                    <TableCell className="font-medium">
                      <Image
                        src={course.icon}
                        width={640}
                        height={427}
                        className='aspect-[352/235]'
                        alt='certificate'
                      />
                    </TableCell>
                    <TableCell>{course.title}</TableCell>
                    <TableCell>{course.salePrice}</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell className="text-right">{course.salePrice}</TableCell>
                    <TableCell >
                      <div className='cursor-pointer' onClick={() => handleCourseDelete(course.id)}>
                        <svg fill="#000000" version="1.1" id="Capa_1"
                          width="18px" height="18px" viewBox="0 0 482.428 482.429"
                        >
                          <g>
                            <g>
                              <path d="M381.163,57.799h-75.094C302.323,25.316,274.686,0,241.214,0c-33.471,0-61.104,25.315-64.85,57.799h-75.098
			c-30.39,0-55.111,24.728-55.111,55.117v2.828c0,23.223,14.46,43.1,34.83,51.199v260.369c0,30.39,24.724,55.117,55.112,55.117
			h210.236c30.389,0,55.111-24.729,55.111-55.117V166.944c20.369-8.1,34.83-27.977,34.83-51.199v-2.828
			C436.274,82.527,411.551,57.799,381.163,57.799z M241.214,26.139c19.037,0,34.927,13.645,38.443,31.66h-76.879
			C206.293,39.783,222.184,26.139,241.214,26.139z M375.305,427.312c0,15.978-13,28.979-28.973,28.979H136.096
			c-15.973,0-28.973-13.002-28.973-28.979V170.861h268.182V427.312z M410.135,115.744c0,15.978-13,28.979-28.973,28.979H101.266
			c-15.973,0-28.973-13.001-28.973-28.979v-2.828c0-15.978,13-28.979,28.973-28.979h279.897c15.973,0,28.973,13.001,28.973,28.979
			V115.744z"/>
                              <path d="M171.144,422.863c7.218,0,13.069-5.853,13.069-13.068V262.641c0-7.216-5.852-13.07-13.069-13.07
			c-7.217,0-13.069,5.854-13.069,13.07v147.154C158.074,417.012,163.926,422.863,171.144,422.863z"/>
                              <path d="M241.214,422.863c7.218,0,13.07-5.853,13.07-13.068V262.641c0-7.216-5.854-13.07-13.07-13.07
			c-7.217,0-13.069,5.854-13.069,13.07v147.154C228.145,417.012,233.996,422.863,241.214,422.863z"/>
                              <path d="M311.284,422.863c7.217,0,13.068-5.853,13.068-13.068V262.641c0-7.216-5.852-13.07-13.068-13.07
			c-7.219,0-13.07,5.854-13.07,13.07v147.154C298.213,417.012,304.067,422.863,311.284,422.863z"/>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={5}><Input placeholder='Coupon Code' /></TableCell>
                  <TableCell>
                    <Button className='bg-[#ff006a] hover:opacity-80 hover:bg-[#ff006a]'>Apply Coupon</Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={5}>Total</TableCell>
                  <TableCell className="text-right">{formatUSD(totalSalePrice)}</TableCell>
                </TableRow>
                <TableRow className='text-center' suppressHydrationWarning>
                  <TableCell colSpan={6}>
                    <Link href='checkout'>
                      <Button className='bg-[#ff006a] hover:opacity-80 hover:bg-[#ff006a]'>Proceed To Checkout</Button>
                    </Link>
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Cart
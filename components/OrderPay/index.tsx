"use client"
import React from 'react'
import { motion } from "framer-motion";
import Image from "next/image";
import { useCart } from '../../state/CartContext';
import { CourseData } from '../../types/feature';
import { formatUSD, totalCourse } from '../../constants';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';


const OrderPay = () => {
  const { cart } = useCart();
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

  return (
    <section id="support" className="px-4 md:px-8 2xl:px-0">
      <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
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
          className="animate_top w-full xl:pt-15"
        >
          <h2 className="mb-12.5 text-3xl font-semibold text-[#3b065f]  xl:text-sectiontitle2">
            Payment Details
          </h2>

          <div className="grid gap-4 py-4 max-h-[90%] overflow-y-scroll">
            <Table suppressHydrationWarning className='mb-20'>
              <TableHeader >
                <TableRow >
                  <TableHead>Order Number</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>	Total</TableHead>
                  <TableHead>	Payment Method</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow >
                  <TableCell>6232</TableCell>
                  <TableCell>20/01/2025</TableCell>
                  <TableCell>{formatUSD(totalSalePrice)}</TableCell>
                  <TableCell>PhonePe Payment Solutions</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div>Thank you. Please wait while we confirm your payment.</div>
          </div>
        </motion.div>
      </div>
      <AlertDialog defaultOpen={true}>
        <AlertDialogContent className='z-99999'>
          <AlertDialogHeader>
            <AlertDialogTitle className='mb-10 border-b pb-5'>LEARNNEX {formatUSD(totalSalePrice)}</AlertDialogTitle>
            <AlertDialogDescription className=''>
              <RadioGroup defaultValue="comfortable">
                <div className="flex items-start space-x-2 justify-between">
                  <Label htmlFor="r1">
                    <div className='mb-1 flex gap-2 items-start'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px" height="20px" ><path fill="#424242" d="M4,4h6v6H4V4M20,4v6H14V4h6M14,15h2V13H14V11h2v2h2V11h2v2H18v2h2v3H18v2H16V18H13v2H11V16h3V15m2,0v3h2V15H16M4,20V14h6v6H4M6,6V8H8V6H6M16,6V8h2V6H16M6,16v2H8V16H6M4,11H6v2H4V11m5,0h4v4H11V13H9V11m2-5h2v4H11V6M2,2V6H0V2A2,2,0,0,1,2,0H6V2H2M22,0a2,2,0,0,1,2,2V6H22V2H18V0h4M2,18v4H6v2H2a2,2,0,0,1-2-2V18H2m20,4V18h2v4a2,2,0,0,1-2,2H18V22Z"></path></svg>
                      <div className='flex flex-col gap-2'>
                        <div>Show QR Code</div>
                        <div className='text-xs'>Scan with any UPI app</div>
                      </div>
                    </div>
                    <br />
                  </Label>
                  <RadioGroupItem value="default" id="r1" />
                </div>
                <div className='flex flex-col items-center justify-between gap-5 border-b'>
                  <div>111</div>
                  <div className='text-xs'>Checking payment status: 9:04</div>
                  <div className='flex items-center justify-between gap-2 mb-5'>
                    <Image src='/images/payment/PHONEPE_WEB.png' width={24} height={24} alt="title" className='aspect-[1/1]' />
                    <Image src='/images/payment/GPAY_WEB.png' width={24} height={24} alt="title" className='aspect-[1/1]' />
                    <Image src='/images/payment/PYTM_WEB.png' width={24} height={24} alt="title" className='aspect-[1/1]' />
                    <Image src='/images/payment/BHIM_WEB.png' width={24} height={24} alt="title" className='aspect-[1/1]' />
                    <div>and more</div>
                  </div>
                </div>

                <div className="flex items-start space-x-2 justify-between border-b py-2">
                  <Label htmlFor="r2">
                    <div className='mb-1 flex gap-2 items-start'>
                      <Image src='/images/payment/outline_alternate_email.png' width={24} height={24} alt="title" className='aspect-[1/1]' />
                      <div className='flex flex-col gap-2'>
                        <div className='mb-1'>UPI ID</div>
                        <div className='text-xs'>PhonePe,Gpay,Paytm,BHIM & more</div>
                      </div>
                    </div>
                  </Label>
                  <RadioGroupItem value="upi" id="r2" />
                </div>


                <div className="flex items-start space-x-2 justify-between border-b py-2">
                  <Label htmlFor="r3">
                    <div className='mb-1 flex gap-2 items-start'>
                      <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M18 0H2C0.89 0 0.00999999 0.89 0.00999999 2L0 14C0 15.11 0.89 16 2 16H18C19.11 16 20 15.11 20 14V2C20 0.89 19.11 0 18 0ZM17 14H3C2.45 14 2 13.55 2 13V8H18V13C18 13.55 17.55 14 17 14ZM18 4H2V3C2 2.45 2.45 2 3 2H17C17.55 2 18 2.45 18 3V4Z" fill="#424242"></path></svg>
                      <div className='flex flex-col gap-2'>
                        <div className='mb-1'>Card</div>
                        <div className='text-xs'>Visa, Mastercard, Rupay & more</div>
                      </div>
                    </div>
                  </Label>
                  <RadioGroupItem value="card" id="r3" />
                </div>
                <div className="flex items-start space-x-2 justify-between border-b py-2">
                  <Label htmlFor="r4">
                    <div className='mb-1 flex gap-2 items-start'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" ><path d="M20.24,9.13H3.76c-.33,0-.62-.21-.72-.53-.1-.31,.02-.66,.29-.84L11.58,2.13c.25-.17,.59-.17,.85,0l8.24,5.62c.27,.19,.39,.53,.29,.84-.1,.31-.39,.53-.72,.53Zm-14.05-1.5h11.62l-5.81-3.97-5.81,3.97Z"></path><path d="M17.48,18.2l-.02-7.63h.67c.46,0,.83,.37,.83,.83l.02,7.63h-.67c-.46,0-.83-.37-.83-.83Z"></path><path d="M14.8,19.03l.02-7.63c0-.46-.37-.83-.83-.83h-.67l-.02,7.63c0,.46,.37,.83,.83,.83h.67Z" ></path><path d="M9.15,19.03l-.02-7.63c0-.46,.37-.83,.83-.83h.67l.02,7.63c0,.46-.37,.83-.83,.83h-.67Z" ></path><path d="M4.98,19.03l-.02-7.63c0-.46,.37-.83,.83-.83h.67l.02,7.63c0,.46-.37,.83-.83,.83h-.67Z" ></path><path d="M20.17,22H3v-.67c0-.46,.37-.83,.83-.83H21v.67c0,.46-.37,.83-.83,.83Z" ></path></svg>
                      <div className='flex flex-col gap-2'>
                        <div className='mb-1'>Net Banking</div>
                        <div className='text-xs'>Choose your bank to complete payment</div>
                      </div>
                    </div>
                  </Label>
                  <RadioGroupItem value="bank" id="r4" />
                </div>
              </RadioGroup>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className='flex items-center justify-center'>
            Powered By
            <Image src='/images/payment/phonepe_horizontal.png' width={56} height={15} alt='phonepe_horizontal' />
          </div>
          <AlertDialogAction className='w-full bg-[#ff006a] text-white hover:opacity-80 hover:bg-[#ff006a]'>Pay {formatUSD(totalSalePrice)}</AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  )
}

export default OrderPay
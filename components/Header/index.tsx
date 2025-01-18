"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";
import { useCart } from '../../state/CartContext'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import selfPacedCourseData from '../Features/selfPacedCourseData';
import metorLedCourseData from '../Features/metorLedCourseData';
import professionalCourseData from '../Features/professionalCourseData';
import proPicksData from '../Features/proPicksData';
import { CourseData } from '../../types/feature';
import homePageCourseData from '../Features/homePageCourseData';

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const pathUrl = usePathname()
  const { getCartCount, cart, removeFromCart } = useCart();
  const [isMounted, setIsMounted] = useState(false);
  const [localStorageData, setLocalStorageData] = useState<string[]>([]);
  const [count, setCount] = useState(0);

  const totalCourse: CourseData[] = [
    ...homePageCourseData,
    ...selfPacedCourseData,
    ...metorLedCourseData,
    ...professionalCourseData,
    ...proPicksData
  ];
  // const localStorageDataSet = new Set(localStorageData);

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


  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };


  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);

    setIsMounted(true);

    if (typeof window !== "undefined" && localStorage) {
      let cart = localStorage.getItem('shoppingCart');
      const cartArray: string[] = cart ? JSON.parse(cart) : [];  // Type 
      setLocalStorageData(cartArray)
      if (cartArray) {
        setCount(cartArray.length);  // Update state with cart from localStorage
      }
    }

    return () => {
      setCount(0)
    }

  }, [count]);


  if (!isMounted) {
    // Optionally return null or a loading spinner to avoid SSR mismatch
    return null;
  }

  const shoppingCart = () => {
    return (
      <div className="mt-7 flex items-center gap-6 xl:mt-0 cursor-pointer relative">
        <svg fill="none" height="24" viewBox="0 0 16 16" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="#212121"><path d="m2.5 2c-.27614 0-.5.22386-.5.5s.22386.5.5.5h.2457c.22324 0 .41943.14799.48076.36264l1.58556 5.54944c.18398.64395.77256 1.08792 1.44228 1.08792h4.5687c.6133 0 1.1649-.37343 1.3927-.94291l1.4743-3.6857c.2627-.65686-.2211-1.37139-.9285-1.37139h-8.31292l-.2606-.91208c-.18398-.64395-.77256-1.08792-1.44228-1.08792z" /><path d="m6.5 14c.82843 0 1.5-.6716 1.5-1.5s-.67157-1.5-1.5-1.5-1.5.6716-1.5 1.5.67157 1.5 1.5 1.5z" /><path d="m10.5 14c.8284 0 1.5-.6716 1.5-1.5s-.6716-1.5-1.5-1.5c-.82843 0-1.5.6716-1.5 1.5s.67157 1.5 1.5 1.5z" /></g></svg>
        <div className='
        bg-[#ff006a] text-white w-4 h-4 rounded-full
        flex items-center justify-center
        text-[10px]
        absolute -top-1 -right-1'>{getCartCount()}</div>
      </div>
    )
  }

  const handleCourseDelete = (id: string) => {
    removeFromCart(id);
    setLocalStorageData(localStorageData)
  }

  return (
    <header
      className={`fixed left-0 top-0 z-99999 w-full py-7 ${stickyMenu
        ? "bg-white !py-8 shadow transition duration-100 dark:bg-black"
        : ""
        }`}
    >
      <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
        <div className="flex w-full items-center justify-between xl:w-1/4">
          <a href="/">
            <Image
              src="/images/logo/LearnNex-logo-red-1.png"
              alt="logo"
              width={119.03}
              height={30}
              className="w-full"
            />
          </a>

          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-label="hamburger Toggler"
            className="block xl:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="absolute right-0 block h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-[0] duration-200 ease-in-out  ${!navigationOpen ? "!w-full delay-300" : "w-0"
                    }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out  ${!navigationOpen ? "delay-400 !w-full" : "w-0"
                    }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out  ${!navigationOpen ? "!w-full delay-500" : "w-0"
                    }`}
                ></span>
              </span>
              <span className="du-block absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out  ${!navigationOpen ? "!h-0 delay-[0]" : "h-full"
                    }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out  ${!navigationOpen ? "!h-0 delay-200" : "h-0.5"
                    }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}
        </div>

        {/* Nav Menu Start   */}
        <div
          className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${navigationOpen &&
            "navbar !visible mt-4 h-auto max-h-[400px] rounded-md bg-white p-7.5 shadow-solid-5 dark:bg-blacksection xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent"
            }`}
        >
          <nav>
            <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10 ">
              {menuData.map((menuItem, key) => (
                <li key={key} className={menuItem.submenu && "group relative"}>
                  {menuItem.submenu ? (
                    <>
                      <button
                        onClick={() => setDropdownToggler(!dropdownToggler)}
                        className="flex cursor-pointer items-center justify-between gap-3 "
                      >
                        {menuItem.title}
                        <span>
                          <svg
                            className="h-3 w-3 cursor-pointer fill-waterloo y"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                          </svg>
                        </span>
                      </button>

                      <ul
                        className={`dropdown ${dropdownToggler ? "flex" : ""}`}
                      >
                        {menuItem.submenu.map((item, key) => (
                          <li key={key} className="hover:text-primary">
                            <Link href={item.path || "#"}>{item.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={`${menuItem.path}`}
                      className={
                        pathUrl === menuItem.path
                          ? "text-primary hover:text-primary"
                          : "hover:text-primary"
                      }
                    >
                      {menuItem.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost">{shoppingCart()}</Button>
            </SheetTrigger>
            <SheetContent className='z-99999'>
              <div className="grid gap-4 py-4 max-h-[90%] overflow-y-scroll">
                {getSelectedCourse().length > 0 && getSelectedCourse().map(course => {
                  return <div className="grid grid-cols-2 items-start border-b pb-6" key={course.id}>
                    <Image src={course.icon} width={140} height={86} alt="title" className='aspect-[70/43]' priority={false} />
                    <div>
                      <div className='text-sm mb-5'>{course.title}</div>
                      <div className='flex gap-6 text-sm'>
                        1 * ₹{course.salePrice}
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

                      </div>

                    </div>
                  </div>
                })}

              </div>
              {getSelectedCourse().length > 0 ? <>
                <div className='text-lg'>Subtotal: ₹{totalSalePrice}</div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button type="button">View Cart</Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button type="submit">Checkout</Button>
                  </SheetClose>
                </SheetFooter>
              </> : <div>No products in the cart.</div>}

            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;

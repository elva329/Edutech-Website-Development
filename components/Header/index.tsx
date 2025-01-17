"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";
import { useCart } from '../../state/CartContext'

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const pathUrl = usePathname()
  // const { getCartCount } = useCart();

  // const getFromLocalStorage = (key: string) => {
  //   if (!key || typeof window === 'undefined') {
  //     return []
  //   }
  //   return localStorage.getItem(key)
  // }

  // const storedCart = getFromLocalStorage('shoppingCart') || [];

  // console.log('storedCart', storedCart)

  // const storedCart = localStorage.getItem('shoppingCart');
  const [count, setCount] = useState(0)

  // console.log('count', getCartCount())

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

    let cart = localStorage.getItem('shoppingCart');
    const cartArray: string[] = cart ? JSON.parse(cart) : [];  // Type assertion to array

    if (cartArray) {
      setCount(cartArray.length);  // Update state with cart from localStorage
    }

    return () => {
      setCount(0)
    }

  }, [count]);

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

          <div className="mt-7 flex items-center gap-6 xl:mt-0 cursor-pointer relative">
            <svg fill="none" height="24" viewBox="0 0 16 16" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="#212121"><path d="m2.5 2c-.27614 0-.5.22386-.5.5s.22386.5.5.5h.2457c.22324 0 .41943.14799.48076.36264l1.58556 5.54944c.18398.64395.77256 1.08792 1.44228 1.08792h4.5687c.6133 0 1.1649-.37343 1.3927-.94291l1.4743-3.6857c.2627-.65686-.2211-1.37139-.9285-1.37139h-8.31292l-.2606-.91208c-.18398-.64395-.77256-1.08792-1.44228-1.08792z" /><path d="m6.5 14c.82843 0 1.5-.6716 1.5-1.5s-.67157-1.5-1.5-1.5-1.5.6716-1.5 1.5.67157 1.5 1.5 1.5z" /><path d="m10.5 14c.8284 0 1.5-.6716 1.5-1.5s-.6716-1.5-1.5-1.5c-.82843 0-1.5.6716-1.5 1.5s.67157 1.5 1.5 1.5z" /></g></svg>
            <div className='
              bg-[#ff006a] text-white w-4 h-4 rounded-full
              flex items-center justify-center
              text-xs
              absolute -top-1 -right-1
              '>{count}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

// w-full delay-300

export default Header;

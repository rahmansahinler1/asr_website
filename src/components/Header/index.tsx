"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  const handleScrollTo = (path: string) => {
    if (path.startsWith('/#')) {
      const element = document.getElementById(path.substring(2));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setNavbarOpen(false);
      }
    }
  };

  const usePathName = usePathname();

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center ${
          sticky
            ? "fixed z-[9999] bg-primary shadow-sticky backdrop-blur-md transition"
            : "absolute bg-transparent"
        }`}
      >
        {/* Full width container */}
        <div className="w-full">
          <div className="flex items-center w-full px-4 lg:px-8">
            {/* Left Section: Logo + Navigation */}
            <div className="flex items-center flex-1">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link
                  href="/"
                  className={`header-logo block ${
                    sticky ? "py-6 lg:py-4" : "py-8"
                  } `}
                >
                  <div className="text-xl font-bold font-mono tracking-tight md:text-2xl">
                    <span className="text-[#FFD66B]">ai</span>
                    <span className="text-white">searchrefs</span>
                  </div>
                </Link>
              </div>

              {/* Navigation - Next to Logo (Desktop) */}
              <nav className="hidden lg:block lg:ml-12">
                <ul className="flex lg:space-x-8">
                  {menuData.map((menuItem, index) => (
                    <li key={index} className="group relative">
                      <a
                        href={menuItem.path}
                        onClick={(e) => {
                          if (menuItem.path?.startsWith('/#')) {
                            e.preventDefault();
                            handleScrollTo(menuItem.path);
                          }
                        }}
                        className="text-base text-white hover:text-[#FFD66B] transition-colors duration-300 py-6 font-helvetica"
                      >
                        {menuItem.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Right Section: Take A Wish Button + Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Take A Wish Button */}
              <Link
                href="/contact"
                className="hidden lg:inline-flex bg-[#FFD66B] text-black px-6 py-2 rounded-lg font-medium hover:bg-[#FFD66B]/90 transition-colors duration-300 font-helvetica"
              >
                Take A Wish
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="block rounded-lg px-3 py-[6px] ring-white focus:ring-2 lg:hidden"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 ${
                    navbarOpen ? " top-[7px] rotate-45" : " "
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 ${
                    navbarOpen ? "opacity-0 " : " "
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 ${
                    navbarOpen ? " top-[-8px] -rotate-45" : " "
                  }`}
                />
              </button>

              {/* Mobile Navigation */}
              <nav
                id="navbarCollapse"
                className={`navbar absolute right-4 top-full z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-primary px-6 py-4 duration-300 lg:hidden ${
                  navbarOpen
                    ? "visibility opacity-100"
                    : "invisible opacity-0"
                }`}
              >
                <ul className="block space-y-3">
                  {menuData.map((menuItem, index) => (
                    <li key={index}>
                      <a
                        href={menuItem.path}
                        onClick={(e) => {
                          if (menuItem.path?.startsWith('/#')) {
                            e.preventDefault();
                            handleScrollTo(menuItem.path);
                          }
                        }}
                        className="block py-2 text-base text-white hover:text-[#FFD66B] transition-colors duration-300 font-helvetica"
                      >
                        {menuItem.title}
                      </a>
                    </li>
                  ))}
                  {/* Take A Wish Button for Mobile */}
                  <li className="pt-3 border-t border-white/20">
                    <Link
                      href="/contact"
                      className="block w-full bg-[#FFD66B] text-black px-4 py-3 rounded-lg font-medium text-center hover:bg-[#FFD66B]/90 transition-colors duration-300 font-helvetica"
                    >
                      Take A Wish
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
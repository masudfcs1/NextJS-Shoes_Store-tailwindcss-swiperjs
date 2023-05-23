/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Menu from "./Menu";

import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import MenuMobile from "./MenuMobile";

const Header = () => {
  const [mobileMenu, setmobileMenu] = useState(false);
  const [show, setshow] = useState("translate-y-0");
  const [showCatmenu, setshowCatmenu] = useState(false);
  // const [mobileMenu, setmobileMenu] = useState(initialState)
  const [lastscrolly, setlastscrolly] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastscrolly && !mobileMenu) {
        setshow("-translate-y-[80px]");
      } else {
        setshow("shadow-sm");
      }
    } else {
      setshow("translate-y-0");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.addEventListener("scroll", controlNavbar);
    };
  }, [lastscrolly]);

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className="h-[60px] flex justify-between items-center ">
        <Link href="/">
          <img src="/logo.svg" className=" w-[40px] md:w-[60px]" alt="logo" />
        </Link>

        <Menu showCatmenu={showCatmenu} setshowCatmenu={setshowCatmenu} />

        {mobileMenu && (
          <MenuMobile
            showCatmenu={showCatmenu}
            setshowCatmenu={setshowCatmenu}
            setmobileMenu={setmobileMenu}
          />
        )}

        <div className="flex items-center gap-2 text-black">
          {/* Icon frvt */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative ">
            <IoMdHeartEmpty className=" text-[19px] md:text-[24px]" />
            <div className=" h-[15px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px] ">
              25
            </div>
          </div>
          {/* icon cart */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative ">
            <BsCart className=" text-[15px] md:text-[20px]" />
            <div className=" h-[15px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px] ">
              5
            </div>
          </div>
          {/* icons end */}
          {/* Mobile icon start */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2 ">
            {mobileMenu ? (
              <VscChromeClose
                className=" text-[16px] "
                onClick={() => setmobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className=" text-[20px] "
                onClick={() => setmobileMenu(true)}
              />
            )}
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;

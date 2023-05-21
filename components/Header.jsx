/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Menu from "./Menu";

const Header = () => {
  const [mobileMenu, setmobileMenu] = useState(false);
  const [show, setshow] = useState("translate-y-0");
  const [showCatmenu, setshowCatmenu] = useState(false);
  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper>
        <Link href="/">
          <img src="/logo.svg" className=" w-[40px] md:w-[60px]" alt="logo" />
        </Link>
        <Menu showCatmenu={showCatmenu} setshowCatmenu={setshowCatmenu} />
      </Wrapper>
    </header>
  );
};

export default Header;

import React, { useState } from "react";

const Header = () => {
  const [mobileMenu, setmobileMenu] = useState(false);
  const [show, setshow] = useState("translate-y-0");
  return (
    <header>
      <div
        className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
      >
        Header
      </div>
    </header>
  );
};

export default Header;

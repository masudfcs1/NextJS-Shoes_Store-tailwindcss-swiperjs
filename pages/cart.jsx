import React from "react";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";

const Cart = () => {
  return (
    <div className=" w-full md:py-20">
      <Wrapper>
        {/* HEADING AND PARAGRAPH START */}
        <div className=" text-center max-w-[800px] mx-auto mt-9 md:mt-0 ">
          <div className=" text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Shopping Cart
          </div>
        </div>
        {/* HEADING AND PARAGRAPH END */}
      </Wrapper>
    </div>
  );
};

export default Cart;

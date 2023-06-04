import React from "react";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import CartItem from "@/components/CartItem";

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

        {/* Cart Content start */}

        <div className=" flex flex-col lg:flex-row gap-12 py-10">
          {/* Cart Items start */}
          <div className=" flex-[2] ">
            <div className=" text-lg font-bold">Cart Item</div>
            <CartItem />
            <CartItem />
            <CartItem />
          </div>

          {/* Cart Items End */}
          {/* Summary Start */}
          <div className=" flex-[1] ">
            <div className=" text-lg font-bold">Summary</div>
          </div>
          {/* Summary END */}
        </div>
        {/* Cart Items END */}
      </Wrapper>
    </div>
  );
};

export default Cart;

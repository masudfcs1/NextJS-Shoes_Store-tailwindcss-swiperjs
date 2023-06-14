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
            <div className=" p-5 my-5 bg-black/[0.05] rounded-xl ">
              <div className="flex justify-between">
                <div className=" uppercase text-md md:text-lg font-medium text-black ">
                  subtotal
                </div>
                <div className=" text-md md:text-lg font-medium text-black">
                  $ 530.00
                </div>
              </div>
              <div className=" text-sm md:text-md py-5 text-black">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
                corporis libero, a quaerat quidem suscipit in voluptatibus
                pariatur obcaecati numquam et iste optio placeat nam
                perspiciatis exercitationem vel, incidunt beatae.
              </div>
            </div>

            <button className=" w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 ">
              {" "}
              Checkout{" "}
            </button>
          </div>
          {/* Summary END */}
        </div>
        {/* Cart Items END */}

        {/* Another one */}

        {/* 
        <div className=" flex-[2] flex flex-col items-center pb-[50px] md:-mt-14 ">
          <Image
            className="w-[300px] md:w-[400px]"
            src="/empty-cart.jpg"
            width={300}
            height={300}
          />
          <span className="text-xl font-bold">Your cart is empty</span>
          <span className="text-center mt-4">
            Looks like you have not added anything in your cart. <br /> Go ahead
            and explore top categories{" "}
          </span>

          <Link
            href="/"
            className=" py-6 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8 "
          >
            Contue Shopping
          </Link>
        </div> */}
      </Wrapper>
    </div>
  );
};

export default Cart;

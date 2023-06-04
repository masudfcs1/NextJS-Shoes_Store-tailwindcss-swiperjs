import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
const CartItem = () => {
  return (
    <div className=" flex py-5 gap-3 md:gap-5 border-b">
      <div className=" shrink-0 aspect-square w-[50px] md:w-[120px]">
        <img src="product-1.webp" />
      </div>
      {/* Imgage End */}
      <div className="w-full flex flex-col">
        <div className=" flex flex-col md:flex-row justify-between">
          {/* Product Title */}
          <div className=" text-lg md:text-lg font-semibold text-black/[0.8]">
            Jordan Retro 6 G
          </div>
          {/* Product Subtitle */}
          <div className=" text-sm md:text-md font-medium text-black/[0.5] block md:hidden ">
            Men&apos;s Golf Shoes
          </div>

          {/* Product Price */}
          <div className=" text-sm md:text-md font-bold text-black/[0.5] mt-2">
            MRP: $ 19695.00
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

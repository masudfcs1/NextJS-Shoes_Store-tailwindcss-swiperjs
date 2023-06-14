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

          {/* Product Price */}
          <div className=" flex text-sm md:text-md font-bold text-black/[0.5] mt-2">
            MRP: $ 19695.00
          </div>
        </div>{" "}
        {/* Product Subtitle */}
        <div className=" text-md font-medium text-black/[0.5] hidden md:block  ">
          Men&apos;s Golf Shoes
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className=" flex items-center gap-2 md:gap-10 text-black/[0.7] text-sm md:text-md ">
            <div className="flex items-center gap-1">
              <div className=" font-semibold ">Size:</div>

              <select className=" hover:text-black ">
                <option value="1">Uk 6</option>
                <option value="2">Uk 6</option>
                <option value="3">Uk 7</option>
                <option value="4">Uk 7.5</option>
                <option value="5">Uk 8</option>
                <option value="6">Uk 8.5</option>
                <option value="7">Uk 9</option>
                <option value="8">Uk 9.5</option>
                <option value="9">Uk 10</option>
                <option value="10">Uk 10.5</option>
                <option value="11">Uk 11</option>
                <option value="">Uk </option>
              </select>
            </div>
            <div className="flex items-center gap-1">
              <div className=" font-semibold ">Quantity:</div>

              <select className=" hover:text-black ">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="">12 </option>
              </select>
            </div>
          </div>
          <RiDeleteBin6Fill className=" cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px] " />
        </div>
      </div>
    </div>
  );
};

export default CartItem;

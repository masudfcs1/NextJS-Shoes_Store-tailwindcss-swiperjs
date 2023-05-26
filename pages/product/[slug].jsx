import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import Wrapper from "@/components/Wrapper";
import React from "react";

const ProductDetails = () => {
  return (
    <div className=" w-full md:py-20 ">
      <Wrapper>
        <div className=" flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px] ">
          <div
            className=" w-full md:w-auto flex-[1.5] max-w-[500px]
        lg:max-w-full mx-auto lg:mx-0 "
          >
            <ProductDetailsCarousel />
          </div>
          <div className=" flex-[1] py-3 ">
            {/* Product Title */}
            <div className=" text-[34px] font-semibold mb-2 ">
              Jordan Retro 6
            </div>

            {/* Prouct subtile */}
            <div className=" text-lg font-semibold mb-b ">
              Men&apos;s Golf Shoes
            </div>

            {/* product Price */}
            <div className=" text-lg font-semibold ">MRP: $119.00</div>

            <div className=" text-md font-semibold text-black/[0.5] ">
              Incl. of text
            </div>

            <div className=" text-md font-medium text-black/[0.5] mb-20  ">{`Also includes all applicable duties`}</div>

            {/* Produc Size Range Start */}

            <div className=" mb-10 ">
              <div className=" flex justify-between mb-2 ">
                <div className=" text-md font-semibold ">Select Size</div>
                <div className=" text-md font-medium text-black/[0.5] cursor-pointer ">
                  Select Guide
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;

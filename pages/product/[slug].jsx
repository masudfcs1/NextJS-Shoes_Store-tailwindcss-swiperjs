import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import Wrapper from "@/components/Wrapper";
import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";

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

            <div className=" text-md font-medium text-black/[0.5] mb-20  ">
              {`Also includes all applicable duties`}
            </div>

            {/* Produc Size Range Start */}

            <div className=" mb-10 ">
              <div className=" flex justify-between mb-2 ">
                <div className=" text-md font-semibold ">Select Size</div>
                <div className=" text-md font-medium text-black/[0.5] cursor-pointer ">
                  Select Guide
                </div>
              </div>
              {/* Heading End */}
              <div className=" grid grid-cols-3 gap-2">
                <div className=" border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer ">
                  UK 6
                </div>
                <div className=" border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer ">
                  UK 6
                </div>
                <div className=" border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer ">
                  UK 6
                </div>
                <div className=" border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer ">
                  UK 6
                </div>
                <div className=" border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer ">
                  UK 6
                </div>
                <div className=" border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer ">
                  UK 6
                </div>
                <div className=" border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer ">
                  UK 6
                </div>
                <div className=" border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer ">
                  UK 6
                </div>
                <div className=" border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer ">
                  UK 6
                </div>
                <div className=" border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer ">
                  UK 6
                </div>
                <div className=" border rounded-md text-center py-3 font-medium border-black/[0.1] cursor-not-allowed opacity-50">
                  UK 6
                </div>
              </div>
              {/* Size END */}

              {/* show error start */}
              <div className=" text-red-600 mt-1">
                Size selection is required
              </div>
              {/* show error end */}
            </div>
            {/* PRODUCT SIZE RANGE END */}
            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform mb-3 active:scale-95 hover:opacity-75">
              Add to Cart
            </button>
            {/* ADD TO Cart button End */}
            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform flex items-center justify-center gap-2 mb-3 active:scale-95 hover:opacity-75">
              Whishlist
              <IoMdHeartEmpty size={23} />
            </button>
            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className=" text-md mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, perferendis!
              </div>
              <div className=" text-md mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, perferendis!
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;

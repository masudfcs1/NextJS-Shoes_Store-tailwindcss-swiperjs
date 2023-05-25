import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import React from "react";

const Category = () => {
  return (
    <div className="w-full md:py-20 ">
      <Wrapper>
        <div className=" text-center max-w-[800px] mx-auto mt-8 md:mt-8 ">
          <div className=" text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Runner Shoes
          </div>
        </div>
      </Wrapper>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-14 px-5 md:px-0 ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>{" "}
    </div>
  );
};

export default Category;

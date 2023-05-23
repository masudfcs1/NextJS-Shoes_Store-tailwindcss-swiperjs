/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const ProductCard = () => {
  return (
    <Link
      href="/prodcut/1"
      className=" transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
    >
      <img src="/product-1.webp" alt="product image" />
      <div className=" p-4 text-black/[0.9]">
        <h2>Product Name</h2>
        <div className=" flex items-center text-black/.[0.0]">
          <p className=" mr-2 text-lg font-semibold">$20</p>
          <p className=" text-base font-medium line-through ">$25</p>
          <p className=" ml-auto text-base font-medium text-green-500">
            20% off
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

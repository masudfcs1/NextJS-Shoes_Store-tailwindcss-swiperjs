import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  return (
    <main>
      {" "}
      <HeroBanner />{" "}
      <Wrapper>
        <div className=" text-center max-w-[800px] mx-auto my-[50px] md:my-[80px] ">
          <div className=" text-[27px] font-semibold md:text=[34px]">
            {" "}
            Cushioning for Your Miles{" "}
          </div>{" "}
          <div className=" text-md md:text-sm mt-4">
            {" "}
            Experice iconic styles in remixed colorways with the lastest Air Max
            90, Air Max 97, and Lorem Ipsum is simply dummy text of the printing
            and typesetting industry.{" "}
          </div>{" "}
        </div>{" "}
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
      </Wrapper>{" "}
    </main>
  );
}

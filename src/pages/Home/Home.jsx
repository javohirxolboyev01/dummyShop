import React from "react";
import Hero from "../../components/Hero/Hero";
import Category from "../../assets/category/category1.png";
import Category2 from "../../assets/category/category2.png";
import Category3 from "../../assets/category/category3.png";
import HomeProduct from "@/components/HomeProduct/HomeProduct";
import { useProducts } from "@/api/useProducts";

const Home = () => {
  const { getProducts } = useProducts();
  const { data } = getProducts;
  console.log(data);
  return (
    <div>
      <Hero />
      <div>
        <section className="py-16 px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Browse The Range
          </h2>
          <p className="text-gray-500 mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="cursor-pointer">
              <img
                src={Category}
                alt="Dining"
                className="w-full h-[340px] object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4 text-gray-800">
                Dining
              </h3>
            </div>

            <div className="cursor-pointer">
              <img
                src={Category2}
                alt="Living"
                className="w-full h-[340px] object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4 text-gray-800">
                Living
              </h3>
            </div>

            <div className="cursor-pointer">
              <img
                src={Category3}
                alt="Bedroom"
                className="w-full h-[340px] object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4 text-gray-800">
                Bedroom
              </h3>
            </div>
          </div>
        </section>
        <HomeProduct data={data?.data?.products} />
      </div>
    </div>
  );
};

export default React.memo(Home);

import React from "react";
import ProductsItem from "./ProductsItem";

const Skeleton = ({ count }) => {
  return (
    <>
      {/* {Array(count)
        .fill()
        .map((__, inx) => ( */}
          <div>
            <div className="h-[285px] bg-gray-100 "></div>
            <div className="w-10/12 bg-gray-100 h-6 mt-2"></div>
            <div className="w-6/12 bg-gray-100 h-6 mt-2"></div>
            <div className="w-1/3 bg-gray-100 h-6 mt-2"></div>
          </div>
          {/* // ))} */}
    </>
  );
};

const Products = ({ data, loading, count }) => {
  console.log(data);

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-8 gap-3 container mx-auto">
      {loading ? (
        <Skeleton count={count} />
      ) : (
        data?.map((product) => <ProductsItem key={product.id} {...product} />)
      )}
    </div>
  );
};

export default React.memo(Products);

import { useParams } from "react-router-dom";
import { useProducts } from "@/api/useProducts";
import React, { useState } from "react";
import "antd/dist/reset.css";
import ProductImageGallery from "@/components/DetailePage/ProductImageGallery";
import ProductInfo from "@/components/DetailePage/ProductInfo";
import QuantityControl from "@/components/DetailePage/QuantityControl";
import Detail from "./Detail";

const ProductDetails = () => {
  const { id } = useParams();
  const { getProductt } = useProducts();

  const [selectedImage, setSelectedImage] = useState(0);
  const { data, isLoading, error } = getProductt(id);

  if (isLoading) return <p className="text-center py-12"></p>;
  if (error)
    return <p className="text-center text-red-500 py-12">Xatolik yuz berdi</p>;

  const product = data?.data;
  if (!product) return <p className="text-center py-12">Mahsulot topilmadi</p>;

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        <ProductImageGallery
          images={product.images}
          selectedIndex={selectedImage}
          onSelect={setSelectedImage}
        />
        <div className="flex flex-col justify-between">
          <ProductInfo product={product} />
          <div className="mt-6 space-y-3">
            <QuantityControl product={product} />
          </div>
        </div>
      </div>
      <Detail />
    </div>
  );
};

export default React.memo(ProductDetails);

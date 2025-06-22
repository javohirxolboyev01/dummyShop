import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
// import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist, wishlist } from "../redux/features/wishlistSlice";
import { addToCart } from "../redux/features/cartSlice";
import { Pagination } from "antd";
import { useProducts } from "@/api/useProducts";

const Shopping = ({ data }) => {
  const dispatch = useDispatch();
  const wishlistItem = useSelector((state) => state.wishlist.item);
  console.log(wishlistItem);

  const navigate = useNavigate()
  // const { getProduct } = useProducts();

  // const [params, setParams] = useSearchParams()
 
  // const page = params.get("page") || 1
  // const pageSize = params.get("pageSize") || 16
  

  // const { data } = getProduct({ limit: pageSize, skip: pageSize * (page - 1) });

  // const handleChangePage = (page, pageS) => {
  //   // setPage(page);
  //   if(pageS !== pageSize){
  //     params.set("pageSize", pageS)
  //     params.set("page", "1")
  //   }else{
  //     params.set("page", page)
  //   }
  //   setParams(params)
  // };


  return (
    <div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
      lg:grid-cols-4 gap-6 p-4 md:p-8"
      >
        {data?.map((item) => (
          <div
            key={item.id}
            className="relative bg-white rounded-xl overflow-hidden shadow group"
          >
            <div className="relative">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-52 object-contain transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/50  opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center space-y-2 text-white">
                <button
                  onClick={() => dispatch(addToCart(item))}
                  className="bg-white text-black text-sm px-4 py-1 rounded-full font-medium hover:bg-gray-200"
                >
                  Add to cart
                </button>
                <div className="flex gap-4 text-sm">
                  <span className="cursor-pointer hover:underline">Share</span>
                  <span className="cursor-pointer hover:underline">
                    Compare
                  </span>
                  <button className="absolute top-2 right-2 bg-white p-1 rounded-full text-gray-500 hover:text-red-600 shadow">
                    {wishlistItem.some((wish) => wish.id === item.id) ? (
                      <FaHeart
                        className="text-red-500"
                        onClick={() => dispatch(removeFromWishlist(item))}
                      />
                    ) : (
                      <CiHeart onClick={() => dispatch(wishlist(item))} />
                    )}
                  </button>
                </div>
              </div>

              {item.discountPercentage && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  -{item.discountPercentage}%
                </span>
              )}
            </div>

            <div className="p-4 bg-gray-100 h-full">
              <h2 className="text-gray-800 font-semibold text-base">
                {item.title}
              </h2>
              <p className="text-sm text-gray-500 mt-1">{item.description}</p>
              <div className="mt-2 flex items-center gap-2">
                <p className="text-lg font-bold text-gray-800">
                  {item.price.toLocaleString()}$
                </p>
                {item.oldPrice && (
                  <p className="text-sm text-gray-400 line-through">
                    {item.oldPrice.toLocaleString()} $
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div>
        <Pagination
          current={page}
          onChange={handleChangePage}
          total={data?.data?.total}
          pageSize={pageSize}
        />
      </div> */}
    </div>
  );
};

export default Shopping;

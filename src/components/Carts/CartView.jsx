import React from "react";
import CartItems from "./CartItems";
import CartTotals from "./CartTotals.jsx";
import EmptyCartWithProducts from "./EmptyCartWithProducts";

const CartView = ({ datas }) => {
  const subtotal = datas.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (datas.length === 0) {
    return (
      <div>
        <EmptyCartWithProducts />
      </div>
    );
  }

  return (
    <div
      className="
        max-w-7xl  
        mx-auto    
        px-4       
        py-10      
        grid       
        grid-cols-1 
        lg:grid-cols-3 
        gap-8      
      "
    >
      <div
        className="
          col-span-2  
        "
      >
        <div
          className="
            grid       
            grid-cols-5  
            bg-[#F9F1E7] 
            px-3 py-3    
            rounded-t     
            font-bold     
            text-gray-700
            text-sm      
          "
        >
          <p className="col-span-2 text-center">Product</p> <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>

        {datas.map((product) => (
          <CartItems key={product.id} {...product} />
        ))}
      </div>

      <div
        className="
          sticky      
          top-6        
          h-fit       
        "
      >
        <CartTotals subtotal={subtotal} />
      </div>
    </div>
  );
};

export default React.memo(CartView);

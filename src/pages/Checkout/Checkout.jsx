import React, { useState } from "react";
import { Col, Row, Typography, Divider, Button, Space, message } from "antd";
import LocationSelector from "@/components/CheckoutDetail/Location";
import UserInput from "@/components/CheckoutDetail/UserInput";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "@/components/redux/features/cartSlice";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { clearUser } from "@/components/redux/features/userSlice";
import { clearLocation } from "@/components/redux/features/cartSlice";

const BOT_TOKEN = "7969214523:AAHRqI5_8q979YIfkxFyg1GZ3lPA0OtQ5mQ";
const USER_ID = "6333791578";

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const userInfo = useSelector((state) => state.user); // ✅ to‘g‘rilandi
  const location = useSelector((state) => state.cart.location); // ✅ manzil cartSlice ichida
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (!cartItems.length) {
    return <Navigate replace to={"/cart"} />;
  }

  const handleOrder = async () => {
    if (!userInfo?.name || !userInfo?.tel) {
      return message.warning("Iltimos, foydalanuvchi ma'lumotlarini kiriting!");
    }

    let text = `📦 *Yangi Buyurtma* %0A%0A`;
    text += `👤 Ism: ${userInfo.name} %0A %0A`;
    text += `📍 Manzil: ${location || "Tanlanmagan"} %0A`;
    text += `📞 Tel: ${userInfo.tel} %0A%0A`;

    cartItems.forEach((product, i) => {
      text += `🛒 ${i + 1}) ${product.title} %0A`;
      text += `Soni: ${product.quantity} %0A`;
      text += `Narxi: ${product.price} $ %0A%0A`;
    });

    text += `🧾 *Jami:* ${total.toLocaleString()} $`;

    setLoading(true);
    try {
      await axios.get(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${USER_ID}&text=${text}&parse_mode=Markdown`
      );
      message.success("Buyurtma muvaffaqiyatli yuborildi!");
      dispatch(clearCart());
      dispatch(clearUser());
      dispatch(clearLocation());
    } catch (err) {
      message.error("Xatolik yuz berdi, qayta urinib ko‘ring!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-md shadow-md mt-10">
      <Row gutter={[32, 32]}>
        <Col xs={24} md={14}>
          <Typography.Title level={3}>Billing details</Typography.Title>
          <UserInput />
          <LocationSelector />
        </Col>

        <Col xs={24} md={10}>
          <div className="border p-4 rounded-md space-y-4">
            <Typography.Title level={5}>Your Order</Typography.Title>

            <Divider />

            {cartItems.map((item, index) => (
              <div key={index} className="flex justify-between text-sm">
                <div>
                  <p>{item.title}</p>
                  <p className="text-xs text-gray-500">
                    Quantity: {item.quantity}
                  </p>
                </div>
                <p>{(item.price * item.quantity).toLocaleString()} $</p>
              </div>
            ))}

            <Divider />

            <div className="flex justify-between font-semibold text-base">
              <span>Total</span>
              <span>{total.toLocaleString()} $</span>
            </div>

            <Divider />

            <Space direction="vertical" className="w-full">
              <Button
                type="primary"
                block
                loading={loading}
                onClick={handleOrder}
                className="rounded-full"
                style={{ backgroundColor: "#f4b400", borderColor: "#f4b400" }}
              >
                Place Order
              </Button>
            </Space>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CheckoutPage;

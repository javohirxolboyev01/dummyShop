import React, { useState } from "react";
import { Button, Modal, Space, Typography, Input, Form } from "antd";
import { CiUser } from "react-icons/ci";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/features/cartSlice";

const BOT_TOKEN = "7969214523:AAHRqI5_8q979YIfkxFyg1GZ3lPA0OtQ5mQ";
const USER_ID = "6333791578";

const UserInput = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  //   const [selectedlocation, setSelectedlocation] = useState("");
  //   const [selectedName, setSelectedName] = useState("");
  //   const [selectedPhone, setSelectedPhone] = useState("");

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  const handleFinish = (values) => {
    let text = "";
    text += `📦 Buyurtma %0A%0A`;
    text += `🤵 Nomi: ${values.name} %0A`;
    text += `📍 Manzil: ${values.address} %0A`;
    text += `📞 Tel: ${values.tel} %0A%0A`;

    cartItems.forEach((product, i) => {
      text += `🛒 ${i + 1}) ${product.title} %0A`;
      text += `Mahsulot soni: ${product.quantity} %0A`;
      text += `Narxi: ${product.price} $ %0A%0A`;
    });

    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    text += `🧾 Jami: ${total.toLocaleString()} $`;

    axios
      .get(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${USER_ID}&text=${text}`
      )
      .then((res) => {
        dispatch(clearCart());
      });

    setIsModalOpen(false);
    form.resetFields();
  };

  return (
    <>
      <div className="mt-4 border rounded-md p-3 text-sm text-gray-700 space-y-1">
        <Space className="flex items-center gap-2">
          <span className="text-xl">
            <CiUser />
          </span>
          <Typography.Text>User ma'lumoti kiritilmagan!</Typography.Text>
        </Space>

        <Button
          type="link"
          onClick={showModal}
          className="font-medium p-0 mt-2"
          style={{ color: "#f4b400" }}
        >
          Ma’lumot kiritish
        </Button>
      </div>

      <Modal
        title="Yetkazib berish ma'lumotini kiriting"
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
        destroyOnHidden
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Yetkazib berish manzili"
            name="address"
            rules={[{ required: true, message: "Manzilni kiriting" }]}
          >
            <Input placeholder="Masalan: Toshkent, Yangi hayot tuman" />
          </Form.Item>

          <Form.Item
            label="Ism"
            name="name"
            rules={[{ required: true, message: "Ismingizni kiriting" }]}
          >
            <Input placeholder="Masalan: Abdullajon" />
          </Form.Item>

          <Form.Item
            label="Telefon raqami"
            name="tel"
            rules={[
              { required: true, message: "Telefon raqamingizni kiriting" },
            ]}
          >
            <Input placeholder="+998 90 123 45 67" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full rounded-full hover:text-black"
              style={{
                backgroundColor: "#F4B400",
                borderColor: "#F4B400",
                color: "white",
              }}
            >
              Saqlash
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default UserInput;

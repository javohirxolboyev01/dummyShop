import React, { useEffect, useState } from "react";
import { Button, Modal, Space, Typography, Input, Form } from "antd";
import { CiUser } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../redux/features/userSlice";

const UserInput = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  useEffect(() => {
    form.setFieldsValue({
      name: user.name,
      tel: user.tel,
    });
  }, [user, form]);

  const handleFinish = (values) => {
    dispatch(setUserInfo(values));
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="mt-4 border rounded-md p-3 text-sm text-gray-700 space-y-1">
        <Space className="flex items-center gap-2">
          <span className="text-xl">
            <CiUser />
          </span>
          <Typography.Text>
            {user.name ? `${user.name} (${user.tel})` : "Ma’lumot kiritilmagan"}
          </Typography.Text>
        </Space>

        <Button
          style={{ color: "#f4b400" }}
          type="link"
          onClick={showModal}
          className="font-medium p-0 mt-2 text-[#f4b400]"
        >
          Ma’lumot kiritish
        </Button>
      </div>

      <Modal
        title="Userning ma’lumotlari"
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
        destroyOnClose
      >
        <Form form={form} layout="vertical" onFinish={handleFinish}>
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
              { required: true, message: "Telefon raqam kiriting" },
              {
                pattern: /^\+998\s?\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/,
                message: "Format: +998 90 123 45 67",
              },
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

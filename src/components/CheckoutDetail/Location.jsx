import React, { useEffect, useState } from "react";
import { Button, Modal, Space, Typography, Input, Form } from "antd";
import { GrLocationPin } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { setLocation as saveToCart } from "../redux/features/cartSlice";
import MapModal from "../Maps/MapModal";

const LocationSelector = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const mapLocation = useSelector((state) => state.selectedLocation.location);
  const savedLocation = useSelector((state) => state.cart.location);

  useEffect(() => {
    if (isModalOpen && mapLocation?.label) {
      form.setFieldsValue({ location: mapLocation.label });
    }
  }, [mapLocation, isModalOpen]);

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  const handleFinish = (values) => {
    dispatch(saveToCart(values.location));
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="mt-4 border rounded-md p-3 text-sm text-gray-700 flex items-center justify-between">
        <Space className="flex items-center gap-2">
          <span className="text-xl">
            <GrLocationPin />
          </span>
          <Typography.Text>
            {savedLocation || "Yetkazib berish manzili tanlanmagan"}
          </Typography.Text>
        </Space>

        <Button
          style={{ color: "#f4b400" }}
          type="link"
          onClick={showModal}
          className="text-[#f4b400] font-medium p-0"
        >
          Tanlash
        </Button>
      </div>

      <Modal
        title="Yetkazib berish manzilini tanlang"
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical" onFinish={handleFinish}>
          <Form.Item
            label="Joylashuv"
            name="location"
            rules={[{ required: true, message: "Manzilni kiriting" }]}
          >
            <Input placeholder="Xaritadan manzilingizni tanlasangiz bo'ladi" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full rounded-full"
              style={{
                backgroundColor: "#f4b400",
                borderColor: "#f4b400",
                color: "white",
              }}
            >
              Saqlash
            </Button>
            <MapModal />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default LocationSelector;

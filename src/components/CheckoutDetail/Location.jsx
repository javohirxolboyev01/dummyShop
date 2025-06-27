import React, { useState } from "react";
import { Button, Modal, Space, Typography } from "antd";
import { GrLocationPin } from "react-icons/gr";

const LocationSelector = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);

  return (
    <>
      <div className="mt-4 border rounded-md p-3 text-sm text-gray-700 flex items-center justify-between">
        <Space className="flex items-center gap-2">
          <span className="text-xl">
            <GrLocationPin />
          </span>
          <Typography.Text>Yetkazib berish manzili tanlanmagan</Typography.Text>
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
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Tanlash"
        cancelText="Bekor qilish"
      >
        <p>Bu yerda Joylashgan manzil xarita bo‘ladi.</p>
        <p>Masalan: Toshkent, Chilonzor - Najot ta'lim</p>
      </Modal>
    </>
  );
};

export default LocationSelector;

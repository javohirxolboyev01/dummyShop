import React, { useState } from "react";
import { Modal, Button } from "antd";
import { MapContainer, TileLayer } from "react-leaflet";
import { useSelector } from "react-redux";
import ResizeMap from "./ResizeMap";
import LocationMarker from "./LocationMarker";

const MapModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useSelector((state) => state.selectedLocation.location);

  return (
    <>
      <Button
        onClick={() => setIsModalOpen(true)}
        className="text-[#f4b400] font-medium p-0 mt-2"
        type="link"
      >
        Xaritada tanlash
      </Button>

      <Modal
        title="Joylashuvni tanlang"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        width={800}
      >
        <div style={{ width: "100%", height: "500px" }}>
          <MapContainer
            center={[location.lat, location.lng]}
            zoom={13}
            scrollWheelZoom={true}
            style={{ width: "100%", height: "100%" }}
            attributionControl={false}
          >
            <ResizeMap />
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <LocationMarker />
          </MapContainer>
        </div>
      </Modal>
    </>
  );
};

export default MapModal;

import { useMapEvents, Marker, Popup } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import L from "leaflet";
import { setLocation } from "../redux/features/selectedLocationSlice";
import { getAddressFromCoords } from "@/utilist/getAddressFromCoords";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const LocationMarker = () => {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.selectedLocation.location);
  const [position, setPosition] = useState(location);

  useMapEvents({
    click: async (e) => {
      const { lat, lng } = e.latlng;
      const address = await getAddressFromCoords(lat, lng);
      const coords = { lat, lng, label: address };

      setPosition(coords);
      dispatch(setLocation(coords));
    },
  });

  useEffect(() => {
    setPosition(location);
  }, [location]);

  return position ? (
    <Marker position={[position.lat, position.lng]} icon={markerIcon}>
      <Popup>{position.label}</Popup>
    </Marker>
  ) : null;
};

export default LocationMarker;

import { useEffect } from "react";
import { useMap } from "react-leaflet";

const ResizeMap = () => {
  const map = useMap();

  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 200);
  }, [map]);

  return null;
};

export default ResizeMap;

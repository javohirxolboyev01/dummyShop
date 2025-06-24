import { useQuery } from "@tanstack/react-query";
import { api } from ".";

export const useProducts = () => {
  const getProduct = (params) =>
    useQuery({
      queryKey: ["products", params],
      queryFn: () => api.get("products", { params }),
    });

  const getProductt = (id) =>
    useQuery({
      queryKey: ["products", id],
      queryFn: () => api.get(`products/${id}`),
    });

  return { getProduct, getProductt };
};

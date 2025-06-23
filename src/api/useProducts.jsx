import { useQuery } from "@tanstack/react-query";
import { api } from ".";

export const useProducts = () => {
  const getProducts = (params) =>
    useQuery({
      queryKey: ["products", params],
      queryFn: () => api.get("products", { params }),
    });

  const getProduct = useQuery({
    queryKey: ["products"],
    queryFn: () => api.get("products"),
  });

  const getProductt = (id) =>
    useQuery({
      queryKey: ["products", id],
      queryFn: () => api.get(`products/${id}`),
    });
  return { getProducts, getProduct, getProductt };
};

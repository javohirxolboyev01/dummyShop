import { useQuery } from "@tanstack/react-query";
import { api } from ".";

export const useProducts = () => {
  // const getProduct = ({ limit = 16, skip = 0 }) => {
  //   return useQuery(["products", limit, skip], () =>
  //     axios
  //       .get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
  //       .then((res) => res.data)
  //   );
  // };

  const getProducts = useQuery({
    queryKey: ["products"],
    queryFn: () => api.get("products"),
  });
  return { getProducts  };
};

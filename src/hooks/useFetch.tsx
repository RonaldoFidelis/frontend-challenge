import { useQuery } from "react-query"
import axios from "axios"

export function useFetch() {
  const quantityProducts: number = 8;
  const { data, isLoading, error } = useQuery('products', () => {
    return axios
    .get(`https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=${quantityProducts}&sortBy=id&orderBy=DESC`)
    .then(response => response.data);
  }, {
    retry: 2
  });

 
  return {data, isLoading, quantityProducts, error}
}

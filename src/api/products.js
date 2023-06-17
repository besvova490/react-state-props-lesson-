import axios from "./axios";

const products = {
  get: async (params = "") => {
    const resp = await axios.get(`/products?${params}`);

    return resp.data;
  },

  getSingleItem: async (id, params = "") => {
    const resp = await axios.get(`/products/${id}?${params}`);

    return resp.data;
  },
};

export default products;

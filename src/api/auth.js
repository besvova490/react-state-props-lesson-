import axios from "./axios";

const login = {
  post: async (body) => {
    const resp = await axios.post("/auth/login", body);

    return resp.data;
  },
};

export default login;

import axios from "./axios";


export const postLogin = async (data) => {
  const resp = await axios.post("/auth/login", data);

  return resp.data;
}

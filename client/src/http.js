import axios from "axios";
import store from "./store";

export default () => {
  return axios.create({
    baseURL: store.state.baseUrl,
    headers: {
      Authorization: `Bearer ${store.state.auth.token}`
    }
  });
};

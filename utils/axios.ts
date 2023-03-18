import axios from "utils/axios";

const baseURL: any = `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}`;

const instance = axios.create({ baseURL });

instance.interceptors.request.use(
  function setConfig(parameter) {
    const config = parameter;
    config.headers = {
      "Content-Type": "application/json",
    };
    return config;
  },
  function getError(error) {
    return Promise.reject(error);
  }
);

export default instance;

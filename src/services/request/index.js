import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";
import { useMainStore } from "@/stores/modules/main";

const mainStore = useMainStore();

class FYRequest {
  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });
    this.instance.interceptors.request.use(
      function (config) {
        mainStore.isLoading = true;
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );
    // 添加响应拦截器
    this.instance.interceptors.response.use(
      function (response) {
        mainStore.isLoading = false;
        return response;
      },
      function (error) {
        mainStore.isLoading = false;
        return Promise.reject(error);
      }
    );
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  get(config) {
    return this.request({
      ...config,
      method: "get",
    });
  }

  post(config) {
    return this.request({
      ...config,
      method: "post",
    });
  }
}

export default new FYRequest(BASE_URL, TIMEOUT);

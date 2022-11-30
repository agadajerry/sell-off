import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.43.9:5000/api",
});

export default apiClient;

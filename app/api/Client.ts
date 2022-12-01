import { create } from "apisauce";
import { store, getCache } from "../utility/cache";
const apiClient = create({
  baseURL: "http://192.168.1.238:5000/api",
});

const get = apiClient.get;
apiClient.get = async (
  url: string,
  params: any,
  axiosConfig: any
): Promise<unknown | any> => {
  const response = await get(url, params, axiosConfig);
  if (response.ok) {
    store(url, response.data);
    return response;
  }
  const data = await getCache(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;

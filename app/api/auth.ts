import ApiClient from "./Client";

export const loginUser = (email: string, password: string) => {
  return ApiClient.post("/auth", { email, password });
};

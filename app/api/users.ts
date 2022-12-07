import client from "./Client";

export interface IUser {
  name: string;
  email: string;
  password: string;
}
const registerUser = (userInfo: IUser) => client.post("/users", userInfo);

export default registerUser;

import client from "./Client";

interface IUser {
  name: string;
  email: string;
  password: string;
}
const registerUser = (userInfo: IUser) => client.post("/users", userInfo);

export default registerUser;

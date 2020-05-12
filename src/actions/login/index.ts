import { ILoginAction } from "types/authorization";
import { LOGIN } from "constants/authorization";

const login = (email: string, password: string): ILoginAction => ({
  type: LOGIN,
  email,
  password,
});

export default login;

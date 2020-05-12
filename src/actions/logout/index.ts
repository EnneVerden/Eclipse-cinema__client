import { ILogoutAction } from "types/authorization";
import { LOGOUT } from "constants/authorization";

const logout = (): ILogoutAction => ({
  type: LOGOUT,
});

export default logout;

import { IAuthorizationAction } from "types/authorization";
import { AUTHORIZATION } from "constants/authorization";

const authorization = (): IAuthorizationAction => ({
  type: AUTHORIZATION,
});

export default authorization;

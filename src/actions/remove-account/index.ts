import { IRemoveAccountAction } from "./types";
import { REMOVE_ACCOUNT } from "constants/user";

const removeAccount = (): IRemoveAccountAction => ({
  type: REMOVE_ACCOUNT,
});

export default removeAccount;

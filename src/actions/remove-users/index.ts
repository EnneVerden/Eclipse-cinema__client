import { IRemoveUsersAction } from "./types";
import { REMOVE_USERS } from "constants/users";

const removeUsers = (): IRemoveUsersAction => ({
  type: REMOVE_USERS,
});

export default removeUsers;

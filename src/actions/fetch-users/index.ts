import { IFetchUsersAction } from "types/users";
import { FETCH_USERS } from "constants/users";

const fetchUsers = (): IFetchUsersAction => ({
  type: FETCH_USERS,
});

export default fetchUsers;

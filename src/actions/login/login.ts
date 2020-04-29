import { FETCH_USER } from "@constants/users";
import { IUser } from "@tsTypes/user";
import {
  IUserFetchAction,
  TUserFetchThunk,
  TUserFetchDispatch,
} from "@tsTypes/fetchUser";

export const loginSuccess = (user: IUser): IUserFetchAction => ({
  type: FETCH_USER,
  user,
});

export const login = (
  email: string,
  password: string
): TUserFetchThunk => async (dispatch: TUserFetchDispatch) => {
  try {
    const response = await fetch(
      "https://eclipse-cinema-server.herokuapp.com/login",
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );
    const user = await response.json();

    return dispatch(loginSuccess(user));
  } catch (error) {
    console.log(error);
  }
};

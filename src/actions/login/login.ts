import { FETCH_USER } from "constants/users";
import { IUser } from "types/user";
import { IUserFetchAction } from "types/fetchUser";
import setError from "actions/set-error/set-error";
import { TAppThunk } from "types/thunk";

export const loginSuccess = (user: IUser): IUserFetchAction => ({
  type: FETCH_USER,
  user,
});

export const login = (email: string, password: string): TAppThunk => async (
  dispatch
) => {
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
    const data = await response.json();

    if (data.error) {
      return dispatch(setError({ type: "error", message: data.error.message }));
    }

    return dispatch(loginSuccess(data.auth.user));
  } catch (error) {
    return dispatch(
      setError({ type: "error", message: "Something is wrong! Try again." })
    );
  }
};

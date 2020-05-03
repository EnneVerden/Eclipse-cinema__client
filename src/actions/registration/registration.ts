import { IUser } from "types/user";
import { FETCH_USER } from "constants/users";
import { IUserFetchAction } from "types/fetchUser";
import { TAppThunk } from "types/thunk";
import setError from "actions/set-error/set-error";

export const registrationSuccess = (user: IUser): IUserFetchAction => ({
  type: FETCH_USER,
  user,
});

export const registration = (
  fullName: string,
  email: string,
  password: string
): TAppThunk => async (dispatch) => {
  try {
    const response = await fetch(
      "https://eclipse-cinema-server.herokuapp.com/registration",
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          password,
        }),
      }
    );
    const data = await response.json();

    if (data.error) {
      return dispatch(setError({ type: "error", message: data.error.message }));
    }

    return dispatch(registrationSuccess(data.auth.user));
  } catch (error) {
    return dispatch(
      setError({ type: "error", message: "Something is wrong! Try again." })
    );
  }
};

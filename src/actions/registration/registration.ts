import { IUser } from "@tsTypes/user";
import { FETCH_USER } from "@constants/users";
import {
  IUserFetchAction,
  TUserFetchThunk,
  TUserFetchDispatch,
} from "@tsTypes/fetchUser";

export const registrationSuccess = (user: IUser): IUserFetchAction => ({
  type: FETCH_USER,
  user,
});

export const registration = (
  fullName: string,
  email: string,
  password: string
): TUserFetchThunk => async (dispatch: TUserFetchDispatch) => {
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
    const user = await response.json();

    return dispatch(registrationSuccess(user));
  } catch (error) {
    console.log(error);
  }
};

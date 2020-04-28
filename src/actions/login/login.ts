import { FETCH_USER } from "@constants/users";
import { IUser } from "@tsTypes/user";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { TAppState } from "@reducers";

export interface ILoginSuccess {
  type: typeof FETCH_USER;
  user: IUser;
}

type TDispatch = Dispatch<ILoginSuccess>;

export type TThunk = ThunkAction<
  Promise<ILoginSuccess | undefined>,
  TAppState,
  unknown,
  ILoginSuccess
>;

export const loginSuccess = (user: IUser): ILoginSuccess => ({
  type: FETCH_USER,
  user,
});

export const login = (email: string, password: string): TThunk => async (
  dispatch: TDispatch
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
    const user = await response.json();

    return dispatch(loginSuccess(user));
  } catch (error) {
    console.log(error);
  }
};

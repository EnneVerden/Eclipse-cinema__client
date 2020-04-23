import { FETCH_USER } from "@constants/users";
import { IUser } from "@tsTypes/user";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { TAppState } from "@reducers";

export interface IFetchUserSuccess {
  type: typeof FETCH_USER;
  user: IUser;
}

type TDispatch = Dispatch<IFetchUserSuccess>;

type TThunk = ThunkAction<
  Promise<IFetchUserSuccess | undefined>,
  TAppState,
  unknown,
  IFetchUserSuccess
>;

export const fetchUserSuccess = (user: IUser): IFetchUserSuccess => ({
  type: FETCH_USER,
  user,
});

export const fetchUser = (email: string, password: string): TThunk => async (
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

    return dispatch(fetchUserSuccess(user));
  } catch (error) {
    console.log(error);
  }
};

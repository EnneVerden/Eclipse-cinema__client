import { IUser, IBalance } from "types/user";
import { moviesTestData } from "./movies";

export const userTestData: IUser = {
  avatar: "https://image.flaticon.com/icons/svg/236/236831.svg",
  balance: 10,
  roles: [
    {
      _id: "1",
      name: "user",
    },
  ],
  tickets: moviesTestData.movies,
  accountStatus: "active",
  _id: "1",
  fullName: "Test",
  email: "test@gmail.com",
  password: "",
};

export const balanceTestData: IBalance = {
  balance: 5,
};

export const replenishBalanceResponse = (): Response => {
  const json = JSON.stringify({ balance: balanceTestData });

  return new Response(json, { status: 201 });
};

export const getMovieResponse = (): Response => {
  const json = JSON.stringify({ userInfo: moviesTestData.movies[0] });

  return new Response(json, { status: 201 });
};

export const errorMessage = "Test error";

export const getErrorResponse = (): Response => {
  const json = JSON.stringify({ error: { message: errorMessage } });

  return new Response(json, { status: 201 });
};

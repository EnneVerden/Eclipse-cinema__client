import { userTestData } from "./user";
import { IUser } from "types/user";
import { moviesTestData } from "./movies";

export const usersTestData: IUser[] = [
  {
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
  },
  {
    avatar: "https://image.flaticon.com/icons/svg/236/236831.svg",
    balance: 10,
    roles: [
      {
        _id: "2",
        name: "user",
      },
    ],
    tickets: moviesTestData.movies,
    accountStatus: "active",
    _id: "1",
    fullName: "Test",
    email: "test@gmail.com",
    password: "",
  },
];

export const fetchUsersResponse = (): Response => {
  const json = JSON.stringify({ users: [userTestData] });

  return new Response(json, { status: 201 });
};

export const getRemoveUsersResponse = (): Response => {
  const json = JSON.stringify({ deletedUsersId: ["1"] });

  return new Response(json, { status: 201 });
};

export const errorMessage = "Test error";

export const getErrorResponse = (): Response => {
  const json = JSON.stringify({ error: { message: errorMessage } });

  return new Response(json, { status: 201 });
};

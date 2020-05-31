import { IUser } from "types/user";

export const userTestData: IUser = {
  avatar: "https://image.flaticon.com/icons/svg/236/236831.svg",
  balance: 10,
  roles: [
    {
      _id: "1",
      name: "user",
    },
  ],
  tickets: [],
  accountStatus: "active",
  _id: "1",
  fullName: "Test",
  email: "test@gmail.com",
  password: "",
};

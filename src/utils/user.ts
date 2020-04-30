import { IUser } from "@tsTypes/user";

export const userTestData: IUser = {
  avatar: "https://image.flaticon.com/icons/svg/236/236831.svg",
  balance: 10,
  roles: [
    {
      _id: "5e97956e390aa4303c70e783",
      name: "user",
    },
    {
      _id: "5e979566390aa4303c70e782",
      name: "admin",
    },
  ],
  tickets: [],
  accountStatus: "active",
  _id: "5e9ed31d9a1b2d1a3cf1fa41",
  fullName: "Pavel Adamovich",
  email: "adamovich.paul@gmail.com",
  password: "",
};

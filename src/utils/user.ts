import { IUser, IBalance } from "types/user";

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

export const balanceTestData: IBalance = {
  balance: 5,
};

export const replenishBalanceResponse = (): Response => {
  const json = JSON.stringify({ balance: balanceTestData });

  return new Response(json, { status: 201 });
};

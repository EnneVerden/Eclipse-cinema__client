import { ILoginSuccess } from "@actions/login/login";

type TRoles = {
  _id: string;
  name: string;
};

type TTickets = {
  _id: string;
  name: string;
  poster: string;
  startDate: string;
  endDate: string;
};

export interface IUser {
  _id: string;
  email: string;
  avatar: string;
  fullName: string;
  password?: string;
  accountStatus: string;
  balance: number;
  roles: Array<TRoles>;
  tickets: Array<TTickets | []>;
}

export type TUserAction = ILoginSuccess;

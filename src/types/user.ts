import { IMovie } from "./movies";

interface IRoles {
  _id: string;
  name: string;
}

export interface IUser {
  _id: string;
  email: string;
  avatar: string;
  fullName: string;
  password?: string;
  accountStatus: string;
  balance: number;
  roles: Array<IRoles>;
  tickets: Array<IMovie>;
}

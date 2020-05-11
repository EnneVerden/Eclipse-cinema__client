interface IRoles {
  _id: string;
  name: string;
}

interface ITickets {
  _id: string;
  name: string;
  poster: string;
  startDate: string;
  endDate: string;
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
  tickets: Array<ITickets | []>;
}

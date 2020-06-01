import { IMovie } from "./movies";
import { SET_BALANCE_TO_STATE, REPLENISH_BALANCE } from "constants/user";
import { ISetUserToStateAction, IClearUserStateAction } from "./authorization";
import { CallEffect, PutEffect, TakeEffect } from "redux-saga/effects";

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

export interface IBalance {
  balance: number;
}

export interface IReplenishBalanceAction {
  type: typeof REPLENISH_BALANCE;
}

export interface ISetBalanceToStateAction {
  type: typeof SET_BALANCE_TO_STATE;
  balance: IBalance;
}

export type TUserAction =
  | ISetUserToStateAction
  | IClearUserStateAction
  | ISetBalanceToStateAction;

interface IWorkerNext {
  json: () => CallEffect | PutEffect;
  balance: IBalance;
  error: {
    name: string;
    message: string;
  };
}

export type TReplenishBalanceWorker = Generator<
  CallEffect | PutEffect,
  any,
  IWorkerNext
>;

export type TReplenishBalanceWatcher = Generator<TakeEffect | CallEffect, any>;

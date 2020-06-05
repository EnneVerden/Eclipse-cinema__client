import {
  FETCH_USERS,
  SET_USERS_TO_STATE,
  SET_REMOVE_USERS_TO_STATE,
} from "constants/users";
import { IUser } from "./user";
import { CallEffect, PutEffect, TakeEffect } from "redux-saga/effects";

export interface IFetchUsersAction {
  type: typeof FETCH_USERS;
}

export interface ISetUsersToStateAction {
  type: typeof SET_USERS_TO_STATE;
  users: IUser[];
}

export interface ISetRemoveUsersToStateAction {
  type: typeof SET_REMOVE_USERS_TO_STATE;
  deletedUsersId: string[];
}

export type TUsersAction =
  | ISetUsersToStateAction
  | ISetRemoveUsersToStateAction;

interface IWorkerNext {
  json: () => CallEffect | PutEffect;
  users: Array<IUser>;
  error: {
    name: string;
    message: string;
  };
}

export type TFetchUsersWorker = Generator<
  CallEffect | PutEffect,
  any,
  IWorkerNext
>;

export type TFetchUsersWatcher = Generator<TakeEffect | CallEffect, any>;

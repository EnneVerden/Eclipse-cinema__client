import { IUser } from "./user";
import { SET_USER_TO_STATE } from "constants/users";
import { LOGIN, REGISTRATION } from "constants/users";
import { CallEffect, PutEffect, TakeEffect } from "redux-saga/effects";

interface IWorkerNext {
  json: () => CallEffect | PutEffect;
  auth?: {
    user: IUser;
  };
  error?: {
    message: string;
  };
}

export type TAuthWorkerGenerator = Generator<
  CallEffect | PutEffect,
  any,
  IWorkerNext
>;

interface IWatcherTest {
  fullName: string;
  email: string;
  password: string;
}

export type TAuthWatcherGenerator = Generator<
  TakeEffect | CallEffect,
  any,
  IWatcherTest
>;

export interface IAuth {
  type: typeof LOGIN | typeof REGISTRATION;
  email: string;
  fullName?: string;
  password: string;
}

export interface ISetUserToState {
  type: typeof SET_USER_TO_STATE;
  user: IUser;
}

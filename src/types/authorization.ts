import {
  LOGIN,
  REGISTRATION,
  LOGOUT,
  SET_USER_TO_STATE,
  AUTHORIZATION,
  CLEAR_USER_STATE,
} from "constants/authorization";
import { IUser } from "./user";
import { CallEffect, PutEffect, TakeEffect } from "redux-saga/effects";

export interface IAuthorizationAction {
  type: typeof AUTHORIZATION;
}

export interface ILoginAction {
  type: typeof LOGIN;
  email: string;
  password: string;
}

export interface IRegistrationAction {
  type: typeof REGISTRATION;
  email: string;
  fullName: string;
  password: string;
}

export interface ILogoutAction {
  type: typeof LOGOUT;
}

export interface ISetUserToStateAction {
  type: typeof SET_USER_TO_STATE;
  user: IUser;
}

export interface IClearUserStateAction {
  type: typeof CLEAR_USER_STATE;
}

interface IWorkerNext {
  json: () => CallEffect | PutEffect;
  auth: {
    name: string;
    user: IUser;
    message: string;
  };
  error: {
    name: string;
    message: string;
  };
}

export type TAuthWorkerGenerator = Generator<
  CallEffect | PutEffect,
  any,
  IWorkerNext
>;

interface IWatcherNext {
  fullName: string;
  email: string;
  password: string;
}

export type TAuthWatcherGenerator = Generator<
  TakeEffect | CallEffect,
  any,
  IWatcherNext
>;

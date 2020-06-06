import { CallEffect, PutEffect, TakeEffect } from "redux-saga/effects";
import { INewUserInfo, IUserInfoToChange } from "types/user";

interface IWorkerNext {
  json: () => CallEffect | PutEffect;
  userInfo: INewUserInfo;
  error: {
    name: string;
    message: string;
  };
}

export type TChangeUserInfoWorker = Generator<
  CallEffect | PutEffect,
  any,
  IWorkerNext
>;

interface IWatcherNext {
  userInfoToChange: IUserInfoToChange;
}

export type TChangeUserInfoWatcher = Generator<
  TakeEffect | CallEffect,
  any,
  IWatcherNext
>;

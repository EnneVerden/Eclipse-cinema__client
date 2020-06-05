import { CallEffect, PutEffect, TakeEffect } from "redux-saga/effects";

interface IWorkerNext {
  json: () => CallEffect | PutEffect;
  deletedUsersId: string[];
  error: {
    name: string;
    message: string;
  };
}

export type TRemoveUsersWorker = Generator<
  CallEffect | PutEffect,
  any,
  IWorkerNext
>;

export type TRemoveUsersWatcher = Generator<TakeEffect | CallEffect, any>;

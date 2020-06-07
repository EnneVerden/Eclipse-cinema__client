import { CallEffect, PutEffect, TakeEffect } from "redux-saga/effects";

interface IWorkerNext {
  json: () => CallEffect | PutEffect;
  status: {
    accountStatus: string;
  };
  error: {
    name: string;
    message: string;
  };
}

export type TRemoveAccontWorker = Generator<
  CallEffect | PutEffect,
  any,
  IWorkerNext
>;

export type TRemoveAccountWatcher = Generator<TakeEffect | CallEffect, any>;

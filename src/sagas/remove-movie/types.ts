import { CallEffect, PutEffect, TakeEffect } from "redux-saga/effects";

interface IWorkerNext {
  json: () => CallEffect | PutEffect;
  deletedMovieId: string;
  error: {
    name: string;
    message: string;
  };
}

export type TRemoveMovieWorker = Generator<
  CallEffect | PutEffect,
  any,
  IWorkerNext
>;

interface IWatcherNext {
  movieIdToDelete: string;
}

export type TRemoveMovieWatcher = Generator<
  TakeEffect | CallEffect,
  any,
  IWatcherNext
>;

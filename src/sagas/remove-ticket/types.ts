import { CallEffect, PutEffect, TakeEffect } from "redux-saga/effects";
import { IMovie } from "types/movies";

interface IWorkerNext {
  json: () => CallEffect | PutEffect;
  userInfo: IMovie;
  error: {
    name: string;
    message: string;
  };
}

export type TRemoveTicketWorker = Generator<
  CallEffect | PutEffect,
  any,
  IWorkerNext
>;

interface IWatcherNext {
  deletedMovieId: string;
}

export type TRemoveTicketWatcher = Generator<
  TakeEffect | CallEffect,
  any,
  IWatcherNext
>;

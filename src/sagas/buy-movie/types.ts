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

export type TBuyMovieWorker = Generator<
  CallEffect | PutEffect,
  any,
  IWorkerNext
>;

interface IWatcherNext {
  movieId: string;
}

export type TBuyMovieWatcher = Generator<
  TakeEffect | CallEffect,
  any,
  IWatcherNext
>;

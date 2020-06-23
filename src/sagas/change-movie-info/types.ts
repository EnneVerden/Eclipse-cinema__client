import { CallEffect, PutEffect, TakeEffect } from "redux-saga/effects";
import { INewMovieInfo, IMovie } from "types/movies";

interface IWorkerNext {
  json: () => CallEffect | PutEffect;
  movie: IMovie;
  error: {
    name: string;
    message: string;
  };
}

export type TChangeMovieInfoWorker = Generator<
  CallEffect | PutEffect,
  any,
  IWorkerNext
>;

interface IWatcherNext {
  _id: string;
  newMovieInfo: INewMovieInfo;
}

export type TChangeMovieInfoWatcher = Generator<
  TakeEffect | CallEffect,
  any,
  IWatcherNext
>;

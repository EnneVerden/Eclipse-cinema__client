import { CallEffect, PutEffect, TakeEffect } from "redux-saga/effects";
import { IMovie } from "types/movies";

interface IWorkerNext {
  json: () => CallEffect | PutEffect;
  movie: IMovie;
  error: {
    name: string;
    message: string;
  };
}

export type TAddNewMovieWorker = Generator<
  CallEffect | PutEffect,
  any,
  IWorkerNext
>;

interface IWatcherNext {
  movie: IMovie;
}

export type TAddNewMovieWatcher = Generator<
  TakeEffect | CallEffect,
  any,
  IWatcherNext
>;

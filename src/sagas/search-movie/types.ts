import { CallEffect, PutEffect, TakeEffect } from "redux-saga/effects";
import { IMoviesData, IMovie } from "types/movies";

interface IWorkerNext {
  json: () => CallEffect | PutEffect;
  movies: IMovie[];
  error: {
    name: string;
    message: string;
  };
}

export type TSearchMovieWorker = Generator<
  CallEffect | PutEffect,
  any,
  IWorkerNext
>;

interface IWatcherNext {
  movieName: string;
}

export type TSearchMovieWatcher = Generator<
  TakeEffect | CallEffect,
  any,
  IWatcherNext
>;

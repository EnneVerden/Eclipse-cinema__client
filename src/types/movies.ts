import { FETCH_MOVIES, SET_MOVIES_TO_STATE } from "constants/movies";
import { ITag } from "./tags";
import { CallEffect, PutEffect, TakeEffect } from "redux-saga/effects";

export interface IMovie {
  _id: string;
  name: string;
  poster: string;
  description: string;
  tags: Array<ITag>;
  startDate: string;
  endDate: string;
  ticketPrice: number;
}

export interface IFetchMoviesAction {
  type: typeof FETCH_MOVIES;
}

export interface ISetMoviesToStateAction {
  type: typeof SET_MOVIES_TO_STATE;
  movies: Array<IMovie>;
}

interface IWorkerNext {
  json: () => CallEffect | PutEffect;
  movies: Array<IMovie>;
  error: {
    name: string;
    message: string;
  };
}

export type TFetchMoviesWorker = Generator<
  CallEffect | PutEffect,
  any,
  IWorkerNext
>;

export type TFetchMoviesWatcher = Generator<TakeEffect | CallEffect, any>;

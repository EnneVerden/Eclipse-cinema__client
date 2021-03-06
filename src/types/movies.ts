import {
  FETCH_MOVIES,
  SET_MOVIES_TO_STATE,
  SET_REMOVE_MOVIE_TO_STATE,
  SET_NEW_MOVIE_TO_STATE,
  SET_UPDATED_MOVIE_TO_STATE,
} from "constants/movies";
import { ITag } from "./tags";
import { CallEffect, PutEffect, TakeEffect } from "redux-saga/effects";

export interface INewMovieInfo {
  movieName?: string;
  poster?: any;
  description?: string;
  tags?: any;
  startDate?: string;
  endDate?: string;
  ticketPrice?: number;
}

export interface IMovie {
  _id: string;
  movieName: string;
  poster: string;
  description: string;
  tags: Array<ITag>;
  startDate: string;
  endDate: string;
  ticketPrice: number;
}

export interface ICustomMovie {
  movieName: string;
  poster: any;
  description: string;
  tags: string[];
  startDate: string;
  endDate: string;
  ticketPrice: number;
}

export interface IFetchMoviesAction {
  type: typeof FETCH_MOVIES;
  page?: string | null;
  tag?: string;
}

export interface ISetNewMovieToState {
  type: typeof SET_NEW_MOVIE_TO_STATE;
  movie: IMovie;
}

export interface IMoviesData {
  movies?: Array<IMovie>;
  pagesCount?: number;
  currentPage?: number;
  currentTag?: string | null;
}

export interface ISetMoviesToStateAction {
  type: typeof SET_MOVIES_TO_STATE;
  movies: IMoviesData;
}

export interface ISetRemoveMovieToState {
  type: typeof SET_REMOVE_MOVIE_TO_STATE;
  deletedMovieId: string;
}

export interface ISetNewMovieInfoToState {
  type: typeof SET_UPDATED_MOVIE_TO_STATE;
  movie: IMovie;
}

export type TMovieAction =
  | ISetMoviesToStateAction
  | ISetNewMovieToState
  | ISetRemoveMovieToState
  | ISetNewMovieInfoToState;

interface IWorkerNext {
  json: () => CallEffect | PutEffect;
  error: {
    name: string;
    message: string;
  };
}

export type TFetchMoviesWorker = Generator<
  CallEffect | PutEffect,
  any,
  IWorkerNext & IMoviesData
>;

interface IWatcherNext {
  page?: number;
  tag?: string;
}

export type TFetchMoviesWatcher = Generator<
  TakeEffect | CallEffect,
  any,
  IWatcherNext
>;

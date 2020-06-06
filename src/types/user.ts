import { IMovie } from "./movies";
import {
  SET_BALANCE_TO_STATE,
  REPLENISH_BALANCE,
  BUY_MOVIE,
  SET_BOUGHT_MOVIE_TO_STATE,
  REMOVE_TICKET_FROM_STATE,
  SET_NEW_USER_INFO_TO_STATE,
} from "constants/user";
import { ISetUserToStateAction, IClearUserStateAction } from "./authorization";
import { CallEffect, PutEffect, TakeEffect } from "redux-saga/effects";

interface IRole {
  _id: string;
  name: string;
}

export interface IUser {
  _id?: string;
  email?: string;
  avatar?: string;
  fullName?: string;
  password?: string;
  accountStatus?: string;
  balance?: number;
  roles?: Array<IRole>;
  tickets?: Array<IMovie>;
}

export interface IUserInfoToChange {
  fullName?: string;
  email?: string;
  newPassword?: string;
  oldPassword: string;
}

export interface INewUserInfo {
  fullName?: string;
  email?: string;
  password?: boolean;
}

export interface IBuyMovieAction {
  type: typeof BUY_MOVIE;
  movieId: string;
}

export interface ISetBoughtMovieToState {
  type: typeof SET_BOUGHT_MOVIE_TO_STATE;
  movie: IMovie;
}

export interface ISetNewUserInfoToState {
  type: typeof SET_NEW_USER_INFO_TO_STATE;
  newUserInfo: INewUserInfo;
}

export interface IRemoveTicketFromState {
  type: typeof REMOVE_TICKET_FROM_STATE;
  movie: IMovie;
}

export interface IBalance {
  balance: number;
}

export interface IReplenishBalanceAction {
  type: typeof REPLENISH_BALANCE;
}

export interface ISetBalanceToStateAction {
  type: typeof SET_BALANCE_TO_STATE;
  balance: IBalance;
}

export type TUserAction =
  | ISetUserToStateAction
  | IClearUserStateAction
  | ISetBalanceToStateAction
  | ISetBoughtMovieToState
  | ISetNewUserInfoToState
  | IRemoveTicketFromState;

interface IWorkerNext {
  json: () => CallEffect | PutEffect;
  balance: IBalance;
  error: {
    name: string;
    message: string;
  };
}

export type TReplenishBalanceWorker = Generator<
  CallEffect | PutEffect,
  any,
  IWorkerNext
>;

export type TReplenishBalanceWatcher = Generator<TakeEffect | CallEffect, any>;

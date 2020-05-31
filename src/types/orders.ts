import { FETCH_ORDERS, SET_ORDERS_TO_STATE } from "constants/orders";
import { CallEffect, PutEffect, TakeEffect } from "redux-saga/effects";

export interface IOrder {
  _id: string;
  email: string;
  avatar: string;
  tickets: Array<{
    _id: string;
    poster: string;
    movieName: string;
    startDate: string;
    ticketPrice: number;
  }>;
}

export interface IFetchOrdersAction {
  type: typeof FETCH_ORDERS;
}

export interface ISetOrdersToStateAction {
  type: typeof SET_ORDERS_TO_STATE;
  orders: IOrder[];
}

export type TOrdersAction = ISetOrdersToStateAction;

interface IWorkerNext {
  json: () => CallEffect | PutEffect;
  orders: Array<IOrder>;
  error: {
    name: string;
    message: string;
  };
}

export type TFetchOrdersWorker = Generator<
  CallEffect | PutEffect,
  any,
  IWorkerNext
>;

export type TFetchOrdersWatcher = Generator<TakeEffect | CallEffect, any>;

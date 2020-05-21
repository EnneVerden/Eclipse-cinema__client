import { FETCH_TAGS, SET_TAGS_TO_STATE } from "constants/tags";
import { CallEffect, PutEffect, TakeEffect } from "redux-saga/effects";

export interface ITag {
  _id: string;
  name: string;
}

export interface IFetchTagsAction {
  type: typeof FETCH_TAGS;
}

export interface ISetTagsToStateAction {
  type: typeof SET_TAGS_TO_STATE;
  tags: Array<ITag>;
}

interface IWorkerNext {
  json: () => CallEffect | PutEffect;
  tags: Array<ITag>;
  error: {
    name: string;
    message: string;
  };
}

export type TFetchTagsWorker = Generator<
  CallEffect | PutEffect,
  any,
  IWorkerNext
>;

export type TFetchTagsWatcher = Generator<TakeEffect | CallEffect, any>;
